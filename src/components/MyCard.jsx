import React from 'react';
import { Card } from 'react-bootstrap';
import Boton from './Boton';
import Tags from "./Tags";

const MyCard = ({ image, title, description, colorButton, textButton }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text> {/* Mostramos la descripción */}
                <Boton colorButton={colorButton} textButton={textButton} />
            </Card.Body>
        </Card>
    );
};

export default MyCard;
