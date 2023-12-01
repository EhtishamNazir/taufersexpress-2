import Image from 'next/image';

import Layout from '../components/Layout';
import classes from '../styles/about.module.css';
import Ingreddients from '../assets/ingredients.webp';
import Chef from '../assets/chef.webp';
import Atmosphere from '../assets/atmosphere.webp';

export default function About() {
    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.about}>
                    <div className={classes.heading}>
                        <span>We are the</span>
                        <span>Taufers Express </span>
                        <span>Grill & Pizza</span>
                    </div>
                    <div className={classes.story}>
                        <p>We have started a new branch here in Sand in Taufers (Campo Tures). The very delightful views valley and this valley deserves to be most popular with food too. So by taking this aim we are here to provide you best food and taste on your call</p>
                    </div>
                </div>
                <div className={classes.philosophy}>
                    <div className={classes.heading}>
                        <span>— PHILOSOPHY BEHIND THE WHITE APRON —</span>
                        <span>We cook for you and your tastebuds</span>
                    </div>
                    <div className={classes.team}>
                        <div className={classes.teamItem}>
                            <Image src={Ingreddients} alt='Ingredients' />
                            <span>FRESH INGREDIENTS</span>
                            <p>We provide the food which made by the fresh ingredients and things. So to give its our first priority with fresh ingredients</p>
                        </div>
                        <div className={classes.teamItem} alt='Chef'>
                            <Image src={Chef} alt='Chef' />
                            <span>SEASONED CHEF</span>
                            <p>The food are made by the Chefs who earned a big name in South Tyrol with an experience of 10 years</p>
                        </div>
                        <div className={classes.teamItem}>
                            <Image src={Atmosphere} alt='Atmosphere' />
                            <span>COZY ATMOSPHERE</span>
                            <p>Sand in Taufers is very famous by its stunning natural views so you'll feel very friendly and best</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
