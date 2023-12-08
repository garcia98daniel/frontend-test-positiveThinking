import React from 'react';

import styles from './styles.module.css';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';
function Thanks() {
    return (
        <div className={styles.thanks_page}>

            <div className={styles.thanks_card}>
                <p>Thank you so much</p>

                    <i className={styles.thanks_img}>
                        <Image src={"/goodDay.gif"} alt="goodday" layout='fill'/>
                    </i>
                <p>We really appreciate your opinion.</p>

            </div>
            
            <Footer/>
        </div>
    );
}

export default Thanks;