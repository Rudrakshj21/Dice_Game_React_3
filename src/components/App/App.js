import "./App.css";
import { useState } from "react";
import Button from "../Button/Button";
import "./App.css";
import Dice from "../Dice/Dice";
function App() {
  const [playNow, setPlayNow] = useState(true);
  function startGame() {
    console.log('hi')
    setPlayNow((play) => !play);
  }
  return (
    <main>
      {!playNow ? (
        <div className="home">
          <section className="dice_home_image_wrapper">
            <img src="/images/dices 1.png" alt="Dice home" />
          </section>
          <section className="dice_home">
            <div className="title">Dice Game</div>
            <div className="play_btn_wrapper">
              <Button handler={startGame}>Play now</Button>
            </div>
          </section>
        </div>
      ) : (
        // here dice component
        <Dice />
      )}
    </main>
  );
}

export default App;
