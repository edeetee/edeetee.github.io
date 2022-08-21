import React from "react";
import styles from './index.module.css'

export const About: React.FC = () => {
    return <>
        <div className={styles.my_details}>
            <h1 className={styles.my_name}>Edward Taylor</h1>
            <h3>Creative Technologist</h3>
            <h3>Bachelor of Design Innovation</h3>
            <h3>New Zealand</h3>
            <p>
                I am a creative individual who uses technology for beauty, experiences and solutions.
            </p>
        </div>
    </>
};
