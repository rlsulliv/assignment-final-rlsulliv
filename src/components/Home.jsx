import hero from '/src/small-hero.webp';
import heroTwo from '/src/horizon-hero.webp';

function Home() {
    return (
    <div>
        <section className="hero">
            <img src={hero} alt="hero-one" className="hero-image-one"/>
            <img src={heroTwo} alt="hero-two" className="hero-image-two"/>
            <div className="hero-content">
                <h2 className="hero-tagline">✦ your personal cosmic guide ✦</h2>
                <h1 className="hero-title">Discover What The <span>Stars Say About You</span></h1>
                <p className="hero-desc">Enter your birth details and uncover your natal chart, planetary positions, and the mysteries written in the sky <br /> at the moment you were born.</p>
            </div>
        </section>
    </div>
    )
}

export default Home