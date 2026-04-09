import logo from '/src/assets/white-logo.svg';
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
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <div className="d-flex align-items-center gap-3">
          <img src={logo} alt="logo" style={{ width: '80px' }} />
          <span className="site-name">Luna</span>
        </div>

        <div className="moonPhaseHeader text-end pe-2">
            <div className="mt-2 mb-1">
              {moonPhase 
                ? moonPhase.moon_phase_overview.moon.emoji + ' ' + moonPhase.moon_phase_overview.moon.phase_name 
                : 'Loading...'}
            </div>
            <div classname="small">🕐 {new Date().toLocaleDateString()}</div>
        </div>
      </div>
     <Navbar expand="lg" className="gold-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/MoonPhases">Moon Phases</Nav.Link>
            <Nav.Link as={Link} to="/BirthChart"> Create Birth Chart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header;