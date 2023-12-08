import React, { Dispatch, SetStateAction } from 'react';
import { IFormData } from '@/ts-types/custom.types';

import styles from './styles.module.css';
import Image from 'next/image';

interface IStarProps{
    setFormData: Dispatch<SetStateAction<IFormData>>;
    rate:number;
    status:"active" | "surpassed" | "notActive";
    key_name:string;
}
function Star({setFormData, rate, status, key_name}:IStarProps) {

    let starImageSrc = "/star.svg";

    if (status === 'active') {
      starImageSrc = "/starActive.svg";
    } else if (status === 'surpassed') {
        starImageSrc = "/starActive.svg";
    }
    
    return (
        <div 
        onClick={() => setFormData((prev) => ({ ...prev, [key_name]: rate }))}
        className={status === 'active' ? styles.star_active : status === 'surpassed' ? styles.star_surpassed : styles.star}>
            <Image src={starImageSrc} alt="star" height={28} width={28} />
            <small>{rate}</small>
        </div>
    );
}

export default Star;