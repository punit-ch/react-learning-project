import { upState, useState } from 'react';
import './App.css'

function App() {
  const [application, setApplication] = useState([
    { id: 1, company: 'Google', role: 'STEP Intern', status: 'Applied' },
    { id: 2, company: 'Amazon', role: 'SDE Intern', status: 'Interviewing' },
    { id: 3, company: 'Fintech Startup', role: 'Full Stack Developer', status: 'Offer' }
  ])

  const totalApp = applications.lenght;
  const InterviewsCount = application.filter(app => app.status == 'Interviewing').length
  const offerCount = application.filter(app => app.status === 'Offer').length

  return (
  <div className="dashboard-container">
      {/* Header component section */}
      <header className="dashboard-header">
        <h1>DevLaunch Dashboard 🚀</h1>
        <p>Track applications, analyze stage conversions, and level up your stack.</p>
      </header>

      {/* Metrics Row Section */}
      <section className="stats-row">
        <div className="stat-card">
          <h3>Total Applications</h3>
          <div className="stat-number">{totalApps}</div>
        </div>
        <div className="stat-card" style={{ borderColor: '#eab308' }}>
          <h3>Active Interviews</h3>
          <div className="stat-number" style={{ color: '#854d0e' }}>{interviewsCount}</div>
        </div>
        <div className="stat-card" style={{ borderColor: '#22c55e' }}>
          <h3>Offers Secured</h3>
          <div className="stat-number" style={{ color: '#166534' }}>{offersCount}</div>
        </div>
      </section>

      {/* Dynamic Application Feed */}
      <main className="list-section">
        <h2>Pipeline Overview</h2>
        
        <div className="applications-grid">
          {applications.map((app) => (
            <div 
              key={app.id} 
              className={`job-card ${app.status.toLowerCase()}`}
            >
              <div className="job-info">
                <h3>{app.company}</h3>
                <p>{app.role}</p>
              </div>
              <div>
                <span className={`status-badge ${app.status.toLowerCase()}`}>
                  {app.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
export default App 