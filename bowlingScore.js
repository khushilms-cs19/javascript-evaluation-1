const isTenFrameGame = (rolls) => {
  let noOfFrames = 0;
  let newFrame = true;
  let i = 0;
  for (i = 0; i < rolls.length; i++) {
    if (rolls[i] === 10) {
      noOfFrames += 1;
      continue;
    }
    if (newFrame) {
      newFrame = false;
    } else {
      noOfFrames += 1;
      newFrame = true;
    }
    if (noOfFrames === 9) {
      break;
    }
  }
  const leftOverRolls = rolls.length - i - 1;
  if (leftOverRolls === 2 || leftOverRolls === 3) {
    noOfFrames += 1;
  }
  if (noOfFrames === 10) {
    return true;
  }
  return false;
};

const getRunningScore = (rolls) => {
  if (!isTenFrameGame(rolls)) {
    throw new Error('Invalid Number of Frames');
  }
  const eachFrameScore = Array(10).fill(0);
  let frameCounter = 0;
  let newFrame = true;
  let i = 0;
  for (i = 0; i < rolls.length; i++) {

    if (frameCounter === 9) {
      break;
    }
    if (rolls[i] === 10) {

      eachFrameScore[frameCounter] = 10 + rolls[i + 1] + rolls[i + 2];
      frameCounter += 1;
      continue;
    }
    if (newFrame) {
      eachFrameScore[frameCounter] += rolls[i];
      newFrame = false;
    } else {
      eachFrameScore[frameCounter] += rolls[i];
      if (eachFrameScore[frameCounter] === 10) {
        eachFrameScore[frameCounter] += rolls[i + 1];
      }
      frameCounter += 1;
      newFrame = true;
    }
  }
  for (let j = i; j < rolls.length; j++) {
    eachFrameScore[frameCounter] += rolls[j];
  }
  return eachFrameScore.reduce((totalScore, currFrameScore) => totalScore + currFrameScore, 0);
};


const getBestScoreOfAll = (games) => {
  return games.reduce((maxScore, game) => {
    const gameScore = getRunningScore(game);
    if (gameScore > maxScore) {
      maxScore = gameScore;
    }
    return maxScore;
  }, -1);
};

module.exports = {
  getRunningScore,
  getBestScoreOfAll,
};