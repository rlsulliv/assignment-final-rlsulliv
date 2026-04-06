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
        <div className="container my-5 px-4">
            <h1 className="text-center mb-4 display-5 fw-light">Create Your Natal Chart</h1>
            <p className="text-center text-muted mb-5">Enter your birth details exactly as they appear on your records.</p>

            <form onSubmit={handleSubmit} className="row g-3 shadow-sm p-4 rounded bg-white border">
                <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Birth City</label>
                    <input type="text" name="city" className="form-control" onChange={handleChange} placeholder="e.g. Halifax" required />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Nation (ISO Code)</label>
                    <input type="text" name="nation" className="form-control" onChange={handleChange} placeholder="e.g. CA" required />
                </div>

                <div className="col-md-2">
                    <label className="form-label">Day</label>
                    <input type="number" name="day" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Month</label>
                    <input type="number" name="month" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-2">
                    <label className="form-label">Year</label>
                    <input type="number" name="year" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Hour (24h)</label>
                    <input type="number" name="hour" className="form-control" onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Minute</label>
                    <input type="number" name="minute" className="form-control" onChange={handleChange} required />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Latitude</label>
                    <input type="number" step="any" name="latitude" className="form-control" onChange={handleChange} placeholder="e.g. 44.64" required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Longitude</label>
                    <input type="number" step="any" name="longitude" className="form-control" onChange={handleChange} placeholder="e.g. -63.57" required />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Timezone</label>
                    <input type="text" name="timezone" className="form-control" onChange={handleChange} placeholder="e.g. America/Halifax" required />
                </div>

                <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-dark btn-lg px-5 shadow-sm">
                        Generate Chart
                    </button>
                </div>
            </form>

            {chartData && (
                <div className="mt-5 text-center">
                    <h2 className="mb-4">Your Cosmic Blueprint</h2>
                    {chartData.chart_url && (
                        <img src={chartData.chart_url} alt="Natal Chart" className="img-fluid rounded shadow" />
                    )}
                    <pre className="text-start bg-light p-3 mt-4">
                        {JSON.stringify(chartData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}

export default BirthChart