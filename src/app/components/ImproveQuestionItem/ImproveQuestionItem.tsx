import React from 'react';
import styles from './styles.module.css';
interface IImproveQuestionItemProps {
    description:string,
    comment:string,
    handleChangeComment: () => void,
}

function ImproveQuestionItem({description, comment}:IImproveQuestionItemProps) {
    return (
        <div className={styles.improveQuestionItem}>

            <div className={styles.improveQuestionItem_container}>
                <div className={styles.check_box_conatiner}>
                    <div className={styles.checkbox_wrapper_19}>
                        <input type="checkbox" id="cbtest-19" />
                        <label htmlFor="cbtest-19" className={styles.check_box}/>
                    </div>
                </div>
                <div className={styles.question_container}>
                    <p>{description}</p>
                </div>
            </div>

            <textarea 
            className={styles.improveQuestionItem_textarea} 
            id="story" 
            name="story" 
            rows={4}
            placeholder="Add a comment"
            >
            </textarea>
        </div>
    );
}

export default ImproveQuestionItem;