import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, FormControl, Button } from 'react-bootstrap';

function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link href="#home">Big Leaf Arbor</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Tree Care" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tree Removal</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Structural Pruning</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Crane Work</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Emergency Work</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Stump Grinding</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Special Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ivy Removal</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Shrub Pruning</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Consulting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Diagnosis</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Hazard Evaluation</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Service Areas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown title="Service Area" id="servArea-menu">
              <NavDropdown.Item href="#action/3.1.2">Acworth</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1.3">Alpharetta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1.1">Atlanta</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.2">Brookhaven</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Canton</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.4">Cumming</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.5">Dunwoody</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Gainesville</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Johns Creek</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Kennesaw</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Marietta</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">McDonough</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Milton</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Newnan</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Smyrna</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Roswell</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.3">Woodstock</NavDropdown.Item>
            {/* need to find out the areas we cover */}
                </NavDropdown> 
              {/* need another drop down for service area */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Residential Clients</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Commercial Properties</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Institutional Clients</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Special Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ivy Removal</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Shrub Pruning</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Who We Are" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Meet The Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Highlights</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Clients Reviews</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Estimate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Join Our Team</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;