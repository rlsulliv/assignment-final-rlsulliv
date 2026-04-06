import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import BirthChart from './components/BirthChart'

function App() {
 
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BirthChart" element={<BirthChart />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
