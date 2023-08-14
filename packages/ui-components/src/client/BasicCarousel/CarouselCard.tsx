import React from "react";
import {Paper} from "@mui/material";
import {CardItem} from "src/client/BasicCarousel/CardItem";

interface CardProps {
    id: number;
    imageUrl: string;
    cardTitle: string;
    cardContent?: string;
}
export const CarouselCard = ({imageUrl, cardTitle, cardContent}: CardProps) => (
    <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{backgroundImage: `url(${imageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100%'}}
        className="card">
        <CardItem title={cardTitle} buttonAction="read more"
                  content={cardContent}/>
    </Paper>
)