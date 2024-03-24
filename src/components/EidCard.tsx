import React from "react";

const EidCard = () => {
  return (
    <div id="1" className="eid-card-container">
      <div className="eid-card-diamond-container">
        <div className="eid-card-diamond-section">
          <div className="eid-card-diamond" />
        </div>
        <div className="eid-card-diamond-section">
          <div className="eid-card-diamond secondary" />
          <div className="eid-card-diamond secondary" />
        </div>
        <div className="eid-card-diamond-section">
          <div className="eid-card-diamond" />
          <div className="eid-card-diamond" />
          <div className="eid-card-diamond" />
        </div>
        <div className="eid-card-diamond-section">
          <div className="eid-card-diamond secondary" />
          <div className="eid-card-diamond secondary" />
        </div>
        <div className="eid-card-diamond-section">
          <div className="eid-card-diamond" />
        </div>
      </div>
      <div className="eid-card-text">
        <p>.: Selamat Hari Raya Idul Fitri :.</p>
        <p>Mohon maaf lahir dan batin &hearts;</p>
      </div>
    </div>
  );
};

export default EidCard;
