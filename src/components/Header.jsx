import logo from '/src/white-logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Header = () => {
  return (
    <header className="site-header">
      <div className="holder">
        <div className="logo">
          <img src={logo} alt="logo" style={{ width: '80px' }} />
          <span className="site-name">Luna</span>
        </div>

        <div className="moonPhaseHeader">
          <ul>
            <li><span>🌙</span></li>
            <li><span>dateplaceholder</span></li>
          </ul>
        </div>
      </div>
     <Navbar expand="lg" className="gold-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Link</Nav.Link>
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Link</Nav.Link>
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header;