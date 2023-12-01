import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/router";

import DashboardLayout from '../../../components/DashboardLayout';
import classes from '../../../styles/addProduct.module.css';
import Login from '../../../components/Login';

function AddProduct() {

    const [pName, setPName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [media, setMedia] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const mediaUrl = await imageUpload();
            const res = await fetch(`/api/addProduct`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pName,
                    category,
                    price,
                    details,
                    mediaUrl,
                })
            })
            const res2 = await res.json()
            if (res2.error) {
                toast.error(res2.error);
            } else {
                toast.success("Product saved successfully");
                router.push('/dashboard/products');
            }

        } catch (err) {
            console.log(err)
        }

    }

    const imageUpload = async () => {
        const data = new FormData()
        data.append('file', media)
        data.append('upload_preset', "taufersexpress")
        data.append('cloud_name', "djtbsgzry")
        const res = await fetch("https://api.cloudinary.com/v1_1/djtbsgzry/image/upload", {
            method: "POST",
            body: data
        })
        const res2 = await res.json()
        return res2.url
    }

    if (!(typeof window !== 'undefined' && localStorage.getItem('isLoggedIn'))) {
        return <Login />
    }

    return (
        <DashboardLayout>
            <div className={classes.container}>
                <form onSubmit={handleSubmit}>
                    <div className={classes.group}>
                        <label>Product Name</label>
                        <input type='text' placeholder='Italian Pizza' className={classes.groupInput} onChange={(e) => setPName(e.target.value)} value={pName} required />
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
                    </div>
                    <div className={classes.group}>
                        <label>Product Price</label>
                        <input type='number' placeholder='15' className={classes.groupInput} onChange={(e) => setPrice(e.target.value)} value={price} required />
                    </div>
                    <div className={classes.group}>
                        <label>Product Details</label>
                        <textarea rows={5} placeholder='Enter details here' className={classes.groupInput} onChange={(e) => setDetails(e.target.value)} value={details} required></textarea>
                    </div>
                    <div className={classes.file}>
                        <label> Upload Product Image
                            <input type="file" accept="image/*"
                                onChange={(e) => setMedia(e.target.files[0])} size="60" required />
                        </label>
                    </div>
                    <div className={classes.submitBtn}>
                        <button type='submit' className={`btn ${classes.btn}`}>Add Product</button>
                    </div>
                </form>
            </div>
            <Toaster />
        </DashboardLayout>
    )
}

export default AddProduct