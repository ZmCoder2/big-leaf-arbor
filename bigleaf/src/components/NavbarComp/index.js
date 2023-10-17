import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, FormControl, Button } from 'react-bootstrap';
// import '../App.scss';

function NavbarComp() {
  return (
    <div className= "nav-bar">

    <Navbar  expand="lg" className="bg-body-tertiary">
      {/* navbar to be dark is  bg="dark" get rid of classname if you want dark */}
      <Container>
        <Nav.Link href="#home">Bigleaf Arbor</Nav.Link>
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
              <NavDropdown.Item href="#action/3.1.1">Acworth</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1.2">Alpharetta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1.3">Atlanta</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.4">Brookhaven</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.5">Canton</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.6">Cumming</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.7">Dunwoody</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.8">Gainesville</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.9">Johns Creek</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.10">Kennesaw</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.11">Marietta</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.12">McDonough</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.13">Milton</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.14">Newnan</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.15">Smyrna</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.16">Roswell</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1.17">Woodstock</NavDropdown.Item>
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
   
    </div>
  );
}

export default NavbarComp;