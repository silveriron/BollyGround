import React from 'react';
import Image from '../Image/Image';

import styles from './AboutPhoto.module.css'

interface Photo {
    title: string,
    src: string,
    width: number,
    height: number,
}

interface AboutPhotoProps {
    photos: Photo[],
}

const AboutPhoto:React.FC<AboutPhotoProps> = ({photos}) => {
    return (
        <div className={styles.container}>
            {photos.map((photo) => <Image key={photo.title} alt={photo.title} src={photo.src} width={photo.width} height={photo.height} />)}
        </div>
    );
};

export default AboutPhoto;