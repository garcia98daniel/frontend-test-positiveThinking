import React, { Dispatch, SetStateAction } from 'react';

import styles from './styles.module.css';
import { IFormData } from '@/ts-types/custom.types';
interface IImproveQuestionItemProps {
    description:string,
    improve_comment:string,
    setFormData: Dispatch<SetStateAction<IFormData>>;
    improve:string,
    index:number,
}

function ImproveQuestionItem({description, improve_comment, improve, setFormData, index}:IImproveQuestionItemProps) {
   
    const handleClick = () =>{
        setFormData((prev) => ({ ...prev, "improve_comment": "" }));
        setFormData((prev) => ({ ...prev, "improve": description }));
    }
    return (
        <div className={styles.improveQuestionItem} 
        onClick={() => handleClick()}>
            <div className={description === improve ? styles.improveQuestionItem_container_active : styles.improveQuestionItem_container}>
                <div className={styles.check_box_conatiner}>
                    <div className={styles.checkbox_wrapper_19}>
                        <input type="checkbox" id={"cbtest-"+index} checked={description === improve}/>
                        <label htmlFor={"cbtest-"+index} className={styles.check_box}/>
                    </div>
                </div>
                <div className={styles.question_container}>
                    <p>{description}</p>
                </div>
            </div>

            {description === improve &&
                <textarea 
                className={styles.improveQuestionItem_textarea} 
                id="improve" 
                name="improve" 
                rows={4}
                value={improve_comment}
                onChange={(e) => setFormData((prev) => ({ ...prev, "improve_comment": e.target.value }))}
                placeholder="Add a comment"
                >
            </textarea>
            }
        </div>
    );
}

export default ImproveQuestionItem;