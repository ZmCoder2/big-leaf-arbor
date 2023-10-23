// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Loader from 'react-loaders';
// import { Outlet } from 'react-router-dom';
// import NavbarComp from '../NavbarComp'
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Carousel, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faSeedling, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import CraneIcon from '../../assets/crane-icon.png';

const cardData1 = [
  {
    title: 'Tree Care',
    text: 'Tree Care content will go here!',
    button: 'Tree Care',
    icon: faTree,
  },
  {
    title: 'Special Services',
    text: 'Special Services content will go here.',
    button: 'Special Services',
    icon: faSeedling,
  },
  {
    title: 'Emergency Work',
    text: 'Emergency Work content will go here.',
    button: 'Emergency Work',
    icon: CraneIcon,
    customIconClass: 'custom-icon',
  },
  {
    title: 'Consulting',
    text: 'Maybe consulting content will go here',
    button: 'Consulting',
    icon: faCommentDots,
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

const carouselData = [
  {
    name: 'Example Name 1',
    review: 'Laborum est aute incididunt qui eiusmod ad laborum non mollit excepteur sit adipisicing. Ipsum in culpa aliqua non aliquip nostrud deserunt magna. Excepteur culpa in ad ex ad officia voluptate. Laborum reprehenderit deserunt anim veniam in eiusmod sit in eiusmod. Consequat tempor quis officia exercitation eiusmod est veniam et dolore non occaecat quis eiusmod. Lorem commodo non dolor excepteur qui velit ipsum et. Esse deserunt tempor minim id elit minim minim culpa.',
  },
  {
    name: 'Example Name 2',
    review: 'Proident duis culpa eiusmod duis aliquip irure reprehenderit laborum voluptate qui minim. Proident pariatur labore dolore aliquip aliquip id magna ea nulla consequat. Proident qui irure fugiat ex eu enim in dolor eiusmod nulla incididunt quis proident.'
  }
]

const Home = () => {
  return (
    <div className="home-page">
      <h2 className="homepage-services">Bigleaf's Tree Services</h2>
      <Row xs={1} md={2} className="g-4">
        {cardData1.map((data, idx) => (
          <Col key={idx}>
            <Card>
              {data.icon === CraneIcon && (
                <img
                  src={data.icon}
                  alt="Emergency Work Icon"
                  className={data.customIconClass ? data.customIconClass : ''}
                />
              )}
              {data.icon !== CraneIcon && (
                <FontAwesomeIcon variant="top" icon={data.icon} size="3x" />
              )}
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.text}</Card.Text>
                <Link to={`/${data.button.toLowerCase().replace(' ', '')}`}>
                  <Button>{data.button}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="homepage-who-we-service">Who We Service</h2>
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
      <Carousel>
        {carouselData.map((card, index) => (
          <Carousel.Item key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.review}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;