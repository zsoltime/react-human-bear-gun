import React, { useEffect, useState } from 'react';
import random from 'utils.random';

import RadioBox from './RadioBox';
import Results from './Results';
import Icon from './Icons';

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return { result: "It's a tie. Try again!", winner: null };
  }

  switch (userChoice) {
    case 'Human':
      return computerChoice === 'Bear'
        ? {
            result: "You've just been mauled by a bear",
            winner: 'computer',
          }
        : {
            result: "You've just disarmed your opponent",
            winner: 'user',
          };

    case 'Bear':
      return computerChoice === 'Human'
        ? {
            result: 'You tore him apart like a loaf of bread',
            winner: 'user',
          }
        : {
            result: 'Oops, you have been shot by a gun',
            winner: 'computer',
          };

    case 'Gun':
      return computerChoice === 'Human'
        ? {
            result: "It looks like you've been disarmed",
            winner: 'computer',
          }
        : { result: 'Geez, you shot the bear', winner: 'user' };

    default:
      return {
        result: null,
        winner: null,
      };
  }
};

const Game = () => {
  const CHOICES = ['Human', 'Bear', 'Gun'];
  const STORAGE_NAME = 'humanBearGunPoints';
  const [computerChoice, setComputerChoice] = useState(null);
  const [computerIsThinking, setComputerIsThinking] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [points, setPoints] = useState({
    computer: 0,
    user: 0,
  });
  const [result, setResult] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const savePoints = () => {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(points));
    };

    window.addEventListener('beforeunload', savePoints);

    return () => {
      window.removeEventListener('beforeunload', savePoints);
    };
  }, [points]);

  useEffect(() => {
    try {
      const pointsFromStorage = JSON.parse(
        window.localStorage.getItem(STORAGE_NAME)
      );
      if (pointsFromStorage) {
        setPoints(pointsFromStorage);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const markUserChoice = index => {
    setComputerChoice(null);
    setUserChoice(CHOICES[index]);
    setResult(null);
    setWinner(null);
  };

  const playGame = e => {
    e.preventDefault();

    const randomResult = random(CHOICES);
    const response = getResult(userChoice, randomResult);

    setComputerChoice(null);
    setComputerIsThinking(true);
    setResult(null);
    setWinner(null);

    window.setTimeout(() => {
      setComputerChoice(randomResult);
      setComputerIsThinking(false);
      setResult(response.result);
      setWinner(response.winner);
      setPoints(prevPoints => ({
        ...prevPoints,
        [response.winner]: prevPoints[response.winner] + 1,
      }));
    }, random(300, 1000));
  };

  const resetGame = () => {
    setComputerChoice(null);
    setComputerIsThinking(false);
    setUserChoice(null);
    setResult(null);
    setPoints({
      computer: 0,
      user: 0,
    });
    setWinner(null);
  };

  return (
    <div className="wrapper">
      <h1 className="title">
        Human-Bear-Gun <strong>Mini Game</strong>
      </h1>
      <form className="form" onSubmit={playGame}>
        {/* Can't use fieldset and legend as display: flex doesn't work in Chrome :( */}
        <div
          className="game"
          role="radiogroup"
          aria-labelledby="label"
        >
          <div className="instructions" id="label">
            {`Select one of the ${CHOICES.length} choices`}
          </div>
          {CHOICES.map((choice, i) => (
            <RadioBox
              key={choice}
              choice={choice}
              userChoice={userChoice}
              onChange={() => markUserChoice(i)}
            />
          ))}
        </div>
        <button
          className="btn"
          disabled={!userChoice || computerIsThinking}
        >
          {computerIsThinking
            ? 'Your opponent is thinking...'
            : 'Play'}
        </button>
      </form>
      <Results
        computerChoice={computerChoice}
        userChoice={userChoice}
        points={points}
        result={result}
        winner={winner}
      />
      <button
        className="btn btn--reset"
        type="button"
        title="Reset game"
        onClick={resetGame}
      >
        <Icon type="Reset" size="24px" />
        <span className="visuallyhidden">Reset Game</span>
      </button>
    </div>
  );
};

export default Game;
