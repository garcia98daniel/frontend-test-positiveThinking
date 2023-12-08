import React, { Dispatch, SetStateAction } from 'react';

import styles from './styles.module.css';
import StarsRating from '../StarsRating/StarsRating';
import { IFormData } from '@/ts-types/custom.types';

interface IRatingSliderProps{
    value: number;
    setFormData: Dispatch<SetStateAction<IFormData>>;
    key_name:string;
    commentValue:string;
}

function RatingSlider({value, setFormData, key_name, commentValue}:IRatingSliderProps) {
    return (
        <div className={styles.ratingSlider_wrapper}>
            <span ></span>
            <div  className={styles.ratingSlider_container}>
                <p className={styles.p_txt}>1 of 3 | Rating slider</p>
                <h2>I am satisfied with my roles and responsibilities.</h2>
                <StarsRating stars={value} setFormData={setFormData} key_name={key_name}/>
                <div className={styles.rate_lvl}>
                    <p>Strongly disagree</p>
                    <p>Neutral</p>
                    <p>Strongly agree</p>
                </div>
                {value < 5 && value !== 0 &&
                    <textarea 
                    className={styles.improveQuestionItem_textarea} 
                    id="story" 
                    name="story" 
                    rows={4}
                    placeholder="Add a comment"
                    value={commentValue}
                    onChange={(e) => setFormData((prev) => ({ ...prev, "rate_slider_one_comment": e.target.value }))}
                    >
                    </textarea>   
                }
            </div>
        </div>
    );
}

export default RatingSlider;