import Image from "next/image";

import classes from '../styles/hero.module.css';
import Faster from '../assets/faster.png';
import WhatsApp from '../assets/whatsapp.webp';
import HeroPizza from '../assets/hero-pizza-img.png';
import { UilPhone } from '@iconscout/react-unicons';
import TaufersPizza from '../assets/taufers-pizza.png';
import Link from "next/link";

const Hero = () => {

    const phoneNumber = '+393248909003'; // Replace with your desired phone number
    const message = 'Hello, I want to connect with you!'; // Replace with your desired message

    // Encode the phone number and message for the URL
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const encodedMessage = encodeURIComponent(message);

    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`;

    return (
        <div className={classes.container}>
            {/* Left Side */}
            <div className={classes.left}>
                <div className={classes.fasterDiv}>
                    <span>More than Faster</span>
                    <Image src={Faster} alt="Cherry Image" width={25} height={25} />
                </div>
                <div className={classes.heroText}>
                    <span>Be The Fastest In</span>
                    <span>Delivering Your <span style={{ color: "var(--themeOrange)" }}>Pizza</span></span>
                </div>
                <span className={classes.miniText}>
                    Our Mission is to filling your tummy with delicious food and with free fome delivery.
                </span>
                <button className={`btn ${classes.btn}`}>Get Started</button>
            </div>
            {/* Right Side */}
            <div className={classes.right}>
                <div className={classes.imageContainer}>
                    <Image src={HeroPizza} alt="Hero Pizza" layout="intrinsic" />
                </div>
                <Link href={whatsappLink}>
                    <div className={classes.contactUs}>
                        <Image src={WhatsApp} alt="WhatsApp" width={40} height={40} />
                    </div>
                </Link>
                {/* <div className={classes.pizza}>
                    <div>
                        <Image src={TaufersPizza} alt="" objectFit="cover" layout="intrinsic" />
                    </div>
                    <div className={classes.details}>
                        <span>TAUFERS PIZZA</span>
                        <span><span style={{ color: 'var(--themeRed)' }}>€</span> 9.50</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Hero;