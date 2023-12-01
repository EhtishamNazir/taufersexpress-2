import { useState } from 'react';
import Image from 'next/image';
import { MongoClient, ObjectId } from 'mongodb';
import { useStore } from '../../store/store';

import Layout from '../../components/Layout';
import classes from '../../styles/pizza.module.css';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import toast, { Toaster } from 'react-hot-toast';

export default function Pizza({ pizza }) {
    const [size, setSize] = useState("Normal");
    const [quantity, setQuantity] = useState(1);

    const quantityHandler = (type) => {
        type === "incr"
            ? setQuantity((prev) => prev + 1)
            : quantity === 1
                ? null
                : setQuantity((prev) => prev - 1)
    }

    // add to cart function
    const addPizza = useStore((state) => state.addPizza);
    const addToCart = () => {
        addPizza({ ...pizza, price: pizza.price, quantity: quantity, size: size });
        toast.success("Added to Cart");
    }

    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.imageWrapper}>
                    <Image src={pizza.imageUrl} alt={pizza.name} layout='fill' objectFit='cover' optimized />
                </div>
                {/* Right Side */}
                <div className={classes.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>
                    <span><span style={{ color: 'var(--themeOrange)' }}>€ </span>{pizza.price}</span>
                    <div className={classes.size}>
                        <span>Size:</span>
                        <div className={classes.sizeVariants}>
                            <div className={classes.selected}>N<span>ormal</span></div>
                        </div>
                    </div>
                    {/* Quantity Counter */}
                    <div className={classes.quantity}>
                        <span>Quantity</span>
                        <div className={classes.counter}>
                            <Image src={LeftArrow} alt='Left Arrow' width={20} height={20} objectFit='contain' onClick={() => quantityHandler("decr")} />
                            <span>{quantity}</span>
                            <Image src={RightArrow} alt='Right Arrow' width={20} height={20} objectFit='contain' onClick={() => quantityHandler("incr")} />
                        </div>
                    </div>
                    {/* Add to Cart Button */}
                    <div className={`btn ${classes.btn}`} onClick={addToCart}>
                        Add to Cart
                    </div>
                </div>
                <Toaster />
            </div>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const pizzaId = params.id;
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('FoodItem');
    const pizza = await collection.findOne({ _id: new ObjectId(pizzaId) });

    client.close();

    return {
        props: {
            pizza: JSON.parse(JSON.stringify(pizza)),
        },
    };
}

export async function getStaticPaths() {
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('FoodItem');
    const pizzas = await collection.find({}, { projection: { _id: 1 } }).toArray();

    const paths = pizzas.map((pizza) => ({
        params: { id: pizza._id.toString() },
    }));

    client.close();

    return {
        paths,
        fallback: false, // Or 'blocking' if you want to use incremental static regeneration
    };
}