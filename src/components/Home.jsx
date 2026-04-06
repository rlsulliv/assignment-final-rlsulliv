import hero from '/src/small-hero.webp';
import heroTwo from '/src/horizon-hero.webp';

function Home() {
    return (
    <div>
        <section className="hero">
            <img src={hero} alt="hero-one" className="hero-image-one"/>
            <img src={heroTwo} alt="hero-two" className="hero-image-two"/>
            <div className="hero-content">
                <h2 className="hero-tagline">✦ follow the lunar cycle ✦</h2>
                <h1 className="hero-title">The Moon Has A <span>Message For You</span></h1>
                <p className="hero-desc">From tonight's phase to your next full moon — Luna keeps you in sync with the sky above.</p>
            </div>
        </section>
    </div>
    )
}

export default Home