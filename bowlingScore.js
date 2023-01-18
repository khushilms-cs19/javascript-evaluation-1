// const isTenFrameGame = (rolls) => {
//   let noOfFrames = 0;
//   rolls.forEach((roll) => {
//     if (roll === 10) {
//       noOfFrames += 1;
//       return;
//     }
//   });
// };

const getRunningScore = (rolls) => {
  // if (!isTenFrameGame(rolls)) {
  //   throw new Error('Invalid Number of Frames');
  // }
  const eachFrameScore = Array(10).fill(0);
  let frameCounter = 0;
  let newFrame = true;
  for (let i = 0; i < rolls.length - 3; i++) {
    if (rolls[i] === 10) {
      // finalScore += 10 + rolls[i + 1] + rolls[i + 2];
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
    for (let i = rolls.length - 4; i < rolls.length; i++) {
      eachFrameScore[frameCounter] = rolls[i];
    }
  }
  return eachFrameScore.reduce((totalScore, currFrameScore) => totalScore + currFrameScore, 0);
};
console.log(getRunningScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
const getBestScoreOfAll = () => {

};

module.exports = {
  getRunningScore,
  getBestScoreOfAll,
};