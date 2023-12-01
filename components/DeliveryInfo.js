import Image from 'next/image';

import classes from '../styles/deliveryInfo.module.css';
import OpenImage from '../assets/open-img.png';

const DeliveryInfo = () => {

    return (
        <div className={classes.container}>
            <div className={classes.heading}>
                <span>Delivery Information</span>
            </div>
            <div className={classes.info}>
                <div className={classes.left}>
                    <span>30 - 50 MINUTI TEMPO DI CONSEGNA</span>
                    <span>ZONA DI CONSEGNIA</span>
                    <div className={classes.listItems}>
                        <div className={classes.listItem}>
                            <span>1) SAND IN TAUFERS / CAMPO TURES</span>
                            <span>Lieferung gratis ab 6€</span>
                            <span>Consegna gratuita oltre 6€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>2) MÜHLEN IN TAUFERS / MOLINI DI TURES</span>
                            <span>Lieferung gratis ab 10€</span>
                            <span>Consegna gratuita oltre 10€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>3) KEMATEN / CAMINATA</span>
                            <span>Lieferung gratis ab 10€</span>
                            <span>Consegna gratuita oltre 10€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>4) LUTTACH / LUTAGO</span>
                            <span>Lieferung gratis ab 12€</span>
                            <span>Consegna gratuita oltre 12€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>5) UTTENHEIM / VILLA OTTONE</span>
                            <span>Lieferung gratis ab 28€</span>
                            <span>Consegna gratuita oltre 28€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>6) ST. JOHANN / SAN GIOVANNI</span>
                            <span>Lieferung gratis ab 32€</span>
                            <span>Consegna gratuita oltre 32€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>7) STEINHAUS / CADIPETRA</span>
                            <span>Lieferung gratis ab 45€</span>
                            <span>Consegna gratuita oltre 45€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>8) MÜHLEGG</span>
                            <span>Lieferung gratis ab 40€</span>
                            <span>Consegna gratuita oltre 40€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>9) MÜHLWALD / SELVA DI MOLINI</span>
                            <span>Lieferung gratis ab 38€</span>
                            <span>Consegna gratuita oltre 38€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>10) AHRONACH / ACERTO</span>
                            <span>Lieferung gratis ab 45€</span>
                            <span>Consegna gratuita oltre 45€</span>
                        </div>
                        <div className={classes.listItem}>
                            <span>11) WEISSENBACH / RIO BIANCO</span>
                            <span>Lieferung gratis ab 60€</span>
                            <span>Consegna gratuita oltre 60€</span>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <Image src={OpenImage} alt=''></Image>
                </div>
            </div>
        </div>
    );
}

export default DeliveryInfo;