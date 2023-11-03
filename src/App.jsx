const App = () => {
  function checkGuess() {
    let guess = document.getElementById("my-guess").value;
    let num = Math.floor(Math.random() * 101);

    if (guess > num + 10) {
      document.getElementById("answer").innerHTML = "ALOT LOWER";
    } else if (guess > num) {
      document.getElementById("answer").innerHTML = "A LITTLE LOWER";
    } else if (guess < num - 10) {
      document.getElementById("answer").innerHTML = "ALOT HIGHER";
    } else if (guess < num) {
      document.getElementById("answer").innerHTML = "A LITTLE HIGHER";
    } else if (guess === num) {
      document.getElementById("answer").innerHTML = "CORRECT";
    }
  }

  return (
    <div>
      <div>
        <h1>Guessing Game</h1>
        <h2>Guess which number I'm thinking of between 0 and 100?</h2>
        <input type="number" id="my-guess" min={0} max={100} />
        <button onClick={checkGuess}>Am I Right?</button>

        <br />
        <h1 id="answer"></h1>
        <br />
      </div>
    </div>
  );
};

export default App;
