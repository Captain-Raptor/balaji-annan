import React from 'react';
import './style.css';


const Landing = () => {
  return (
    <div className="landing-page">
    
      <div className="content">
        <div className="text-section">
          <h1>Building the future of AI together</h1>
          <p>AI is transforming the world, and we are leading the charge. We are constructing the future of AI as a collective.</p>
          <button className="get-started-button">Get started</button>
          <div className="user-info">
            <span>430,000 Users</span> is building Cleverbot together
            <br />
            <span>1M Users</span> Estimated additional reach
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landing;
