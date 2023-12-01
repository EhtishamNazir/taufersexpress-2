import { Fragment, use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useStore } from "../store/store";
import classes from '../styles/header.module.css';
import Logo from '../assets/Logo-Dark.png';
import GoogleTranslate from './GoogleTranslate';
import { UilShoppingBag, UilReceipt, UilBars } from '@iconscout/react-unicons';
import Globe from '../assets/globe.png';


const Header = () => {
    const [order, setOrder] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [showLang, setShowLang] = useState(false);

    useEffect(() => {
        setOrder(localStorage.getItem("order"));
    }, []);

    // state in terminal
    const state = useStore((state) => state);
    const cartItemsLength = useStore((state) => state.cart.pizzas.length);

    const handleMobileMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Fragment>
            {showLang && <GoogleTranslate />}
            <div className={classes.header}>
                {/* Logo Side */}
                <div className={classes.logo}>
                    <Link href='/'>
                        <Image src={Logo} alt="Logo" width={150} height={50} />
                    </Link>
                    {/* <span>Fudo</span> */}
                </div>

                {/* Menu Side */}
                <div className={classes.menu}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </div>

                {/* Right Side */}
                <div className={classes.rightSide}>
                    <Link href='/cart'>
                        <div className={classes.cart}>
                            <UilShoppingBag size={32} color='#121618' />
                            <div className={classes.badge}>{cartItemsLength}</div>
                        </div>
                    </Link>
                    {
                        order && (
                            <Link href={`/order/${order}`}>
                                <div className={classes.cart}>
                                    <UilReceipt size={32} color='#121618' />
                                    {order != "" &&
                                        <div className={classes.badge}>1</div>
                                    }
                                </div>
                            </Link>
                        )
                    }
                    <div className={classes.toggleBtn} onClick={handleMobileMenu}>
                        <UilBars size={32} />
                    </div>
                    <button className={classes.langChangerBtn} onClick={() => setShowLang(!showLang)}><Image src={Globe} width={32} height={32} alt="Language Selector" /></button>
                </div>

                {isOpen && <div className={classes.mobileMenu}>
                    <ul>
                        <li onClick={() => setIsOpen(false)}><Link href="/">Home</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/menu">Menu</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/about">About Us</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/contact">Contact</Link></li>
                        <li><button className={classes.langChangerBtn} onClick={() => {
                            setShowLang(!showLang);
                            setIsOpen(false)
                        }}><Image src={Globe} width={32} height={32} alt="Language Selector" /></button></li>
                    </ul>
                </div>}
            </div>
        </Fragment>
    );
}

export default Header;