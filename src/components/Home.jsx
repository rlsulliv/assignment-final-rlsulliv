import hero from '/src/assets/small-hero.webp';
import heroTwo from '/src/assets/horizon-hero.webp';
import { Link } from 'react-router-dom';

function Home() {
    const planets = [
        {day: 'Sunday', name: 'Sun', symbol: '☀︎', themes: ['Vitality', 'Self-expression', 'Power', 'Ego'], message: 'Do something to make your presence known, like getting glamour shots, giving your website a makeover, or debuting those gold disco pants at brunch. The Sun rules over all forms of radiance, after all, so shine without censoring yourself.'},
        {day: 'Monday', name:'Moon', symbol:'☾', themes: ['Feeling', 'Moods', 'Sensitive', 'Imagination'], energy: 'Soothe your system with contemplative activities like meditating, gentle stretching, communing with nature in your local park, or taking an Epsom salt bath. A beautiful way to honor the Moon, which is connected to all the ways we nourish ourselves.'},
        {day: 'Tuesday', name:'Mars', symbol:'♂', themes: ['Will', 'Energy', 'Motivation', 'Conflict'], energy: 'Do the thing. Mars is the planet of courage and willpower, so take advantage of the extra oomph by confronting the trickier tasks that you have been putting off. As the planet of assertion and sharp edges, Mars excels at saying no. Flex your boundaries today, and your future peace of mind will thank you.'},
        {day: 'Wednesday', name:'Mercury', symbol:'☿️', themes: ['Communication', 'Mind', 'Speaking', 'Messenger'], energy: 'Mercury is the planet of yapping, and Wednesday is your day for all kinds of communication. So finish your homework, send those DMs, light up the group text, and livestream your brilliant thoughts. Since Mercury is also the planet of shapeshifting, our flexibility is augmented on this day. So pivot your plans, say yes to that impromptu invite, and leave wiggle room for intriguing diversions.'},
        {day: 'Thursay', name:'Jupiter', symbol:'♃,', themes: ['Expansion', 'Belief', 'Grace', 'Optimism'], energy: 'Ruled by the planet of growth and optimism, Thursday is the time to go big or go home. So round up your crew for happy-hour mocktails and pump each others tires.Mind-mapping, dream-boarding, and long-range brainstorming are especially fruitful on this day, since Jupiter loves to think expansively.'},
        {day: 'Friday', name:'Venus', symbol:'♀', themes: ['Harmony', 'Values', 'Connection', 'Relationships'], energy: 'Venus is the planet of art and love, and Friday heightens our sense of beauty. Indulge it. Whether you linger over perfume samples or go thrifting with your bestie, seek out lifes pleasures. Arranging a first rendezvous with your dating app crush? Figuring out an ideal time to collaborate on a project? Venus day infuses all acts of co-creation with extra delight and grace.'},
        {day: 'Saturday', name:'Saturn', symbol:'♄', themes: ['Reality', 'Contraction', 'Effort', 'Structure'], energy: 'You better work. Associated with the planet of discipline, Saturday is a productive moment for catching up on chores, folding laundry, sifting through paperwork, and crushing your to-do list. As the planet of structure and limits, Saturn supports our DIY repairs and constructive routines on this day. And if you are craving alone time, save it for Saturday, when a bit of solitude will be especially satisfying.'}
    ]

    const today = new Date()
    const planet = planets[today.getDay()]

    return (
    <div>
        <section className="hero">
            <img src={hero} alt="hero-one" className="hero-image-one"/>
            <img src={heroTwo} alt="hero-two" className="hero-image-two"/>
            <div className="hero-content">
                <h2 className="hero-tagline">✦ follow the lunar cycle ✦</h2>
                <h1 className="hero-title">The Moon Has A <span>Message For You</span></h1>
                <p className="hero-desc">From tonight's phase to your next full moon — <br/>Luna keeps you in sync with the sky above.</p>
            </div>
        </section>
        <section>
            <div className="row justify-content-center p-5">
                <div className="col-md-6">
                    <div className="card border-gold text-center bg-primary p-5">
                        <p>Planet of the Day:</p>
                        <div style = {{ fontSize: '3rem'}}>{planet.symbol}</div>
                        <h2 style = {{ fontFamily: 'Cinzel, serif' }}>{planet.name}</h2>
                        <div>
                            <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                                {planet.themes.map((theme) => (
                                    <span
                                    key={theme}
                                    className="badge rounded-pill border"
                                    style= {{ fontWeight: 400, fontSize: '0.75rem', padding: '0.5rem 0.75rem' }}
                                    >{theme}</span>
                                ))}
                            </div>
                            <p>{planet.energy}</p>
                            <Link to='/BirthChart' className="btn btn-outline-light btn-gold btn-sm rounded-pill px4">
                                See {planet.name} in your chart →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Home