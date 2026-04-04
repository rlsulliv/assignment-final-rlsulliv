import logo from '/src/white-logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { getMoonPhase } from './PullAPI';
import { useState, useEffect } from 'react';

const Header = () => {
  const [moonPhase, setMoonPhase] = useState(null)

  useEffect(() => {
  getMoonPhase()
    .then((response) => {
      console.log(response)
      setMoonPhase(response)
    })
    .catch((error) => {
      console.log('API limit reached:', error)
      setMoonPhase({ phase_name: 'Waxing Gibbous' })  
    })
}, [])

  return (
    <header className="site-header">
      <div className="holder">
        <div className="logo">
          <img src={logo} alt="logo" style={{ width: '80px' }} />
          <span className="site-name">Luna</span>
        </div>

        <div className="moonPhaseHeader">
            <div>
              {moonPhase 
                ? moonPhase.moon_phase_overview.moon.emoji + ' ' + moonPhase.moon_phase_overview.moon.phase_name 
                : 'Loading...'}
            </div>
            <div>🕐 {new Date().toLocaleDateString()}</div>
        </div>
      </div>
     <Navbar expand="lg" className="gold-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
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