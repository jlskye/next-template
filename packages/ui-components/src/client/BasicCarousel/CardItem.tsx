import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

interface BasicCardProps {
    title: string;
    buttonAction: string;
}

export const CardItem = ({title, buttonAction, content}: BasicCardProps) => (
    <Card sx={{maxWidth: "460px", width: "460px"}} className="card-colum">
        <Card sx={{padding: "30px", backgroundColor: "rgba(1, 30, 65, .92)"}}>
            <CardContent className="card-content">
                <Typography variant="h4" fontWeight="600" color="#fff" noWrap={false}>
                    {title}
                </Typography>
                <Typography variant="body1" component="div" color="#dfe7ea" sx={{marginTop: "10px"}}>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" sx={{color: "#000", backgroundColor: "#fff"}}
                        fullWidth>{buttonAction}</Button>
            </CardActions>
        </Card>
    </Card>
)