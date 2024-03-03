// HomePage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../styles/homepage.css"
function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className='content-wrapper'>
      <div className="content">
        <div className='head-home' style={{ color: 'white !important' }}>
          Employee Productivity Dashboard
          </div>
          <div className='main'>
          <div className="row">
    <div className="name">Productivity on Monday</div>
    <div className="percentage">4%</div>
  </div>
  <div className="row">
    <div className="bar" style={{width: '4%'}}></div>
  </div>
  <div className="row">
    <div className="name">Productivity on Tuesday</div>
    <div className="percentage">92%</div>
  </div>
  <div className="row">
    <div className="bar" style={{width: '92%'}}></div>
  </div>
  <div className="row">
    <div className="name">Productivity on Wednesday</div>
    <div className="percentage">122%</div>
  </div>
  <div className="row">
    <div className="bar" style={{width: '122%'}}></div>
  </div>
  <div className="row">
    <div className="name">Productivity on Thursday</div>
    <div className="percentage">93%</div>
  </div>
  <div className="row">
    <div className="bar" style={{width: '93%'}}></div>
  </div>
  <div className="row">
    <div className="name">Productivity on Friday</div>
    <div className="percentage">89%</div>
  </div>
  <div className="row">
    <div className="bar" style={{width: '89%'}}></div>
  </div>
  <div className="row">
    <div className="name">Productivity on Saturday</div>
    <div className="percentage">98%</div>
  </div>
  <div className="row">
    <div className="bar" style={{width: '98%'}}></div>
  </div>
  
          </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
