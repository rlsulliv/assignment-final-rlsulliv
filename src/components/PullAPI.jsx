import axios from 'axios';

export const getMoonPhase = async () => {
  const moonDataURL = 'https://astrologer.p.rapidapi.com/api/v5/moon-phase/now-utc'
  const cached = localStorage.getItem('moonPhase')
  const cachedDate = localStorage.getItem('moonPhaseDate')
  const today = new Date().toDateString()

  if (cached && cachedDate === today) {
      return JSON.parse(cached)
  }

  const response = await axios.post(
      moonDataURL,
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

export const getBirthChart = async (userData) => {
  const birthChartURL = 'https://astrologer.p.rapidapi.com/api/v5/chart/birth-chart'

  const cacheKey = `chart_${userData.name.replace(/\s+/g, '_').toLowerCase()}`;
  const cachedChart = localStorage.getItem(cacheKey);

  if (cachedChart) {
    return JSON.parse(cachedChart);
  }

  const options = {
    method: 'POST',
    url: birthChartURL,
    headers: {
      'x-rapidapi-key': '828f93c5dcmshb4e98a477fec609p1cf03fjsn18b81520adaa',
      'x-rapidapi-host': 'astrologer.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      subject: {
        name: userData.name,
        year: userData.year,
        month: userData.month,
        day: userData.day,
        hour: userData.hour,
        minute: userData.minute,
        city: userData.city,
        nation: userData.nation,
        longitude: userData.longitude,
        latitude: userData.latitude,
        timezone: userData.timezone,
        zodiac_type: 'Tropical',
        houses_system_identifier: 'P'
      },
      theme: 'classic',
      language: 'EN',
      split_chart: false,
      transparent_background: false,
      show_house_position_comparison: true,
      custom_title:  `${userData.name}'s Natal Chart`,
      active_points: [
        'Sun',
        'Moon',
        'Mercury',
        'Venus',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune',
        'Pluto',
        'Chiron',
        'Lilith',
        'north_node'
      ],
      active_aspects: [
        {
          name: 'conjunction',
          orb: 8
        },
        {
          name: 'opposition',
          orb: 8
        },
        {
          name: 'trine',
          orb: 8
        },
        {
          name: 'square',
          orb: 8
        },
        {
          name: 'sextile',
          orb: 6
        }
      ]
    }
  };

  try {
    const response = await axios.request(options);
    localStorage.setItem(cacheKey, JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}