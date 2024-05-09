import Button from "../Button/Button";
import "./Dice.modules.css";
function Dice() {
  return (
    <div className="play">
      <section className="header">
        <div className="score_wrapper">
          <div className="score">0</div>
          <div className="title">Total Score</div>
        </div>
        <div className="number_wrapper">
          <div className="message">You have not selected Yet!</div>
          <div className="numbers">
            {Array.from({ length: 6 }, (_, i) => i + 1).map((value) => (
              <Button key={value} className="btn">
                {value}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="dice">
        <img src="/images/dice.png" alt="" />
        <Button className="btn">Reset Score 💣</Button>
        <Button className="btn">Show Rules ✉️</Button>
        <ul className="rules">
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            If selected number is equal to dice number you will get same points
            as dice
          </li>
          <li>If you get wrong guess then 2 points will be deducted</li>
        </ul>
      </section>
    </div>
  );
}
export default Dice;
