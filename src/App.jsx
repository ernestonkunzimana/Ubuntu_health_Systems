import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Ubuntu Health Systems</h1>
        <p>Welcome to the Ubuntu Health Systems platform</p>
      </header>
      <main className="app-main">
        <div className="feature-card">
          <h2>Patient Management</h2>
          <p>Manage patient records and medical history</p>
        </div>
        <div className="feature-card">
          <h2>Appointment Scheduling</h2>
          <p>Schedule and manage appointments</p>
        </div>
        <div className="feature-card">
          <h2>Medical Records</h2>
          <p>Access and update medical records</p>
        </div>
      </main>
    </div>
  )
}

export default App
