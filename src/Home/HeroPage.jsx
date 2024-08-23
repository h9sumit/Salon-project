import React from 'react'
import './HeroPage.css'

function HeroPage() {
  return (
    <div className='heropage-container'>
      <div className="heropage-wrapper">
        <div className="hero-left">
          <div id="text">
            <span>S</span>
            <span>T</span>
            <span>Y</span>
            <span>L</span>
            <span>E</span>
            <span id="dot">.</span>
          </div>
          <div className="shifting-text-wrapper">
            <div className="quotes qwitcher-grypen-bold">Fall in Love with Your Reflection.</div>
            <div className="quotes qwitcher-grypen-bold">If you don’t look good, we don’t look good.</div>
            <div className="quotes qwitcher-grypen-bold">Life is too short to have boring hair.</div>
          </div>
        </div>
        <div className="hero-right"></div>
      </div>
    </div>
  )
}

export default HeroPage