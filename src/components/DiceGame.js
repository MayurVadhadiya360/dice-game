import React, { useState } from 'react';
import '../css/dicegame.css';
import { PopUp, RulesPopUp } from './PopUp';


const DiceGame = () => {
  const [showRules, setShowRules] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpTitle, setPopUpTitle] = useState('');
  const [popUpContent, setPopUpContent] = useState('');

  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentDiceFace, setCurrentDiceFace] = useState(4);
  const [isRolling, setIsRolling] = useState(false);
  const [score, setScore] = useState(0);
  const [rollCount, setRollCount] = useState(0);
  const [gameDifficulty, setGameDifficulty] = useState('easy');

  const dices = {
    "1": "/dices/dice_1.png",
    "2": "/dices/dice_2.png",
    "3": "/dices/dice_3.png",
    "4": "/dices/dice_4.png",
    "5": "/dices/dice_5.png",
    "6": "/dices/dice_6.png",
  }

  const diceProbability = {
    "easy": {
      "1": 1 / 6,
      "2": 1 / 6,
      "3": 1 / 6,
      "4": 1 / 6,
      "5": 1 / 6,
      "6": 1 / 6
    },
    "medium": {
      "1": 6 / 21,
      "2": 5 / 21,
      "3": 4 / 21,
      "4": 3 / 21,
      "5": 2 / 21,
      "6": 1 / 21
    },
    "difficult": {
      "1": 11 / 36,
      "2": 9 / 36,
      "3": 7 / 36,
      "4": 5 / 36,
      "5": 3 / 36,
      "6": 1 / 36
    },
    "hard": {
      "1": 32 / 63,
      "2": 16 / 63,
      "3": 8 / 63,
      "4": 4 / 63,
      "5": 2 / 63,
      "6": 1 / 63
    },
    "hell": {
      "1": 100000 / 111111,
      "2": 10000 / 111111,
      "3": 1000 / 111111,
      "4": 100 / 111111,
      "5": 10 / 111111,
      "6": 1 / 111111
    },
  }

  const diceReward = {
    "easy": {
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6
    },
    "medium": {
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6
    },
    "difficult": {
      "1": 0,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6
    },
    "hard": {
      "1": 0,
      "2": 0,
      "3": 3,
      "4": 5,
      "5": 7,
      "6": 9
    },
    "hell": {
      "1": 0,
      "2": 0,
      "3": 3,
      "4": 9,
      "5": 27,
      "6": 81
    },
  }

  const rollDice = (difficulty = "easy") => {
    const probabilities = diceProbability[difficulty];
    if (!probabilities) {
      setPopUpTitle(`Difficulty level "${difficulty}" not found.`);
      setPopUpContent('Good!... Good!!... Good!!! How Dare You! A mere mortal dares to ignore my rules!!');
      setShowPopUp(true);
      return 0;
    }

    const rand = Math.random(); // Generate a random number between 0 and 1
    let cumulative = 0;

    // Iterate over dice faces and their probabilities
    for (const [face, probability] of Object.entries(probabilities)) {
      cumulative += probability;
      if (rand <= cumulative) {
        // Actual dice roll result
        const diceResult = parseInt(face, 10);
        console.log(diceResult);
        setCurrentDiceFace(diceResult);

        // score if the rolled number is the same as the selected number
        setScore((prev) => (diceResult === selectedNumber) ? prev + diceReward[difficulty][selectedNumber] : prev - 2);
        setRollCount((prev) => prev + 1);

        return parseInt(face, 10); // Return the face as a number
      }
    }

    return 0;
  };

  const handleDiceRoll = async () => {
    const probabilities = diceProbability[gameDifficulty];
    if (selectedNumber === 0 || !probabilities) {
      if (selectedNumber === 0)
        setPopUpTitle('Select a number');
      if (!probabilities)
        setPopUpTitle(`Difficulty level not found.`);
      setPopUpContent('Good!... Good!!... Good!!! How Dare You! A mere mortal dares to ignore my rules!!');
      setShowPopUp(true);
      return;
    }

    setIsRolling(true);

    // dice rolling effect
    let suffle_dice = [1, 2, 3, 4, 5, 6];
    suffle_dice.sort(() => Math.random() - 0.5);
    for (let i = 0; i < suffle_dice.length - Math.floor(Math.random() * 4); i++) {
      setCurrentDiceFace(suffle_dice[i]);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    rollDice(gameDifficulty);

    setIsRolling(false);
  }

  return (
    <>
      {showRules && <RulesPopUp handleClose={() => setShowRules(false)} />}
      {showPopUp &&
        <PopUp
          title={popUpTitle}
          content={popUpContent}
          handleClose={() => { setShowPopUp(false); setPopUpTitle(""); setPopUpContent(""); }}
        />
      }
      <div className='game-container'>
        <div className='game-stats'>
          <div className='game-stat-score'>
            <div className='score-text-title'>
              Total Score
            </div>
            <div className='game-score' style={{ color: score < 0 ? "red" : "" }}>
              {score}
            </div>
          </div>
          <div className='game-guess-dice-number'>
            <div className='dice-number-list'>
              <button className={`dice-number ${selectedNumber === 1 ? 'selected' : ''}`} onClick={() => setSelectedNumber(1)}>
                1
                <div className='dice-point-reward'>
                  {`+${diceReward[gameDifficulty]["1"].toFixed(1)}`}
                </div>
                <div className='dice-number-prob'>
                  {`${(diceProbability[gameDifficulty]["1"] * 100).toFixed(5)}%`}
                </div>
              </button>
              <button className={`dice-number ${selectedNumber === 2 ? 'selected' : ''}`} onClick={() => setSelectedNumber(2)}>
                2
                <div className='dice-point-reward'>
                  {`+${diceReward[gameDifficulty]["2"].toFixed(1)}`}
                </div>
                <div className='dice-number-prob'>
                  {`${(diceProbability[gameDifficulty]["2"] * 100).toFixed(5)}%`}
                </div>
              </button>
              <button className={`dice-number ${selectedNumber === 3 ? 'selected' : ''}`} onClick={() => setSelectedNumber(3)}>
                3
                <div className='dice-point-reward'>
                  {`+${diceReward[gameDifficulty]["3"].toFixed(1)}`}
                </div>
                <div className='dice-number-prob'>
                  {`${(diceProbability[gameDifficulty]["3"] * 100).toFixed(5)}%`}
                </div>
              </button>
              <button className={`dice-number ${selectedNumber === 4 ? 'selected' : ''}`} onClick={() => setSelectedNumber(4)}>
                4
                <div className='dice-point-reward'>
                  {`+${diceReward[gameDifficulty]["4"].toFixed(1)}`}
                </div>
                <div className='dice-number-prob'>
                  {`${(diceProbability[gameDifficulty]["4"] * 100).toFixed(5)}%`}
                </div>
              </button>
              <button className={`dice-number ${selectedNumber === 5 ? 'selected' : ''}`} onClick={() => setSelectedNumber(5)}>
                5
                <div className='dice-point-reward'>
                  {`+${diceReward[gameDifficulty]["5"].toFixed(1)}`}
                </div>
                <div className='dice-number-prob'>
                  {`${(diceProbability[gameDifficulty]["5"] * 100).toFixed(5)}%`}
                </div>
              </button>
              <button className={`dice-number ${selectedNumber === 6 ? 'selected' : ''}`} onClick={() => setSelectedNumber(6)}>
                6
                <div className='dice-point-reward'>
                  {`+${diceReward[gameDifficulty]["6"].toFixed(1)}`}
                </div>
                <div className='dice-number-prob'>
                  {`${(diceProbability[gameDifficulty]["6"] * 100).toFixed(5)}%`}
                </div>
              </button>
            </div>
            <div className='guess-number-title'>Select Number</div>
          </div>
        </div>
        <div className='game-controls'>
          <div className='random-dice-img'>
            <div onClick={(e) => { if (!isRolling) handleDiceRoll(); console.log("render"); }} >
              <img src={dices[`${currentDiceFace}`]} className='dice-img' alt='dice' />
            </div>
          </div>
          <div className='game-hint-text'>
            Click on Dice to roll
          </div>
          <button className='dice-roll-count'>
            Rolls: {rollCount}
          </button>
          <select
            className='select-difficulty'
            onChange={(e) => {
              setGameDifficulty(e.target.value);
              if (e.target.value === 'hell') {
                setPopUpTitle(`Welcome To Hell!!!!`);
                setPopUpContent("");
                setShowPopUp(true);
              }
            }}
            value={gameDifficulty}
          >
            <option value="0" disabled>Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
            <option value="hard">Hard</option>
            <option value="hell">Hell</option>
          </select>
          <button
            className='game-reset'
            onClick={(event) => { setScore(0); setSelectedNumber(0); setRollCount(0); setGameDifficulty("easy"); }}
          >
            Reset Game
          </button>
          <button
            className='game-rules'
            onClick={(event) => setShowRules(true)}
          >
            Show Rules
          </button>
        </div>
      </div>
    </>
  );
};

export default DiceGame;