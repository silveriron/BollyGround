import React from 'react';

import {aboutData} from '../../data/intro'
import Content from '../Content/Content';
import Image from '../Image/Image';
import styles from './AboutMain.module.css'

interface IntroMainProps {
    category: "bolly" | "ttochi"
}

const AboutMain:React.FC<IntroMainProps> = ({category}) => {
    const data = category === "bolly" ? aboutData.bolly : aboutData.ttochi

    if (category === "bolly") {
        return (
            <div className={styles.container}>
            <Image src="/img/bolly.png" alt='bolly' width={560} height={390} />
            <div className={styles.content}>
            <Content type='main' {...data} />

            </div>
        </div>
    );
} else {
    return (
        <div className={styles.container}>
            <div className={`${styles.content} ${styles.ttochi} `}>
            <Content type='main' {...data} />
            </div>
            <Image src="/img/ttochi.png" alt='ttochi' width={560} height={390} />
        </div>

    )
}
};

export default AboutMain;