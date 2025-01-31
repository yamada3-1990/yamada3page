// import React from 'react';
import Spline from '@splinetool/react-spline';
import './home.css';

export default function Home() {
  return (
    <div className="scene-container">
      <Spline scene="https://prod.spline.design/Q4Ng8MPAkrPAzf-V/scene.splinecode" />
      {/* <div className="overlay">
        <h1>Home Page</h1>
        <p>Welcome to the Spline scene! Explore the 3D world below.</p>
      </div> */}
    </div>
  );
}
