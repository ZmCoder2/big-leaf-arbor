// import { useState } from 'react'
// import { Link } from 'react-router-dom';
// import Loader from 'react-loaders';
// import { Outlet } from 'react-router-dom';
import React from 'react';
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap'



const Services = () => {
// const ourServicesHeaderContainer = {
//     background: `url('path/to/your/background.jpg')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   };
// This is for the background image behind the Our Services Header

    return (
      <div className="services-page">
        <Container className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
            {/* this is for the background image behind our services header style={{ ...containerStyle, minHeight: '100vh' }} */}
          <h2 className='services-header'>Our Services</h2>
        </Container>
      </div>
    );
  }

export default Services;
