import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IFormData } from "@/ts-types/custom.types";

import styles from "./styles.module.css";
import Star from "../Star/Star";

interface StarsRatingProps {
  stars: number;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  key_name:string;
}
function StarsRating({ stars, setFormData, key_name }: StarsRatingProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [numberStars, setNumberStars] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if(window.innerWidth <= 768){
        setNumberStars(5);
      }else{
        setNumberStars(10);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.starsRating_container}>
      {stars > 0 &&
        <div
        className={styles.rate_stripe}
        style={{ 
          width: `${isMobile ? (54 * stars+1) : (54 * stars) - 45}px`,
          background: `${stars >= 9  ? "#55e3b1" : stars >= 5 ? "#ffd147" : "#F45D6F"}`
        }}
      ></div>
      }
      {Array.from(new Array(numberStars)).map((star, index) => {
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
