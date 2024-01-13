import React from 'react'
import play from '../assets/play.png';
import player from '../assets/player.png';






export default function hello() {
  return (
    <section className="hello">
      <div className="hello__info">
        <div className="hello__title">Virtual Reality<br />Business Solutions<div className="hello__blur4"></div></div>
        <div className="hello__desc">We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.        </div>
        <div className="hello__interes">
          <button className="hello__btn btn">Join Us</button>
          <buttun className="hello__watch">
            <div className="hello__watch-img"><img src={play} alt="Play" /></div>
            <div className="hello__watch-text">Watch video</div>
          </buttun>
        </div>
        
      </div>
      <div className="hello__img">
        <img src={player} alt="Player" />
        <div className="hello__blur1"></div>
        <div className="hello__blur2"></div>
        <div className="hello__blur3"></div>

      </div>




    </section>
  )
}
