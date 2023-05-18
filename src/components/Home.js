import "./Home.css";
import mapIcon from "./assets/map-icon.png";
import adminIcon from "./assets/admin-icon.png";
import officerIcon from "./assets/officer-icon.png";
import timeIcon from "./assets/time-icon.png";
import boundaryIcon from "./assets/boundary-icon.png";
function Home() {
  return (
    <div className="home-main">
      <div className="home-top">
        <div className="h-top-box">
          <img src={mapIcon} alt="map icon" />
          <div>
            <p>Patrol Area</p>
            <p>XYZ123</p>
          </div>
        </div>
        <div className="h-top-box">
          <img src={adminIcon} alt="map icon" />
          <div>
            <p>Admin</p>
            <p>Officer123</p>
          </div>
        </div>
      </div>
      <div className="home-bottom">
        <div className="h-bottom-left">
          <div className="h-bottom-box">
            <img src={officerIcon} alt="" />
            <p>Total Officers</p>
            <div className="h-count-box">
                <p className="h-count">100</p>
            </div>
          </div>
          <div className="h-bottom-box">
          <img src={officerIcon} alt="" />
            <p>Officers On-Duty</p>
            <div className="h-count-box">
                <p className="h-count">50</p>
            </div>
          </div>
          <div className="h-bottom-box">
          <img src={officerIcon} alt="" />
            <p>Officers Off-Duty</p>
            <div className="h-count-box">
                <p className="h-count">50</p>
            </div>
          </div>
        </div>
        <div className="h-bottom-right">
          <div className="h-bottom-box">
          <img src={timeIcon} alt="" />
            <p>Shift Time</p>
            <div className="h-count-box">
                <p className="h-count">2</p>
            </div>
          </div>
          <div className="h-bottom-box">
          <img src={boundaryIcon} alt="" />
            <p>Patrol Boundary</p>
            <div className="h-count-box">
                <p className="h-count">1 KM</p>
            </div>
          </div>
          <div className="h-bottom-box">
          <img src={boundaryIcon} alt="" />
            <p>Officers Boundary</p>
            <div className="h-count-box">
                <p className="h-count">100 M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
