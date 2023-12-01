import { MongoClient } from 'mongodb';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import DashboardLayout from '../../../components/DashboardLayout';
import Login from '../../../components/Login';
import classes from '../../../styles/products.module.css';
import Link from 'next/link';



function Products({ products }) {

    const router = useRouter();

    const deleteProductHandler = async (id) => {
        // Update the order status in the database using an API request
        try {
            const response = await fetch(`/api/deleteProduct/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response) {
                toast.success("Product has been deleted successfully...");
                router.reload();
            }
        } catch (error) {
            console.error('Error deleting product:', error);
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
                                <th>Pro. Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{product.name}</td>
                                        <td>{product.category}</td>
                                        <td>&euro; {product.price}</td>
                                        <td><Image src={product.imageUrl} alt='' width={100} height={70} /> </td>
                                        <td><Link href={`/dashboard/products/editProduct/${product._id}`}><span className={classes.editBtn}>Edit</span></Link> <button type='button' onClick={deleteProductHandler(product._id)}><span className={classes.deleteBtn}>Delete</span></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Toaster />
        </DashboardLayout>
    )
}

export default Products;

export const getServerSideProps = async () => {
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);

    const collection = db.collection('FoodItem');
    const products = await collection.find({}).toArray();

    client.close();

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }
}