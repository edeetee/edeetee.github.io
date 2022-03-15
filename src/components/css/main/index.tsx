import React from "react";
import styles from "./index.module.css";
import { Button } from "@components/css";
import Head from "next/head";

export const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <h1>Edward Taylor</h1>
            <h2>Technology Designer / Developer</h2>
            <h2>Bachelor of Design Innovation</h2>
            <h2>New Zealand</h2>
        </div>
    );
};
