import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {

  return (
    <>
      <div className='home-container'>
        <img src={`${process.env.PUBLIC_URL}/dices/dices.png`} className='home-dices-img' alt='dices' />
        <div className='home-game-start'>
          <span className='home-title'>DICE GAME</span>
          <Link className='home-play-now' to='/dice-game/game' >Play Now</Link>
        </div>
      </div>
    </>
  );
}


export default Home;