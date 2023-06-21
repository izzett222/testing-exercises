const whoWon = require("./RPS.js")

describe("ROCK PAPER SCISSOR", () => {
  it("should return a tie if the player use the same move", () => {
    expect(whoWon("paper", "paper")).toBe("TIE!")
  });
  
  it("should return player 1 if player 1 plays paper and player 2 plays paper", () => {
    expect(whoWon("paper", "rock")).toBe("Player 1 wins!")
  });

  it("should return player 2 if player 1 plays rock and player 2 plays rock", () => {
    expect(whoWon("rock", "paper")).toBe("Player 2 wins!")
  });

  it("should return player 1 if player 1 plays rock and player 2 plays    scissor", () => {
    expect(whoWon("rock", "scissors")).toBe("Player 1 wins!")
  });
  
   it("should return player 2 if player 1 plays scissor and player 2 plays rock", () => {
    expect(whoWon("scissors", "rock")).toBe("Player 2 wins!")
  });

  it("should return player 1 if player 1 plays scissor and player 2 plays paper", () => {
    expect(whoWon("scissors", "paper")).toBe("Player 1 wins!")
  });

  it("should return player 2 if player 1 plays paper and player 2 plays scissors", () => {
    expect(whoWon("paper", "scissors")).toBe("Player 2 wins!")
  });
  
})
