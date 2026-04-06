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

function MoonPhases() {
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
        <section className="phases-section container my-5">
            <div className="text-center mb-4">
                <h1 className="display-5 fw-bold" style={{ fontFamily: 'Cinzel, serif' }}>Moon Phases</h1>
                <p className="hero-desc">Track the lunar cycle and plan with the cosmos</p>
            </div>
          <div className="row justify-content-center mb-5">
            <div  className="col-md-6">
              <input
                type="text"
                placeholder="🔍 Search moon phases..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-bar form-control rounded-pill shadow-sm border-gold text-primary"
              />
            </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {filteredPhases.map((phase) => (
                  <div key={phase.name} className="col">
                    <div className="card h-100 border-gold shadow-sm text-center bg-primary">
                      <div className="card-body">
                        <div className="display-4 mb-3">{phase.emoji}</div>
                        <h3 className="card-title h5 mb-3">{phase.name}</h3>
                        
                        <div className="card-text small">
                          <p className="mb-1">
                            <strong>Next:</strong> {phase.next.includes('Calculated') ? phase.next : phase.next.split(' ').slice(0, 4).join(' ')}
                          </p>
                          {phase.last !== 'Calculated' && (
                            <p className="mb-1 opacity-75">
                              <strong>Last:</strong> {phase.last.split(' ').slice(0, 4).join(' ')}
                            </p>
                          )}
                          <p className="mt-3 btn btn-gold btn-sm rounded-pill px-3 cursor-default">
                            {phase.days_ahead === '~' ? 'Approximate date' : `In ${phase.days_ahead} days`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPhases.length === 0 && (
                <div className="text-center mt-5">
                  <p className="fw-bold">No phases found for "{search}"</p>
                </div>
              )}
            </section>
    )
}

export default MoonPhases 