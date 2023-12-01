import Layout from '../../components/Layout';
import Image from 'next/image';
import { MongoClient, ObjectId } from 'mongodb';

import classes from '../../styles/order.module.css';
import Cooking from '../../assets/cooking.png';
import Onway from '../../assets/onway.png';
import Delivered from '../../assets/delivered.png';
import Bill from '../../assets/bill.png';
import Spinner from '../../assets/spinner.svg';
import { useEffect } from 'react';

export default function Orders({ order }) {

    useEffect(() => {
        if (order.orderStatus > 3) {
            typeof window !== 'undefined' && localStorage.removeItem('total');
            typeof window !== 'undefined' && localStorage.removeItem('order');
        }
    }, [order]);

    return (
        <Layout>
            <div className={classes.container}>
                <span className={classes.heading}>
                    Order in Process
                </span>
                <div className={classes.details}>
                    <div>
                        <span>Order Id</span>
                        <span>{order._id}</span>
                    </div>
                    <div>
                        <span>Customer Name</span>
                        <span>{order.customerName}</span>
                    </div>
                    <div>
                        <span>Phone</span>
                        <span>{order.customerPhone}</span>
                    </div>
                    <div>
                        <span>Method</span>
                        <span>
                            {
                                order.method === 0 ? 'Cash on Delivery' : 'Online Payment (Paid)'
                            }
                        </span>
                    </div>
                    <div>
                        <span>Total Amount</span>
                        <span>&euro; {order.totalAmount}</span>
                    </div>
                </div>
                <div className={classes.statusContainer}>
                    <div className={classes.status}>
                        <Image src={Bill} alt="Bill" height={50} width={50} />
                        <span>Payment</span>
                        {order.paymentMethod === 0 ?
                            <span className={classes.pending}>On Delivery</span> :
                            <span className={classes.completed}>
                                <span>Completed</span><span>Done</span>
                            </span>
                        }
                    </div>
                    <div className={classes.status}>
                        <Image src={Cooking} alt="Cooking Image" height={50} width={50} />
                        <span>Cooking</span>
                        {order.orderStatus === 1 &&
                            <div className={classes.spinner}>
                                <Image src={Spinner} alt='Spinner' height={96} width={96} />
                            </div>
                        }
                        {order.orderStatus > 1 &&
                            <span className={classes.completed}>
                                <span>Completed</span><span>Done</span>
                            </span>
                        }
                    </div>
                    <div className={classes.status}>
                        <Image src={Onway} alt="Onway Image" height={50} width={50} />
                        <span>Onway</span>
                        {order.status === 2 &&
                            <div className={classes.spinner}>
                                <Image src={Spinner} alt='Spinner' height={96} width={96} />
                            </div>
                        }
                        {order.orderStatus > 2 &&
                            <span className={classes.completed}>
                                <span>Completed</span><span>Done</span>
                            </span>
                        }
                    </div>
                    <div className={classes.status}>
                        <Image src={Delivered} alt="Delivered" height={50} width={50} />
                        <span>Delivered</span>
                        {order.orderStatus === 3 &&
                            <div className={classes.spinner}>
                                <Image src={Spinner} alt='Spinner' height={96} width={96} />
                            </div>
                        }
                        {order.orderStatus > 3 &&
                            <span className={classes.completed}>
                                <span>Completed</span><span>Done</span>
                            </span>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const orderId = params.id;
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('Order');
    const order = await collection.findOne({ _id: new ObjectId(orderId) });

    client.close();

    return {
        props: {
            order: JSON.parse(JSON.stringify(order)),
        },
    }
}

export async function getStaticPaths() {
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('Order');
    const orders = await collection.find({}, { projection: { _id: 1 } }).toArray();

    const paths = orders.map((order) => ({
        params: { id: order._id.toString() },
    }));

    client.close();

    return {
        paths,
        fallback: false, // Or 'blocking' if you want to use incremental static regeneration
    };
}
