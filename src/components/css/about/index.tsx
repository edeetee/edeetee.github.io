import React from "react";
import styles from './index.module.css'

export const About: React.FC = () => {
    return <>
        <div>
            <h1 className={styles.my_name}>Edward Taylor</h1>
            <h2>Technology Designer / Developer</h2>
            <h2>Bachelor of Design Innovation</h2>
            <h2>New Zealand</h2>
        </div>
        <p>
            I am a creative individual who uses technology to create beauty, add to experiences and solve problems.
        </p>
    </>
};
