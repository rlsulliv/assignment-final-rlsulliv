import { Container, Row, Col } from 'react-bootstrap'
import hero from '/src/small-hero.svg';

function Home() {
    return (
    <div>
        <section className="hero">
            <img src={hero} alt="hero" className="hero-image"/>
            <div className="hero-content">
                <p className="hero-tagline">✦ your personal cosmic guide ✦</p>
                <h1 className="hero-title">Discover What The <span>Stars Say About You</span></h1>
                <p className="hero-desc">Enter your birth details and uncover your natal chart, planetary positions, and the mysteries written in the sky at the moment you were born.</p>
            </div>
        </section>
    </div>
    )
}

export default Home