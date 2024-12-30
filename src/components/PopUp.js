import React from 'react'
import close from '../icons/close.svg';
import '../css/popup.css';

const PopUp = ({ title, content, handleClose }) => {
  return (
    <div className='pop-up-bg'>
      <div className='pop-up-container' id='pop-up'>
        <img src={close} className='pop-up-close' onClick={(event) => handleClose()} alt='x' />
        <div className='pop-up-content'>
          <h2>{title}</h2>
          <p>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const RulesPopUp = ({ handleClose }) => {
  return (
    <div className='pop-up-bg'>
      <div className='pop-up-container' id='pop-up'>
        <img src={close} className='pop-up-close' onClick={(event) => handleClose()} alt='x' />
        <div className='pop-up-content'>
          <h2>How to Play Dice Game</h2>
          <ul>
            <li>
              Select any number of dice.
            </li>
            <li>
              Click on the dice to roll it.
            </li>
            <li>
              If the number on the dice is same as the number you selected,
              you will get same number of points as the number you select.
              Otherwise you get <b>-2</b> points.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { PopUp, RulesPopUp };