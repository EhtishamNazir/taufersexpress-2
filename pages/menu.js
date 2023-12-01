import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MongoClient } from 'mongodb';
import { Cloudinary } from 'cloudinary-core';

import classes from '../styles/menuPage.module.css';
import Layout from '../components/Layout';
import Pizza from '../assets/pizza.png';
import Sandwitch from '../assets/sandwitch.png';
import Burger from '../assets/burger.png';
import Wrap from '../assets/wrap.png';
import Doner from '../assets/doner.png';
import Fries from '../assets/fries.png';
import Drinks from '../assets/drinks.png';
import Calzone from '../assets/calzone.png';
import Salad from '../assets/salad.png';

export default function FullMenu({ pizzas, sandwiches, familyPizza, burgers, oriental, finger, salads, drinks, calzone, doner }) {
    const [activeTab, setActiveTab] = useState(0);

    const cloudinary = new Cloudinary({
        cloud_name: 'djtbsgzry',
    });

    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <span>OUR MENU</span>
                    <span>Menu That Always</span>
                    <span>Make you Fall in Love</span>
                </div>
                <div className={classes.tabs}>
                    <div onClick={() => setActiveTab(0)} className={` ${activeTab === 0 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Pizza} alt='Pizza' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Pizza</span>
                    </div>
                    <div onClick={() => setActiveTab(9)} className={` ${activeTab === 9 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Pizza} alt='Pizza' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Family Pizza</span>
                    </div>
                    <div onClick={() => setActiveTab(1)} className={` ${activeTab === 1 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Sandwitch} alt='Sandwitch' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Sandwitch</span>
                    </div>
                    <div onClick={() => setActiveTab(2)} className={` ${activeTab === 2 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Burger} alt='Burger' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Burgers</span>
                    </div>
                    <div onClick={() => setActiveTab(3)} className={` ${activeTab === 3 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Wrap} alt='Wrap' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Oriental</span>
                    </div>
                    <div onClick={() => setActiveTab(4)} className={` ${activeTab === 4 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Doner} alt='Doner' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Doner Box</span>
                    </div>
                    <div onClick={() => setActiveTab(5)} className={` ${activeTab === 5 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Salad} alt='Salad' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Salads</span>
                    </div>
                    <div onClick={() => setActiveTab(6)} className={` ${activeTab === 6 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Fries} alt='Fries' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Crisps</span>
                    </div>
                    <div onClick={() => setActiveTab(7)} className={` ${activeTab === 7 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Calzone} alt='Calzone' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Calzone</span>
                    </div>
                    <div onClick={() => setActiveTab(8)} className={` ${activeTab === 8 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Drinks} alt='Drinks' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Drinks</span>
                    </div>
                </div>
                {/* Pizzas */}
                {activeTab === 0 ? <div className={classes.menu}>
                    {
                        pizzas.length > 0 ? pizzas.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 1 ? <div className={classes.menu}>
                    {
                        sandwiches.length > 0 ? sandwiches.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 2 ? <div className={classes.menu}>
                    {
                        burgers.length > 0 ? burgers.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 3 ? <div className={classes.menu}>
                    {
                        oriental.length > 0 ? oriental.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 4 ? <div className={classes.menu}>
                    {
                        doner.length > 0 ? doner.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 5 ? <div className={classes.menu}>
                    {
                        salads.length > 0 ? salads.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 6 ? <div className={classes.menu}>
                    {
                        finger.length > 0 ? finger.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 7 ? <div className={classes.menu}>
                    {
                        calzone.length > 0 ? calzone.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 8 ? <div className={classes.menu}>
                    {
                        drinks.length > 0 ? drinks.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 9 ? <div className={classes.menu}>
                    {
                        familyPizza.length > 0 ? familyPizza.map((pizza, id) => {
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza._id}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image src={pizza.imageUrl} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
            </div>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);

    const collection = db.collection('FoodItem');
    const pizzas = await collection.find({ category: "pizza" }).toArray();
    const familyPizza = await collection.find({ category: "family" }).toArray();
    const sandwiches = await collection.find({ category: "sandwitch" }).toArray();
    const burgers = await collection.find({ category: "burger" }).toArray();
    const oriental = await collection.find({ category: "oriental" }).toArray();
    const doner = await collection.find({ category: "doner" }).toArray();
    const salads = await collection.find({ category: "salad" }).toArray();
    const finger = await collection.find({ category: "finger" }).toArray();
    const calzone = await collection.find({ category: "calzone" }).toArray();
    const drinks = await collection.find({ category: "drink" }).toArray();

    client.close();

    return {
        props: {
            pizzas: JSON.parse(JSON.stringify(pizzas)),
            sandwiches: JSON.parse(JSON.stringify(sandwiches)),
            familyPizza: JSON.parse(JSON.stringify(familyPizza)),
            burgers: JSON.parse(JSON.stringify(burgers)),
            oriental: JSON.parse(JSON.stringify(oriental)),
            doner: JSON.parse(JSON.stringify(doner)),
            salads: JSON.parse(JSON.stringify(salads)),
            finger: JSON.parse(JSON.stringify(finger)),
            calzone: JSON.parse(JSON.stringify(calzone)),
            drinks: JSON.parse(JSON.stringify(drinks)),
        }
    }
}

