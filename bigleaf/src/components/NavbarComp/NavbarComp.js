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
              <NavDropdown.Item>
                  <Link to="/treeremoval">Tree Removal</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/structuralpruning">Structural Pruning</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/cranework">Crane Work</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/emergencywork">Emergency Work</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/stumpgrinding">Stump Grinding</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Special Services" id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <Link to="/ivyremoval">Ivy Removal</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/shrubpruning">Shrub Pruning</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<Link to="/consulting">Consulting</Link>} id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <Link to="/diagnosis">Diagnosis</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/hazardevaluation">Hazard Evaluation</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Service Areas" id="basic-nav-dropdown">
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
                <NavDropdown.Item>
                  <Link to="/residentialclients">Residential Clients</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/commercialproperties">Commercial Properties</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Who We Are" id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <Link to="/meettheteam">Meet The Team</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/highlights">Highlights</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/clientsreviews">Clients Reviews</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item>
                  <Link to="/estimate">Estimate</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/contactus">Contact Us</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/joinourteam">Join Our Team</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default NavbarComp;