import React from "react";
import styles from './index.module.css'

export const About: React.FC = () => {
    return <>
        <div>
            <h1 className={styles.my_name}>Edward Taylor</h1>
            <h2>Creative Technologist</h2>
            <h2>Bachelor of Design Innovation</h2>
            <h2>New Zealand</h2>
        </div>
        <p>
            I am a creative individual who uses technology for beauty, experiences and solutions.
        </p>
    </>
};
