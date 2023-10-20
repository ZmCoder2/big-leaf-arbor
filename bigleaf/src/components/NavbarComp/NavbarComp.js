import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import { Form, FormControl, Button } from 'react-bootstrap';
import './index.scss';

function NavbarComp() {
  return (
    <div className="nav-bar">

      <Navbar expand="md" className="bg-body-tertiary">
        {/* navbar to be dark is  bg="dark" get rid of classname if you want dark */}
        <Container>
          <Link to="/" className="navbar-brand">Bigleaf Arbor</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={<Link to="/treecare">Tree Care</Link>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/treeremoval">Tree Removal</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/structuralpruning">Structural Pruning</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/cranework">Crane Work</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="emergencywork">Emergency Work</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="stumpgrinding">Stump Grinding</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<Link to="/specialservices">Special Services</Link>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/ivyremoval">Ivy Removal</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/shrubpruning">Shrub Pruning</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<Link to="/consulting">Consulting</Link>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/diagnosis">Diagnosis</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="hazardevaluation">Hazard Evaluation</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<Link to="/serviceareas">Service Areas</Link>} id="basic-nav-dropdown">
                <NavDropdown title="Service Area" id="servArea-menu">
                  <NavDropdown.Item>Acworth</NavDropdown.Item>
                  <NavDropdown.Item>Alpharetta</NavDropdown.Item>
                  <NavDropdown.Item>Atlanta</NavDropdown.Item>
                  <NavDropdown.Item>Brookhaven</NavDropdown.Item>
                  <NavDropdown.Item>Canton</NavDropdown.Item>
                  <NavDropdown.Item>Cumming</NavDropdown.Item>
                  <NavDropdown.Item>Dunwoody</NavDropdown.Item>
                  <NavDropdown.Item>Gainesville</NavDropdown.Item>
                  <NavDropdown.Item>Johns Creek</NavDropdown.Item>
                  <NavDropdown.Item >Kennesaw</NavDropdown.Item>
                  <NavDropdown.Item >Marietta</NavDropdown.Item>
                  <NavDropdown.Item >McDonough</NavDropdown.Item>
                  <NavDropdown.Item >Milton</NavDropdown.Item>
                  <NavDropdown.Item >Newnan</NavDropdown.Item>
                  <NavDropdown.Item >Smyrna</NavDropdown.Item>
                  <NavDropdown.Item >Roswell</NavDropdown.Item>
                  <NavDropdown.Item >Woodstock</NavDropdown.Item>
                  {/* need to find out the areas we cover */}
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/residentialclients">Residential Clients</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/commercialproperties">Commercial Properties</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/institutionalclients">Institutional Clients</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<Link to="/whoweare">Who We Are</Link>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/meettheteam">Meet The Team</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/highlights">Highlights</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="clientreviews">Clients Reviews</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<Link to="/contact">Contact</Link>} id="basic-nav-dropdown">
                {/* <NavDropdown title={<Link to="/contact">Contact</Link>} id="basic-nav-dropdown"> */}
                <NavDropdown.Item href="/estimate">Estimate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/joinourteam">Join Our Team</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default NavbarComp;