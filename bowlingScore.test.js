const { getRunningScore, getBestScoreOfAll } = require("./bowlingScore")

describe('Bowling Score', () => {
  describe('Testing to get the running score.', () => {
    it('Should return proper score when given correct input.', () => {
      expect(getRunningScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    })
    it('Should return an error if the number of frames is not 10', () => {
      expect(getRunningScore([3, 6, 3, 6, 3, 6, 3, 6])).toThrow("Invalid Number of Frames");
    });
  })
  describe('Testing to get best score of multiple games', () => {
    const rollsOfGames = [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    const rollsOfGamesWithError = [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    it('Should return best score of multiple games', () => {
      expect(getBestScoreOfAll(rollsOfGames)).toBe(90);
    })
    it('Should return an error if one of the games does not have 10 frames', () => {
      expect(() => getBestScoreOfAll(rollsOfGamesWithError)).toThrow("Invalid Number of Frames");
    })
  })
});

