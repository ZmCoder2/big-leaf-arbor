// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Loader from 'react-loaders';
// import { Outlet } from 'react-router-dom';
// import NavbarComp from '../NavbarComp'
import React from 'react';
import './index.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cardData1 = [
  {
    title: 'Tree Care',
    text: 'Tree Care content will go here!',
    button: 'Tree Care',
  },
  {
    title: 'Special Services',
    text: 'Special Services content will go here.',
    button: 'Special Services',
  },
  {
    title: 'Emergency Work',
    text: 'Emergency Work content will go here.',
    button: 'Emergency Work',
  },
  {
    title: 'Consulting',
    text: 'Maybe consulting content will go here',
    button: 'Consulting',
  },
];

const whoWeserviceData = [
  {
    title: 'Residential',
    text: 'Residential client content will go here.',
    button: 'Residential Clients',
  },
  {
    title: 'Commercial',
    text: 'Residential client content will go here.',
    button: 'Commercial Properties',
  },
]

const Home = () => {
  return (
    <div className="home-page">
      <h2 className="homepage-services">Bigleaf's Tree Services</h2>
      <Row xs={1} md={2} className="g-4">
        {cardData1.map((data, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              {/* Find images for each card */}
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.text}</Card.Text>
                <Button>{data.button}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="homepage-who-we-service">Who We service</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
  {whoWeserviceData.map((data, idx) => (
    <Col key={idx}>
      <Card className="bg-dark text-white" style={{ width: '18rem' }}>
        <Card.Img src={data.imageUrl} alt={`Card image ${idx + 1}`} />
        <Card.ImgOverlay>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.text}</Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
        ))}
      </Row>
      <h2 className='homepage-reviews'>Client Reviews</h2>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Home;


