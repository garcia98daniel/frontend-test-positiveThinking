import React, { Dispatch, SetStateAction } from 'react';

import styles from './styles.module.css';
import StarsRating from '../StarsRating/StarsRating';
import ImproveQuestionItem from '../ImproveQuestionItem/ImproveQuestionItem';
import { IFormData, IImproveOptions } from '@/ts-types/custom.types';

interface IRatingSliderWithMultiChoiceProps {
    improveOptions:IImproveOptions[];
    setFormData: Dispatch<SetStateAction<IFormData>>;
    value:number;
    key_name:string;
}

function RatingSliderWithMultiChoice({value, improveOptions, setFormData, key_name}:IRatingSliderWithMultiChoiceProps) {
    return (
        <div className={styles.ratingSliderWithMultiChoice_wrapper}>
            <span ></span>
            <div  className={styles.ratingSliderWithMultiChoice_container}>
                <p className={styles.p_txt}>2 of 3 | Rating slider with multiple choice</p>
                <h2>I feel comfortable working and interacting with the colleagues on my team.</h2>
                <StarsRating stars={value} key_name={key_name} setFormData={setFormData}/>
                <div className={styles.rate_lvl}>
                    <p>Strongly disagree</p>
                    <p>Neutral</p>
                    <p>Strongly agree</p>
                </div>

                <h3 className={styles.ratingSliderWithMultiple_question}>Which of the following should we improve on?</h3>
                <div className={styles.ratingSliderWithMultiple_improveQuestions_section}>
                    {improveOptions.length && improveOptions.map((improveOption, index) => {
                        return <ImproveQuestionItem key={index} description={improveOption.description} comment={"comment"} handleChangeComment={() => {}}/>
                    })

                    }
                </div>
            </div>
        </div>
    );
}

export default RatingSliderWithMultiChoice;