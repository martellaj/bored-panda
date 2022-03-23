export default function HowToPlay() {
  return (
    <div id="howToPlayContainer" className="howToPlayContainer">
      <h3 style={{ marginBottom: "30px" }}>HOW TO PLAY</h3>
      <div
        style={{
          width: "300px",
        }}
      >
        <h4>You'll get a starting word and a clue (i.e. JOE).</h4>
        <h4>
          The answer will be one letter off from the starting word (i.e. JOE ➡️
          JOT).
        </h4>
        <h4>When you solve it, you'll get a new clue.</h4>
        <h4>
          The new answer will be one letter off from the previous answer (i.e.
          JOT ➡️ BOT).
        </h4>
      </div>
    </div>
  );
}
