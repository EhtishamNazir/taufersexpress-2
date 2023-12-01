import Image from 'next/image';
import Link from 'next/link';

import classes from '../styles/menu.module.css';
import Pizza from '../assets/pizza.png';
import Sandwitch from '../assets/sandwitch.png';
import Burger from '../assets/burger.png';
import Wrap from '../assets/wrap.png';
import Doner from '../assets/doner.png';
import Fries from '../assets/fries.png';
import Drinks from '../assets/drinks.png';
import Calzone from '../assets/calzone.png';
import Salad from '../assets/salad.png';

export default function Menu(props) {
    const pizzas = props.pizzas;
    return (
        <div className={classes.container}>
            <div className={classes.heading}>
                <span>OUR MENU</span>
                <span>Menu That Always</span>
                <span>Make you Fall in Love</span>
            </div>
            <div className={classes.menuItems}>
                <Link href="/menu">
                    <div className={classes.menuItem}>
                        <div className={classes.icon}>
                            <Image src={Pizza} alt='Pizzza' width={150} height={150} />
                        </div>
                        <span>Pizza</span>
                    </div>
                </Link>
                <Link href="/menu">
                    <div className={classes.menuItem}>
                        <div className={classes.icon}>
                            <Image src={Burger} alt='Burger' width={150} height={150} />
                        </div>
                        <span>Burgers</span>
                    </div>
                </Link>
                <Link href="/menu">
                    <div className={classes.menuItem}>
                        <div className={classes.icon}>
                            <Image src={Sandwitch} alt='Sandwitch' width={150} height={150} />
                        </div>
                        <span>Sandwitches</span>
                    </div>
                </Link>
                <Link href="/menu">
                    <div className={classes.menuItem}>
                        <div className={classes.icon}>
                            <Image src={Wrap} alt='Wrap' width={150} height={150} />
                        </div>
                        <span>Oriental Food</span>
                    </div>
                </Link>
                <Link href="/menu">
                    <div className={classes.menuItem}>
                        <div className={classes.icon}>
                            <Image src={Doner} alt='Doner' width={150} height={150} />
                        </div>
                        <span>Doner</span>
                    </div>
                </Link>
                <Link href="/menu">
                    <div className={classes.menuItem}>
                        <div className={classes.icon}>
                            <Image src={Fries} alt='Fries' width={150} height={150} />
                        </div>
                        <span>Finger Food</span>
                    </div>
                </Link>
                <Link href="/menu">
                    <div className={classes.menuItem}>
                        <div className={classes.icon}>
                            <Image src={Calzone} alt='Calzone' width={150} height={150} />
                        </div>
                        <span>Calzone</span>
                    </div>
                </Link>
                <Link href="/menu">
                    <div className={classes.menuItem}>
                        <div className={classes.icon}>
                            <Image src={Drinks} alt='Drinks' width={150} height={150} />
                        </div>
                        <span>Drinks</span>
                    </div>
                </Link>
                <Link href="/menu">
                    <div className={classes.menuItem}>
                        <div className={classes.icon}>
                            <Image src={Salad} alt='Salad' width={150} height={150} />
                        </div>
                        <span>Salads</span>
                    </div>
                </Link>
            </div>
            {/* Pizzas */}
            {/* <div className={classes.menu}>
                {
                    pizzas.slice(0, 6).map((pizza, id) => {
                        const src = urlFor(pizza.image).url();
                        return (
                            <div className={classes.pizza} key={id}>
                                <Link href={`./pizza/${pizza.slug.current}`}>
                                    <div className={classes.imageWrapper}>
                                        <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                    </div>
                                </Link>
                                <span>{pizza.name}</span>
                                <span><span style={{ color: 'var(--themeRed)' }}>€ </span>{pizza.price[1]}</span>
                            </div>
                        )
                    })
                }
            </div> */}
        </div>
    );
}
