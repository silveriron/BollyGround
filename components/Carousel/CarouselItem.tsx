import React from 'react';
import {Paper} from '@mui/material'
import Image from 'next/image';

export interface CarouselItemProps {
    src: string,
    alt: string,

}

const CarouselItem: React.FC<CarouselItemProps> = ({src, alt}) => {
    return (
        <Paper style={{height: 544}}>
            <Image src={src} alt={alt} fill style={{objectFit: 'cover'}} />
        </Paper>
    );
};

export default CarouselItem;