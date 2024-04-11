import { useState } from 'react';
import Reviews from '../../Reviews/Reviews';
import './Tabs.css'


function Tabs() {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <>
      <div className="single-tabs">
        <ul className="tab-list">
          <li>
            <a
              href="#"
              className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
              onClick={(e) => handleTabClick(e, "desc")}
            >
              Description
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`tab-button ${activeTab === "info" ? "active" : ""}`}
              onClick={(e) => handleTabClick(e, "info")}
            >
              Additional information
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
              onClick={(e) => handleTabClick(e, "reviews")}
            >
              Reviews
            </a>
          </li>
        </ul>
        <div className="tab-panel">
          <div
            className={`tab-panel-descriptions content ${
              activeTab === "desc" ? "active" : ""
            }`}
          >
            <p>
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
              Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit
              ex,
              Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
            </p>
          </div>
          <div
            className={`tab-panel-information content ${
              activeTab === "info" ? "active" : ""
            }`}
            id="info"
          >
            <h3>Additional information</h3>
            <table>
              <tbody>{/* Additional information table content goes here */}</tbody>
            </table>
          </div>
          
          <Reviews
            active={activeTab === "reviews" ? "content active" : "content"}
          />
        </div>
      </div>
    </>
  );
}

export default Tabs;

  
  


  
