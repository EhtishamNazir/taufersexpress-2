import { MongoClient } from 'mongodb';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import DashboardLayout from '../../components/DashboardLayout';
import Login from '../../components/Login';
import classes from '../../styles/dashboard.module.css';
import RightArrow from '../../assets/right-arrow.png';



function Dashboard({ orders }) {

    const [newStatus, setNewStatus] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            // Reload the page
            location.reload();
        }, 40000); // 5000 milliseconds = 5 seconds

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    const updateStatusHandler = async (id) => {
        // Update the order status in the database using an API request
        try {
            const response = await fetch(`/api/updateOrder/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: newStatus,
            });
            toast.success("Order Status has been updated successfully...");
            router.reload();
        } catch (error) {
            console.error('Error updating order status:', error);
            toast.error("Something went wrong");
        }
    };

    if (!(typeof window !== 'undefined' && localStorage.getItem('isLoggedIn'))) {
        return <Login />
    }

    return (
        <DashboardLayout>
            <div className={classes.container}>
                <div className={classes.tableResponsive}>
                    <table>
                        <thead>
                            <tr>
                                <th>Cust. Name</th>
                                <th>Cust. Phone</th>
                                <th>Address</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Change Status</th>
                                <th>Date</th>
                                <th>Details</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders ? orders.map((order, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{order.customerName}</td>
                                        <td>{order.customerPhone}</td>
                                        <td>{order.customerAddress}</td>
                                        <td>&euro; {order.totalAmount}</td>
                                        <td>{order.paymentMethod === 0 ? "On Delivery" : "Paid"}</td>
                                        <td>
                                            <span>{order.orderStatus === 1 ? "Cooking" : order.orderStatus === 2 ? "On Deilvery" :
                                                order.orderStatus === 3 ? "Delivered" : "Completed"}</span>
                                        </td>
                                        <td>
                                            <div className={classes.changeStatusCont}>
                                                <input type='number' className={classes.status} onChange={(e) => setNewStatus(e.target.value)} />
                                                <button onClick={() => updateStatusHandler(order._id)}><Image src={RightArrow} alt='Arrow' width={30} height={30} /></button>
                                            </div>
                                        </td>
                                        <td style={{width: '150px', textAlign: 'center'}}>{order.orderDate.slice(0, 10)}</td>
                                        <td>
                                            <ul className={classes.orderDetails}>
                                                {order.orderDetails ? order.orderDetails.map((order, orderIndex) => (
                                                    <li key={orderIndex}>
                                                        <span>{order.name}</span>({order.quantity})
                                                    </li>
                                                )) : <li>Nothing in order details</li>}
                                            </ul>
                                        </td>
                                        <td>
                                            <a href={`/dashboard/print/${order._id}`} target="_blank" className={classes.printBtn}>Print</a>
                                        </td>
                                    </tr>
                                )
                            }) : null}
                        </tbody>
                    </table>
                </div>
            </div>
            <Toaster />
        </DashboardLayout>
    )
}

export default Dashboard;

export const getServerSideProps = async () => {
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);

    const collection = db.collection('Order');
    const orders = await collection.find({ orderStatus: { $lte: 3 } }).sort({ '_id': -1 }).toArray();

    client.close();
    
    return {
        props: {
            orders: JSON.parse(JSON.stringify(orders)),
        }
    }
}