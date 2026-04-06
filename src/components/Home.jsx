import hero from '/src/small-hero.webp';
import heroTwo from '/src/horizon-hero.webp';
import { useState, useEffect } from 'react'
import { getMoonPhase } from '/src/components/PullAPI'

const buildPhaseList = (data) => {
  const phases = data.moon_phase_overview.moon.detailed.upcoming_phases

  const midpoint = (date1, date2) => {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const mid = new Date((d1.getTime() + d2.getTime()) / 2)
    return mid.toDateString()
  }

  const newMoonNext = phases.new_moon.next.datestamp
  const firstQuarterNext = phases.first_quarter.next.datestamp
  const fullMoonNext = phases.full_moon.next.datestamp
  const lastQuarterNext = phases.last_quarter.next.datestamp
  return [
      {
        name: 'New Moon',
        emoji: '🌑',
        next: phases.new_moon.next.datestamp,
        last: phases.new_moon.last.datestamp,
        days_ahead: phases.new_moon.next.days_ahead,
      },
      {
        name: 'Waxing Crescent',
        emoji: '🌒',
        next: midpoint(newMoonNext, firstQuarterNext),
        last: 'Calculated',
        days_ahead: '~',
      },
      {
        name: 'First Quarter',
        emoji: '🌓',
        next: phases.first_quarter.next.datestamp,
        last: phases.first_quarter.last.datestamp,
        days_ahead: phases.first_quarter.next.days_ahead,
      },
      {
        name: 'Waxing Gibbous',
        emoji: '🌔',
        next: midpoint(firstQuarterNext, fullMoonNext),
        last: 'Calculated',
        days_ahead: '~',
      },
      {
        name: 'Full Moon',
        emoji: '🌕',
        next: phases.full_moon.next.datestamp,
        last: phases.full_moon.last.datestamp,
        days_ahead: phases.full_moon.next.days_ahead,
      },
      {
        name: 'Waning Gibbous',
        emoji: '🌖',
        next: midpoint(fullMoonNext, lastQuarterNext),
        last: 'Calculated',
        days_ahead: '~',
      },
      {
        name: 'Last Quarter',
        emoji: '🌗',
        next: phases.last_quarter.next.datestamp,
        last: phases.last_quarter.last.datestamp,
        days_ahead: phases.last_quarter.next.days_ahead,
      },
      {
        name: 'Waning Crescent',
        emoji: '🌘',
        next: midpoint(lastQuarterNext, newMoonNext),
        last: 'Calculated',
        days_ahead: '~',
      },
    ]
  }

function Home() {
    const [moonData, setMoonData] = useState(null)
    const [phaseList, setPhaseList] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
    getMoonPhase()
      .then((response) => {
        setMoonData(response)
        setPhaseList(buildPhaseList(response))
      })
      .catch((error) => console.log(error))
    }, [])

    const filteredPhases = phaseList.filter(phase =>
        phase.name.toLowerCase().includes(search.toLowerCase())
    )

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
              <section className="phases-section">
        <input
          type="text"
          placeholder="🔍 Search moon phases..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        <div className="phase-list">
          {filteredPhases.map((phase) => (
        <div key={phase.name} className="phase-card">
          <span className="phase-emoji">{phase.emoji}</span>
          <div className="phase-info">
            <h3>{phase.name}</h3>
            <p>Next: {phase.next.includes('Calculated') ? phase.next : phase.next.split(' ').slice(0, 4).join(' ')}</p>
            {phase.last !== 'Calculated' && (
              <p>Last: {phase.last.split(' ').slice(0, 4).join(' ')}</p>
            )}
            <p className="days-ahead">{phase.days_ahead === '~' ? 'Approximate date' : `In ${phase.days_ahead} days`}</p>
          </div>
        </div>
          ))}

          {filteredPhases.length === 0 && (
            <p className="no-results">No phases found for "{search}"</p>
          )}
        </div>
      </section>
    </div>
    )
}

export default Home