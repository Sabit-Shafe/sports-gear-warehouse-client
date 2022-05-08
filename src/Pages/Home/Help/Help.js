
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Help = ({ support }) => {
  const { name, description, image } = support;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4" >
      <Card style={{ width: '20rem' }} className="text-center">
        <Card.Img variant="top" src={image} />
        <Card.Body >
          <Card.Title style={{ color: 'black' }} >{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button style={{ backgroundColor: 'blueviolet' }} className="" variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Help;