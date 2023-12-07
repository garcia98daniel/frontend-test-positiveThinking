import React, { Dispatch, SetStateAction } from 'react';
import { IFormData } from '@/ts-types/custom.types';

import styles from "./styles.module.css";

interface IExtraFeedBackProps {
  setFormData: Dispatch<SetStateAction<IFormData>>;
  inputValue:string,

}
function ExtraFeedBack({inputValue, setFormData} : IExtraFeedBackProps) {
  return (
    <div className={styles.extraFeedBack_wrapper}>
      <span></span>
      <div className={styles.extraFeedBack_container}>
        <p className={styles.p_txt}>3 of 3 | Open ended</p>
        <h2>Would you like to add anything?</h2>
        <textarea
          className={styles.improveQuestionItem_textarea}
          id="story"
          name="story"
          rows={4}
          value={inputValue}
          onChange={(e) => setFormData((prev) => ({ ...prev, "extra_feedback": e.target.value }))}
          placeholder="Express yourself freely and safely. This will always remain anonymous."
        ></textarea>
      </div>
    </div>
  );
}

export default ExtraFeedBack;
