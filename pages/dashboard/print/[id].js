import { MongoClient, ObjectId } from 'mongodb';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import classes from '../../../styles/receiptPage.module.css';
import { ComponentToPrint } from '../../../components/Receipt';

export default function Orders({ order }) {

    const componentRef = useRef();
    const handlePrinting = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className={classes.container}>
            <ComponentToPrint orderData={order} orderDetails={order.orderDetails} ref={componentRef} />
            <br />
            <button onClick={handlePrinting}>Print Receipt</button>
        </div>
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
