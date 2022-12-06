import React, { useState } from 'react';

import styles from './AboutPage.module.css'
import AboutMain from '../AboutMain/AboutMain';
import AboutPhoto from '../AboutPhoto/AboutPhoto';
import ToggleAbout from '../ToggleAbout/ToggleAbout';
import { photoData } from '../../data/intro';

const AboutPage = () => {
    const [isBolly, setIsBolly] = useState(true)
    const changeState = (type: string) => {
        if (type === 'bolly') {
            setIsBolly(true);
        } else {
            setIsBolly(false)
        }
    }
    return (
        <main>
            <div className={styles.mainContainer}>
            <AboutMain category={isBolly ? 'bolly' : 'ttochi'} />
            </div>
            <div className={styles.photoContainer}>
            <AboutPhoto photos={isBolly ? photoData.bolly : photoData.ttochi} />
            </div>
            <div className={styles.toggleContainer}>
            <ToggleAbout isBolly={isBolly} changeState={changeState} />

            </div>

        </main>
    );
};

export default AboutPage;