import React from 'react';
import CarouselTag from 'react-material-ui-carousel'
import CarouselItem, {CarouselItemProps} from './CarouselItem';

interface CarouselProps {
    items: Array<CarouselItemProps>
}

const Carousel:React.FC<CarouselProps> =({items}) => {
    return (
        <CarouselTag navButtonsAlwaysVisible={true} navButtonsProps={{style: {
            backgroundColor: 'inherit',
            color: 'darkgray'
        }}}>
           {items.map((item, index) => <CarouselItem key={index} src={item.src} alt={item.alt} />)}
        </CarouselTag>
    )
}

export default Carousel