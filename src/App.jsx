import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import logo from './logo.svg'

function App() {
 
  return (
    <header>
      <div className="header">
        <Container>
          <div className="holder">
            <div className="logo">
              <img src={logo} alt="logo" className="img-fluid w-25" />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default App
