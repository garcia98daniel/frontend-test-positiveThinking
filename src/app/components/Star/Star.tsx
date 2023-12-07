import React, { Dispatch, SetStateAction } from 'react';
import { IFormData } from '@/ts-types/custom.types';

import styles from './styles.module.css';
import Image from 'next/image';

interface IStarProps{
    setFormData: Dispatch<SetStateAction<IFormData>>;
    rate:number;
    active?:boolean;
    key_name:string;
}
function Star({setFormData, rate, active, key_name}:IStarProps) {
    return (
        <div 
        onClick={() => setFormData((prev) => ({ ...prev, [key_name]: rate }))}
        className={active ? styles.star_active : styles.star}>
            {active ? 
            <Image src="/starActive.svg" alt="star" height={28} width={28} /> 
            : <Image src="/star.svg" alt="star" height={28} width={28} />
            }
            
            <small>{rate}</small>
        </div>
    );
}

export default Star;