import React from "react";
import {CarouselCard} from "src/client/BasicCarousel/CarouselCard";
import {Carousel} from '@mantine/carousel';

export interface BasicCarouselProps {
    id: number;
    imageUrl: string;
    cardTitle: string;
    cardContent?: string;
}

export function BasicCarousel({productList}: {productList: BasicCarouselProps[]}) {
    return (
        <Carousel
            breakpoints={[{maxWidth: 'sm', slideSize: '100%'}]}
            align="start"
            withIndicators
            loop={true}
            sx={{width: '100%'}}
            className="slick-list"
        >
            {
                productList.map((item) => (
                    <Carousel.Slide key={item.id}>
                        <CarouselCard {...item} />
                    </Carousel.Slide>
                ))
            }
        </Carousel>

    );
}