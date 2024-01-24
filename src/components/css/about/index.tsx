import React from "react";
import styles from './index.module.css'

export const About: React.FC<{ minimised: boolean }> = ({ minimised }) => {
    return <>
        <div className={styles.my_details}>
            <h1 className={styles.my_name}>Edward Taylor</h1>
            <div style={{ display: minimised ? 'none' : 'initial' }}>
                <h3>Creative Technologist</h3>
                <h3>Bachelor of Design Innovation</h3>
                <h3>New Zealand</h3>
                <p>
                    I am a creative individual who uses technology for experiences and solutions.
                </p>
            </div>

        </div>
    </>
};
