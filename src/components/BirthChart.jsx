import { useState } from 'react';
import { getBirthChart } from '/src/components/PullAPI';

function BirthChart() {
    const [formData, setFormData] = useState({
        name: '',
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
        city: '',
        nation: '',
        longitude: '',
        latitude: '',
        timezone: 'UTC'
    })
    const [chartData, setChartData] = useState(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await getBirthChart(formData)
            setChartData(data)
        } catch (error) {
            alert("Error fetching chart.")
        }
    }

    return (
        <h1>hello</h1>
    )
}

export default BirthChart