import { cons } from 'hexlet-pairs';
import getRandomNum from '../random';
import gameEngine from './game-engine';

// This file is main logic of game which ask user to find gcd of two numbers

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGCD(b, a % b);
};

const beginOfRange = 1;
const endOfRange = 100;

const getGameLogic = () => {
  const fNum = getRandomNum(beginOfRange, endOfRange);
  const sNum = getRandomNum(beginOfRange, endOfRange);

  const question = `${fNum} ${sNum}`;
  const correctAnswer = findGCD(fNum, sNum);

  return cons(question, correctAnswer);
};
export default () => gameEngine(gameTask, getGameLogic);