import { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

import Layout from '../components/Layout';
import classes from '../styles/contact.module.css';
import LocationPin from '../assets/location-pin.png';
import Clock from '../assets/clock.png';
import Phone from '../assets/phone.png';
import Global from '../assets/global.png';
import Comments from '../assets/comments.png';
import Link from 'next/link';


export default function Contact() {
    return (
        <Layout>
            <div className={classes.container}>
                <span className={classes.heading}>— CONTACT US —</span>
                <span className={classes.heading}>We are looking forward to your visit</span>
                <div className={classes.mapDetails}>
                    <div className={classes.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.0897410626344!2d11.948964575114184!3d46.92061753509758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4777f340127b06ef%3A0xce1b7017d3500b1e!2sTaufers%20Express%20Pizza%20%26%20Grill!5e0!3m2!1sen!2s!4v1688996386066!5m2!1sen!2s" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={classes.contactDetails}>
                        <div className={classes.detailsItem}>
                            <div className={classes.icon}>
                                <Image src={LocationPin} width={30} height={30} alt='Location Pin' />
                            </div>
                            <div className={classes.details}>
                                <span>Taufers Express</span>
                                <span>Vicolo Bayer, 14, 39032 Campo Tures BZ, Italy</span>
                            </div>
                        </div>
                        <div className={classes.detailsItem}>
                            <div className={classes.icon}>
                                <Image src={Clock} width={30} height={30} alt='Clock' />
                            </div>
                            <div className={classes.details}>
                                <span>Hours of Operation</span>
                                <span>Tuesday  - Sunday: 11:30am to 10:00pm</span>
                            </div>
                        </div>
                        <div className={classes.detailsItem}>
                            <div className={classes.icon}>
                                <Image src={Phone} width={30} height={30} alt='Clock' />
                            </div>
                            <div className={classes.details}>
                                <span><Link href='tel:0474 770646'>0474 770646</Link></span>
                            </div>
                        </div>
                        <div className={classes.detailsItem}>
                            <div className={classes.icon}>
                                <Image src={Global} width={30} height={30} alt='Global' />
                            </div>
                            <div className={classes.details}>
                                <span><Link href='https://www.facebook.com/TaufersExpress'>https://www.facebook.com/TaufersExpress</Link></span>
                            </div>
                        </div>
                        <div className={classes.detailsItem}>
                            <div className={classes.icon}>
                                <Image src={Comments} width={30} height={30} alt='Comments' />
                            </div>
                            <div className={classes.details}>
                                <span><Link href='tel:+39 324 890 9003'>+39 324 890 9003</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </Layout>
    )
}
