import axios from 'axios';

export const getMoonPhase = async () => {
const cached = localStorage.getItem('moonPhase')
const cachedDate = localStorage.getItem('moonPhaseDate')
const today = new Date().toDateString()

if (cached && cachedDate === today) {
    return JSON.parse(cached)
}

const response = await axios.post(
    'https://astrologer.p.rapidapi.com/api/v5/moon-phase/now-utc',
    {},
    {
      headers: {
            'x-rapidapi-key': '828f93c5dcmshb4e98a477fec609p1cf03fjsn18b81520adaa',
            'x-rapidapi-host': 'astrologer.p.rapidapi.com',
            'Content-Type': 'application/json'
      }
    }
  )

localStorage.setItem('moonPhase', JSON.stringify(response.data))
localStorage.setItem('moonPhaseDate', today)

  return response.data
}