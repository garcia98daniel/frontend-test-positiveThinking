"use client";
import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';

export default function ScrollBar() {
  const [scrollPercentage, setScrollPercentage] = useState(10);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    const percentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
    if(percentage < 10){
    setScrollPercentage(10);
    }else{
        setScrollPercentage(percentage);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const progressBarStyle = {
    width: `${scrollPercentage}%`,
  };

  return (
    <div className={styles.horizontal_scroll_bar}>
      <div className={styles.progress_bar} style={progressBarStyle}></div>
    </div>
  );
};

