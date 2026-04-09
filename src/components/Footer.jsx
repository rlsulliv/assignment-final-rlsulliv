import { Container, Row, Col, Stack, Image, Nav, NavLink  } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ borderTop: '4px solid #C9A84C', color: 'white'}}>
            <div style={{ background: '#0D1B2A'}}>
            <Container fluid >
                <Row className='text-white p-4'>
                    <Col className='mx-5 text-white'>
                        <Stack>
                            <Image
                                src='/src/assets/white-logo.svg'
                                alt='logo'
                                rounded
                                width={150}
                                height={150}
                            />
                            <p>✦ follow the lunar cycle ✦</p>
                            <h2 style={{ fontFamily: 'Cinzel, serif' }}>LUNA</h2>
                        </Stack>    
                    </Col>
                    <Col> 
                        <Nav className="flex-column fs-5">
                            <Nav.Link as={Link} to="/" className='text-white'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/MoonPhases" className='text-white'>Moon Phases</Nav.Link>
                            <Nav.Link as={Link} to="/BirthChart" className='text-white'> Create Birth Chart</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Contact us!</h4>
                        <p>lunamoonphases@fake.com</p>
                        <p>Phone: (555)555-5555</p>
                    </Col>
                </Row>
            </Container>
            </div>
        </footer>
    )
}
export default Footer
