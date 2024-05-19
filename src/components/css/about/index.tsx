import React from "react";
import styles from './index.module.css'
import { Expandable } from "@src/lib/expandable";

export const About: React.FC<{ minimised: boolean }> = ({ minimised }) => {
    return <>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap-reverse', alignItems: 'start', marginTop: 64, userSelect: 'none' }}>
            <div className={styles.responsiveStickyMenu}>
                <div className={styles.my_details}>
                    <h1 className={styles.my_name}>Edward Taylor</h1>
                </div>
            </div>
        </div>
    </>
};
