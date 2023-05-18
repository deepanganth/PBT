import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png';
import alertbtn from './assets/alert-btn.png';

function Navbar({ onPatrolClick, onDashboardClick, onOfficerClick }) {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    switch (buttonName) {
      case 'dashboard':
        onDashboardClick();
        break;
      case 'patrol':
        onPatrolClick();
        break;
      case 'officer':
        onOfficerClick();
        break;
      default:
        break;
    }
  };

  return (
    <div className="nav-main">
      <div className="nav-top">
        <img src={logo} alt="logo" />
        <p>Police Bandobast Tracker</p>
      </div>
      <div className="nav-menu">
        <div
          className={`li-btn ${activeButton === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleButtonClick('dashboard')}
        >
          <p>Dashboard</p>
        </div>
        <div
          className={`li-btn ${activeButton === 'patrol' ? 'active' : ''}`}
          onClick={() => handleButtonClick('patrol')}
        >
          <p>Patrol Area Allocation</p>
        </div>
        <div
          className={`li-btn ${activeButton === 'officer' ? 'active' : ''}`}
          onClick={() => handleButtonClick('officer')}
        >
          <p>Officer Allocation</p>
        </div>
        <div
          className={`li-btn ${activeButton === 'officerList' ? 'active' : ''}`}
          onClick={() => handleButtonClick('officerList')}
        >
          <p>Officer List</p>
        </div>
        <div
          className={`li-btn ${activeButton === 'duty' ? 'active' : ''}`}
          onClick={() => handleButtonClick('duty')}
        >
          <p>Monitor</p>
        </div>
        <div
          className={`li-btn ${activeButton === 'history' ? 'active' : ''}`}
          onClick={() => handleButtonClick('history')}
        >
          <p>Notification</p>
        </div>
      </div>
      <div className="nav-btn">
        <img src={alertbtn} alt="" />
        <p>Alert</p>
      </div>
    </div>
  );
}

export default Navbar;
