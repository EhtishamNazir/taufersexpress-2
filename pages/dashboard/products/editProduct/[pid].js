import { useState } from 'react';
import { MongoClient, ObjectId } from 'mongodb';
// import Image from 'next/image';

import DashboardLayout from '../../../../components/DashboardLayout';
import Login from '../../../../components/Login';
import classes from '../../../../styles/addProduct.module.css';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

export default function Product({ product }) {
 
    const [pName, setPName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [media, setMedia] = useState('');

    const router = useRouter();

    const updateProductHandler = async (id) => {
        // Update the order status in the database using an API request
        try {
            const response = await fetch(`/api/editProduct/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: price,
            })
            if(response){
                toast.success("Product has been updated successfully...");
                router.push('/dashboard/products');
            }
            
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
                <form>
                    {/* <div className={classes.group}>
                        <label>Product Name</label>
                        <input type='text' className={classes.groupInput} onChange={(e) => setPName(e.target.value)} value={product.name} required />
                    </div>
                    <div className={classes.group}>
                        <label>Product Category</label>
                        <select className={classes.groupInput} onChange={(e) => setCategory(e.target.value)} required>
                            <option value=''>Select Category</option>
                            <option value='pizza'>Pizza</option>
                            <option value='family'>Family Pizza</option>
                            <option value='sandwitch'>Sandwitch</option>
                            <option value='burger'>Burger</option>
                            <option value='drink'>Drink</option>
                            <option value='oriental'>Oriental Food</option>
                            <option value='doner'>Doner Box</option>
                            <option value='salad'>Salad</option>
                            <option value='finger'>Finger Food</option>
                            <option value='calzone'>Calzone & Floncionos</option>
                        </select>
                    </div> */}
                    <div className={classes.group}>
                        <label>Product Price</label>
                        <span>{product.price}</span>
                        <input type='number' className={classes.groupInput} onChange={(e) => setPrice(e.target.value)} value={price} required />
                    </div>
                    {/* <div className={classes.group}>
                        <label>Product Details</label>
                        <textarea rows={5} placeholder='Enter details here' className={classes.groupInput} onChange={(e) => setDetails(e.target.value)} value={details} required></textarea>
                    </div> */}
                    {/* <div className={classes.file}>
                        <label> Upload Product Image
                            <input type="file" accept="image/*"
                                onChange={(e) => setMedia(e.target.files[0])} size="60" required />
                        </label>
                    </div> */}
                    <div className={classes.submitBtn}>
                        <button type='button' className={`btn ${classes.btn}`} onClick={() => updateProductHandler(product._id)} >Update Product</button>
                    </div>
                </form>
            </div>
            <Toaster />
        </DashboardLayout>
    )
}

export async function getStaticProps({ params }) {
    const productId = params.pid;
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('FoodItem');
    const product = await collection.findOne({ _id: new ObjectId(productId) });

    client.close();

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        },
    };
}

export async function getStaticPaths() {
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('FoodItem');
    const products = await collection.find({}, { projection: { _id: 1 } }).toArray();

    const paths = products.map((product) => ({
        params: { pid: product._id.toString() },
    }));

    client.close();

    return {
        paths,
        fallback: false, // Or 'blocking' if you want to use incremental static regeneration
    };
}