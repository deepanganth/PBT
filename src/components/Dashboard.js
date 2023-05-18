import React, { useState } from 'react';
import './Dashboard.css';
import PatrolAllocation from './PatrolAllocation';
import Navbar from './Navbar';
import OfficerAllocation from './OfficerAllocation';
import Home from './Home';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handlePatrolClick = () => {
    setActiveComponent('patrol');
  };

  const handleOfficerClick = () => {
    setActiveComponent('officer');
  };

  const handleDashboardClick = () => {
    setActiveComponent('home');
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-nav">
        <Navbar
          onPatrolClick={handlePatrolClick}
          onDashboardClick={handleDashboardClick}
          onOfficerClick={handleOfficerClick}
        />
      </div>
      <div className="dashboard-content">
        {activeComponent === 'home' && <Home />}
        {activeComponent === 'patrol' && <PatrolAllocation />}
        {activeComponent === 'officer' && <OfficerAllocation />}
      </div>
    </div>
  );
}

export default Dashboard;
