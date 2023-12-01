import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import classes from '../styles/dashboardHeader.module.css';
import Logo from '../assets/Logo-Dark.png';
import { UilBars } from '@iconscout/react-unicons';
import { useRouter } from "next/router";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    // state in terminal

    const handleMobileMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        typeof window !== 'undefined' && localStorage.removeItem('isLoggedIn');
        setIsOpen(false);
        router.reload();
    }

    return (
        <div className={classes.header}>
            {/* Logo Side */}
            <div className={classes.logo}>
                <Link href='/dashboard'>
                    <Image src={Logo} alt="Logo" width={150} height={50} />
                </Link>
                {/* <span>Fudo</span> */}
            </div>

            {/* Menu Side */}
            <div className={classes.menu}>
                <li><Link href="/dashboard">New Order</Link></li>
                <li><Link href="/dashboard">Completed Orders</Link></li>
                <li><Link href="/dashboard/products">View Products</Link></li>
                <li><Link href="/dashboard/addProduct">Add Product</Link></li>
                <li><button className={classes.logoutBtn} onClick={handleLogout}>Logout</button></li>
            </div>

            {/* Right Side */}
            <div className={classes.rightSide}>
                <div className={classes.toggleBtn} onClick={handleMobileMenu}>
                    <UilBars size={32} />
                </div>
            </div>

            {isOpen && <div className={classes.mobileMenu}>
                <ul>
                    <li onClick={() => setIsOpen(false)}><Link href="/dashboard">New Order</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link href="/dashboard">Completed Orders</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link href="/dashboard/products">View Products</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link href="/dashboard/addProduct">Add Product</Link></li>
                    <li><button className={classes.logoutBtn} onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>}
        </div>
    );
}

export default Header;