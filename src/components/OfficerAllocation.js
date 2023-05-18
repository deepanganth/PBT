import React, { useState } from "react";
import "./OfficerAllocation.css";

function OfficerAllocation() {
  const [badgeID, setBadgeID] = useState("");
  const [pbtID, setPbtID] = useState("");
  const [showMarkLocation, setShowMarkLocation] = useState(true);
  const [displayedCoordinates, setDisplayedCoordinates] = useState("");
  const [officerDetails, setOfficerDetails] = useState([]);

  const handleMarkLocation = () => {
    // Perform any necessary actions when clicking on "Mark Location" button
    // Here, we are just displaying the coordinates
    const coordinates = "Latitude: 123.456, Longitude: 789.012";
    setDisplayedCoordinates(coordinates);
    setShowMarkLocation(false);
  };

  const handleConfirm = () => {
    // Add officer details to the officer list
    const officer = { badgeID, pbtID, coordinates: displayedCoordinates };
    setOfficerDetails((prevOfficers) => [...prevOfficers, officer]);

    // Clear input fields and displayed coordinates
    setBadgeID("");
    setPbtID("");
    setDisplayedCoordinates("");

    // Show the "Mark Location" button again
    setShowMarkLocation(true);
  };

  const handleCancel = () => {
    // Clear input fields and displayed coordinates
    setBadgeID("");
    setPbtID("");
    setDisplayedCoordinates("");

    // Show the "Mark Location" button again
    setShowMarkLocation(true);
  };

  const handleRemoveOfficer = (index) => {
    setOfficerDetails((prevOfficers) => {
      const updatedOfficers = [...prevOfficers];
      updatedOfficers.splice(index, 1);
      return updatedOfficers;
    });
  };

  return (
    <div className="oa-main">
      <div className="oa-map">
        <iframe
        title='kit-map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.08969250206!2d77.0652892871582!3d10.999375099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85695d582db7b%3A0x55286f9c43c3294d!2sKalaignarKarunanidhi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1683797187108!5m2!1sen!2sin"
          width="1000"
          height="800"
          style={{border:0}} 
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="oa-setting">
        <p>Enter Badge ID</p>
        <input
          type="text"
          value={badgeID}
          onChange={(e) => setBadgeID(e.target.value)}
        />
        <p>Enter PBT ID</p>
        <input
          type="text"
          value={pbtID}
          onChange={(e) => setPbtID(e.target.value)}
        />
        {showMarkLocation ? (
          <div className="oa-btns">
            <button onClick={handleMarkLocation}>Mark Location</button>
          </div>
        ) : (
          <div className="oa-coordinates">
            <p>Coordinates: {displayedCoordinates}</p>
            <div className="oa-cc-btns">
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        )}
        <div className="oa-display-list">
          <h3>Officer List</h3>
          {officerDetails.length > 0 ? (
            <ul>
              {officerDetails.map((officer, index) => (
                <li key={index}>
                  <p>
                    <span className="officer-number">{index + 1}. </span>
                    <span>Badge ID: {officer.badgeID}</span>
                  </p>
                  <p>PBT ID: {officer.pbtID}</p>
                  <p>Coordinates: {officer.coordinates}</p>
                  <button onClick={() => handleRemoveOfficer(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No officers added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OfficerAllocation;
