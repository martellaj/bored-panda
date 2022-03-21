import "./App.css";
// import Guess from "./Guess";
import Timer from "./Timer";
import Word from "./Word";
import { useState } from "react";
import useEventListener from "./useEventListener";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

function App() {
  const word = "poop";
  const hint = "a dropping sound";
  const answer = "plop";

  const [guess, setGuess] = useState("");

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      checkAnswer();
    }

    if (e.key === "Backspace") {
      setGuess(guess.slice(0, -1));
      return;
    }

    if (guess.length === answer.length) {
      return;
    }

    if (e.shiftKey || e.ctrlKey || e.altKey) {
      return;
    }

    const key = e.key.toLowerCase().trim();
    if (key.length === 1) {
      setGuess(guess + key);
    }
  };

  const onKeyboardKeyPress = (key) => {
    if (key === "{enter}") {
      checkAnswer();
      return;
    }

    if (key === "{bksp}") {
      setGuess(guess.slice(0, -1));
      return;
    }

    if (guess.length === answer.length) {
      return;
    }

    setGuess(guess + key);
  };

  useEventListener("keydown", onKeyDown);

  const checkAnswer = () => {
    alert("todo");
  };

  return (
    <div className="App">
      <Timer />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Word answer={word} mode="hint" />
        <div className="hint">{hint}</div>
      </div>

      <Word answer={word} guess={guess} />

      <Keyboard
        onKeyPress={onKeyboardKeyPress}
        maxLength={answer.length}
        layout={{
          default: [
            "q w e r t y u i o p",
            "a s d f g h j k l",
            "z x c v b n m",
            "{bksp} {enter}",
          ],
        }}
        display={{
          "{shift}": "⇧",
          "{shiftactivated}": "⇧",
          "{enter}": "↵",
          "{bksp}": "⌫",
          "{altright}": ".?123",
          "{downkeyboard}": "🞃",
          "{space}": " ",
          "{default}": "ABC",
          "{back}": "⇦",
        }}
      />
    </div>
  );
}

export default App;
