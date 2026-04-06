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
            const data = await getBirthChart({
                ...formData,
                year: parseInt(formData.year),
                month: parseInt(formData.month),
                day: parseInt(formData.day),
                hour: parseInt(formData.hour),
                minute: parseInt(formData.minute),
                latitude: parseFloat(formData.latitude),
                longitude: parseFloat(formData.longitude)
            })
            console.log('Chart data:', data)
            setChartData(data)
        } catch (error) {
            console.error('API error response:', error.response?.data) // This will show exactly what field failed
            throw error;
        }
    }

    return (
        <div className="container my-5 px-4">
            <h1 className="text-center mb-4 display-5 fw-bold" style={{ fontFamily: 'Cinzel, serif' }}>Create Your Natal Chart</h1>
            <p className="text-center text-white mb-5">Enter your birth details exactly as they appear on your records.</p>

            <form onSubmit={handleSubmit} className="row g-3 shadow-sm p-4 rounded bg-primary border-gold">
                <div className="col-md-6">
                    <label className="form-label text-white">Full Name</label>
                    <input type="text" name="name" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label className="form-label text-white">Birth City</label>
                    <input type="text" name="city" className="form-control" onChange={handleChange} placeholder="e.g. Halifax" required />
                </div>
                <div className="col-md-3">
                    <label className="form-label text-white">Nation (ISO Code)</label>
                    <input type="text" name="nation" className="form-control" onChange={handleChange} placeholder="e.g. CA" required />
                </div>

                <div className="col-md-2">
                    <label className="form-label text-white">Day</label>
                    <input type="number" name="day" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-2">
                    <label className="form-labe text-white">Month</label>
                    <input type="number" name="month" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-2">
                    <label className="form-label text-white">Year</label>
                    <input type="number" name="year" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label className="form-label text-white">Hour (24h)</label>
                    <input type="number" name="hour" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label className="form-label text-white">Minute</label>
                    <input type="number" name="minute" className="form-control" onChange={handleChange} required />
                </div>

                <div className="col-md-4">
                    <label className="form-label text-white">Latitude</label>
                    <input type="number" step="any" name="latitude" className="form-control" onChange={handleChange} placeholder="e.g. 44.64" required />
                </div>
                <div className="col-md-4">
                    <label className="form-label text-white">Longitude</label>
                    <input type="number" step="any" name="longitude" className="form-control" onChange={handleChange} placeholder="e.g. -63.57" required />
                </div>
                <div className="col-md-4">
                    <label className="form-label text-white">Timezone</label>
                    <input type="text" name="timezone" className="form-control" onChange={handleChange} placeholder="e.g. America/Halifax" required />
                </div>

                <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-gold btn-lg px-5 shadow-sm">
                        Generate Chart
                    </button>
                </div>
            </form>

        {chartData && (
            <div className="mt-5 text-center">
                <h2 className="mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Your Cosmic Blueprint</h2>
                {chartData.chart && (
                    <div className="bg-primary border-gold rounded p-4 mx-auto" style={{ maxWidth: '800px' }}>
                        <div dangerouslySetInnerHTML={{ __html: chartData.chart }}
                        className="img-fluid rounded shadow mx-auto"
                        style={{ maxWidth: '800px' }}>
                        </div>
                    </div>
                )}
            </div>
        )}
        </div>  
    )
}

export default BirthChart