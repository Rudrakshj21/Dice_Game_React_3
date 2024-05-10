import { useState } from "react";
import Button from "../Button/Button";
import "./Dice.modules.css";
function Dice() {
  const [currentNum, setCurrentNum] = useState(0);
  const [dice, setDice] = useState(0);
  const [rules, setRules] = useState(false);
  const [score, setScore] = useState(0);
  const diceImage = dice === 0 ? "default" : "roll" + dice;
  function resetScore() {
    setScore(0);
    setCurrentNum(0);
    setRules(false);
    setDice(0);
  }
  function showRules() {
    setRules((prev) => !prev);
  }
  function rollDice() {
    if (!currentNum) {
      return alert("Please select a number before rolling the dice!");
    }
    const roll = Math.floor(Math.random() * 6 + 1);
    setDice((prevRoll) => roll);

    if (dice === currentNum) {
      return setScore((prevScore) => prevScore + dice);
    }
    if (score - 2 >= 0) setScore((prevScore) => prevScore - 2);
  }
  function handleSelectionOfNum(e) {
    console.log("button clicked");
    setCurrentNum((prevNum) => Number(e.target.value));
    setDice(0);
  }
  return (
    <div className="play">
      <section className="header">
        <div className="score_wrapper">
          <div className="score">{score}</div>
          <div className="title">Total Score</div>
        </div>
        <div className="number_wrapper">
          <div className="message">
            {currentNum
              ? `${currentNum} is selected`
              : `You have not selected Yet!`}
          </div>
          <div className="numbers">
            {Array.from({ length: 6 }, (_, i) => i + 1).map((value, index) => (
              <Button
                key={Math.random()}
                className="btn"
                handler={handleSelectionOfNum}
              >
                {value}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="dice">
        <img src={`/images/${diceImage}.png`} alt="Dice " onClick={rollDice} />
        <Button className="btn" handler={resetScore}>
          Reset Score 💣
        </Button>
        <Button className="btn" handler={showRules}>
          {rules ? "Hide rules ❌" : "Show Rules ✉️"}
        </Button>
        {rules && (
          <ul className="rules">
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              If selected number is equal to dice number you will get same
              points as dice
            </li>
            <li>If you get wrong guess then 2 points will be deducted</li>
          </ul>
        )}
      </section>
    </div>
  );
}
export default Dice;
