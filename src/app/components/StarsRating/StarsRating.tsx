import React, { Dispatch, SetStateAction } from "react";
import { IFormData } from "@/ts-types/custom.types";

import styles from "./styles.module.css";
import Star from "../Star/Star";

interface StarsRatingProps {
  stars: number;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  key_name:string;
}
function StarsRating({ stars, setFormData, key_name }: StarsRatingProps) {
  return (
    <div className={styles.starsRating_container}>
        <div className={styles.rate_stripe} style={{width:`${(54*stars)-45}px`}}></div>
      {Array.from(new Array(10)).map((star, index) => {
        if (stars === index + 1) {
          return (
            <Star
              setFormData={setFormData}
              key_name={key_name}
              status={"active"}
              key={index}
              rate={index + 1}
            />
          );
        } else if(stars < index + 1){
          return (
            <Star 
            setFormData={setFormData} 
            key_name={key_name}
            status={"notActive"}
            key={index} 
            rate={index + 1} 
            />
          );
        }else if(stars > index + 1){
          return (
            <Star 
            setFormData={setFormData} 
            key_name={key_name}
            status={"surpassed"}
            key={index} 
            rate={index + 1} 
            />
          );
        }

      })}
    </div>
  );
}

export default StarsRating;
