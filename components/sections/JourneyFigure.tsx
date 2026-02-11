import React from 'react';
import styles from './JourneyFigure.module.css';

export const JourneyFigure: React.FC = () => {
    return (
        <div className={styles.figure}>
            <div className={styles.path}>
                <div className={styles.node} style={{left: '10%', top: '30%'}}></div>
                <div className={styles.node} style={{left: '30%', top: '20%'}}></div>
                <div className={styles.node} style={{left: '50%', top: '25%'}}></div>
                <div className={styles.node} style={{left: '70%', top: '35%'}}></div>
                <div className={styles.node} style={{left: '85%', top: '30%'}}></div>
            </div>
            <div className={styles.traveler}></div>
        </div>
    );
};