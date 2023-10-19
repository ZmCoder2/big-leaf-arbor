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

const cardData = [
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

const Home = () => {
  return (
    <div className="home-page">
      <h2 className="homepage-services">Bigleaf's Tree Services</h2>
      <Row xs={1} md={2} className="g-4">
        {cardData.map((data, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.text}</Card.Text>
                <Button>{data.button}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;


