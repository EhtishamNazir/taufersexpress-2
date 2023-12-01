import Image from 'next/image';
import Link from 'next/link';

import classes from '../styles/footer.module.css';
import { UilFacebook, UilWhatsapp, UilInstagram } from '@iconscout/react-unicons';
import Logo from '../assets/Logo-Dark.png';

const Footer = () => {
    const phoneNumber = '+393248909003'; // Replace with your desired phone number
    const message = 'Hello, I want to connect with you!'; // Replace with your desired message

    // Encode the phone number and message for the URL
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const encodedMessage = encodeURIComponent(message);

    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`;

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <Link href="/">
                    <Image src={Logo} alt="Logo" width={150} height={50} />
                </Link>
            </div>
            <div className={classes.social}>
                <Link href="https://www.facebook.com/TaufersExpress">
                    <UilFacebook size={30} />
                </Link>
                <Link href={whatsappLink}>
                    <UilWhatsapp size={30} />
                </Link>
                <Link href="https://www.instagram.com/taufersexpresspizza/">
                    <UilInstagram size={30} />
                </Link>
            </div>
            <span className={classes.copyright}>Copyright © 2023. All Rights Reserved.</span>
        </div>
    );
}

export default Footer;