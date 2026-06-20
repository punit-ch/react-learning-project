import { useState } from 'react';
import './App.css';

function App() {
  const [applications, setApplications] = useState([
    { id: 1, company: 'Google', role: 'STEP Intern', status: 'Applied' },
    { id: 2, company: 'Amazon', role: 'SDE Intern', status: 'Interviewing' },
    { id: 3, company: 'Fintech Startup', role: 'Full Stack Developer', status: 'Offer' }
  ]);

  const [companyInput, setCompanyInput] = useState('');
  const [roleInput, setRoleInput] = useState('');
  const [statusInput, setStatusInput] = useState('Applied');

  const totalApps = applications.length;
  const interviewsCount = applications.filter(app => app.status === 'Interviewing').length;
  const offersCount = applications.filter(app => app.status === 'Offer').length;

  const handleAddApplication = (e) => {
    e.preventDefault();
    if (!companyInput.trim() || !roleInput.trim()) return;

    const newApp = {
      id: Date.now(),
      company: companyInput,
      role: roleInput,
      status: statusInput
    };

    setApplications([...applications, newApp]);
    setCompanyInput('');
    setRoleInput('');
  };

  const handleDeleteApplication = (idToDelete) => {
    setApplications(applications.filter(app => app.id !== idToDelete));
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>DevLaunch Dashboard 🚀</h1>
        <p>Track applications, analyze stage conversions, and level up your stack.</p>
      </header>

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

      {/* Form with clean external class names */}
      <section className="form-container">
        <h3 style={{ margin: '0 0 15px 0', color: '#334155' }}>Add New Application</h3>
        <form onSubmit={handleAddApplication} className="app-form">
          <input 
            type="text" 
            placeholder="Company Name" 
            value={companyInput}
            onChange={(e) => setCompanyInput(e.target.value)}
            className="form-input"
          />
          <input 
            type="text" 
            placeholder="Role" 
            value={roleInput}
            onChange={(e) => setRoleInput(e.target.value)}
            className="form-input"
          />
          <select 
            value={statusInput}
            onChange={(e) => setStatusInput(e.target.value)}
            className="form-select"
          >
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
          </select>
          <button type="submit" className="form-btn">
            Add Tracker
          </button>
        </form>
      </section>

      <main className="list-section">
        <h2>Pipeline Overview</h2>
        
        <div className="applications-grid">
          {applications.map((app) => (
            <div key={app.id} className={`job-card ${app.status.toLowerCase()}`}>
              <div className="job-info">
                <h3>{app.company}</h3>
                <p>{app.role}</p>
              </div>
              <div className="card-actions">
                <span className={`status-badge ${app.status.toLowerCase()}`}>
                  {app.status}
                </span>
                <button 
                  onClick={() => handleDeleteApplication(app.id)}
                  className="delete-btn"
                  title="Delete Application"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;