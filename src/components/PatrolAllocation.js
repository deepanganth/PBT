import React, { useState } from 'react';
import './PatrolAllocation.css';

function PatrolAllocation() {
  const [showButtons, setShowButtons] = useState(true);

  const handleConfirm = () => {
    setShowButtons(false);
  }

  const handleEdit = () => {
    setShowButtons(true);
  }

  return (
    <div className='pa-main'>
      <div className='pa-map'>
        <iframe
          title='kit-map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.08969250206!2d77.0652892871582!3d10.999375099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85695d582db7b%3A0x55286f9c43c3294d!2sKalaignarKarunanidhi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1683797187108!5m2!1sen!2sin"
          width="1000"
          height="800"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='pa-setting'>
        <p>Enter Patrol Location</p>
        <input type="text" />
        <p>Enter Radius in KM</p>
        <input type="text" />
        <p>Enter Shift time</p>
        <input type="text" />
        {showButtons ? (
          <div className='pa-btns'>
            <button onClick={handleConfirm}>Confirm</button>
            <button>Cancel</button>
          </div>
        ) : (
          <div className='pa-btns pa-edit-btn'>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatrolAllocation;
