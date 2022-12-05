import Link from 'next/link';
import React from 'react';
import Carousel, {CarouselProps} from '../Carousel/Carousel';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import styles from './GroundSection.module.css'

interface GroundSectionProps extends CarouselProps {}

const GroundSection: React.FC<GroundSectionProps> = ({items}) => {
    const white = '#f9f8f9'
    return (
        <section className={styles.container}>
            <Title style={{color: white}} name='Recommended Place' type='main' />
            <Carousel items={items} />
            <footer className={styles.footer} >
                <Logo style={{color: white}} />
                <Link href="/contact">CONTACT US</Link>
            </footer>
        </section>
    );
};

export default GroundSection;