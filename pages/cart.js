import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useStore } from '../store/store';
import toast, { Toaster } from 'react-hot-toast';

import Layout from '../components/Layout';
import OrderModal from '../components/OrderModal';
import classes from '../styles/cart.module.css';

export default function Cart() {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [order, setOrder] = useState(
        typeof window !== 'undefined' && localStorage.getItem('order')
    );
    const cartData = useStore((state) => state.cart);
    const cartDataLocalStorage = cartData.pizzas;
    const removePizza = useStore((state) => state.removePizza);
    const router = useRouter();

    const handleRemove = (index) => {
        removePizza(index);
        toast.error("Item has been removed from the cart");
    }

    const total = () => {
        return cartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);
    }


    const handleOnDelivery = () => {
        const orderDate = new Date();
        setPaymentMethod(0);
        typeof window !== 'undefined' && localStorage.setItem('total', total());
        // typeof window !== 'undefined' && localStorage.setItem('cartData', JSON.stringify(cartDataLocalStorage));
    }

    const handleCheckout = async () => {
        typeof window !== 'undefined' && localStorage.setItem('total', total());

        setPaymentMethod(1);
        const response = await fetch('/api/stripe', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(cartData.pizzas),
        });

        if (response.status === 500) return;

        const data = await response.json();
        toast.loading("Redirecting...");
        router.push(data.url);
    }

    return (
        <Layout>
            <div className={classes.container}>
                {/* Details */}
                <div className={classes.details}>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th>Pizza</th>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className={classes.tbody}>
                            {cartData.pizzas.length > 0 && cartData.pizzas.map((pizza, i) => {
                                return (
                                    <tr key={i}>
                                        <td className={classes.imageTd}><Image src={pizza.imageUrl} alt={pizza.name} objectFit='cover' width={100} height={75} /></td>
                                        <td>{pizza.name}</td>
                                        <td>{
                                            pizza.size
                                        }</td>
                                        <td>{pizza.price}</td>
                                        <td>{pizza.quantity}</td>
                                        <td>{pizza.price * pizza.quantity}</td>
                                        <td style={{ color: 'var(--themeOrange)', cursor: 'pointer', fontSize: '1.3rem' }} onClick={() => handleRemove(i)}>x</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {/* Summary */}
                <div className={classes.cart}>
                    <span>Cart</span>
                    <div className={classes.cartDetails}>
                        <div>
                            <span>Items:</span>
                            <span>{cartData.pizzas.length}</span>
                        </div>
                        <div>
                            <span>Total:</span>
                            <span><span style={{ color: 'var(--themeOrange)' }}>€ </span>{total()}</span>
                        </div>
                    </div>
                    {!order && cartData.pizzas.length > 0 ? (
                        <div className={classes.buttons}>
                            <button className='btn' onClick={handleOnDelivery}>Pay on Delivery</button>
                            <button className='btn' onClick={handleCheckout}>Pay Now</button>
                        </div>
                    ) : null}
                </div>
            </div>
            <Toaster />
            <OrderModal
                opened={paymentMethod === 0}
                setOpened={setPaymentMethod}
                paymentMethod={paymentMethod}
                orderDetails={cartData.pizzas}
            />
        </Layout>
    )
}
