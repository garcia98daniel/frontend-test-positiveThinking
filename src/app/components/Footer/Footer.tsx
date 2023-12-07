import React from 'react';

import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    return (
        <div className={styles.footer}>

            <p className={styles.language_container}>Modify my language <Image src={"/world.svg"} alt="World" width={16} height={16}/></p>
            <p>What is this? <Link href=''>Meet Butterfly.ai</Link> </p>
            <p><Link href=''>Terms of Service </Link> | <Link href=''>Privacy Policy</Link></p>
            <p>©2016-2023 Appynest, Inc.</p>
            
        </div>
    );
}

export default Footer;