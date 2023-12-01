import { Fragment } from "react";
import Image from "next/image";

import classes from '../styles/services.module.css';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';

export default function Services() {
    return (
        <div className={classes.container}>
            <div className={classes.heading}>
                <span>What We Serve</span>
                <span>Your Favourite Food</span>
                <span>Delivery Partner</span>
            </div>
            {/* Features */}
            <div className={classes.services}>
                <div className={classes.feature}>
                    <div className={classes.ImageWrapper}>
                        <Image src={s1} alt="Service Image" objectFit="cover" layout="intrinsic" />
                    </div>
                    <span>Easy to Order</span>
                    <span>You only need few steps in food ordering</span>
                </div>
                <div className={classes.feature}>
                    <div className={classes.ImageWrapper}>
                        <Image src={s2} alt="Service Image" objectFit="cover" layout="intrinsic" />
                    </div>
                    <span>Easy to Order</span>
                    <span>Delivery that is always on time even faster</span>
                </div>
                <div className={classes.feature}>
                    <div className={classes.ImageWrapper}>
                        <Image src={s3} alt="Service Image" objectFit="cover" layout="intrinsic" />
                    </div>
                    <span>Easy to Order</span>
                    <span>Not only fast for us, quality is also number one</span>
                </div>
            </div>
        </div>
    );
}