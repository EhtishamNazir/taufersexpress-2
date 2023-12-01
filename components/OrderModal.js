import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useRouter } from 'next/router';

import classes from '../styles/orderModal.module.css';
import { createOrder } from '../lib/orderHandler';
import toast, { Toaster } from 'react-hot-toast';
import { useStore } from '../store/store';

export default function OrderModal({ opened, setOpened, paymentMethod, orderDetails }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });
    const theme = useMantineTheme();
    const resetCart = useStore((state) => state.resetCart);
    const router = useRouter();

    const total = typeof window !== 'undefined' && localStorage.getItem('total');

    const handleNameInput = (e) => {
        setFormData({ ...formData, name: e.target.value });
    }

    const handlePhoneInput = (e) => {
        setFormData({ ...formData, phone: e.target.value });
    }

    const handleAddressInput = (e) => {
        setFormData({ ...formData, address: e.target.value });
    }

    const handleSubmit = async (e) => {
        const orderDate = new Date();
        e.preventDefault();
        const id = await createOrder({ ...formData, total, paymentMethod, orderDetails, orderDate });
        toast.success("Order Placed");
        resetCart();
        {
            typeof window !== 'undefined' && localStorage.setItem('order', id.insertedId);
        }

        if(id){
            router.push(`/order/${id.insertedId}`);
        }
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(null)}
                title="Place Order"
                overlayProps={{
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                    opacity: 0.55,
                    blur: 3,
                }}
            >
                {/* Modal content */}
                <form className={classes.formContainer} onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' onChange={handleNameInput} required />
                    <input type='text' name='phone' placeholder='Phone Number' onChange={handlePhoneInput} required />
                    <textarea name='address' cols={8} rows={3} placeholder='Address' onChange={handleAddressInput} required></textarea>
                    <span>
                        You will pay <span>€ {total}</span> on delivery
                    </span>
                    <button type='submit' className='btn'>Place Order</button>
                </form>
                <Toaster />
            </Modal>
        </>
    )
}
