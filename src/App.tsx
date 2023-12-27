import React, { useState } from "react";
import "./App.css";

function App() {
  function generateRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return { r: r, g: g, b: b };
  }

  function diffRGB(r: number, g: number, b: number) {
    const newR = r + Math.floor(Math.random() * 20) + 10;
    const newG = g + Math.floor(Math.random() * 20) + 10;
    const newB = b + Math.floor(Math.random() * 20) + 10;
    return { r: newR, g: newG, b: newB };
  }

  function handleChoice(choice: number) {
    if (choice === randomTile) {
      setRandomColor(generateRGB());
      setScore(score + 1);
    } else {
      setPage("gameover");
    }
  }

  function newGame() {
    setPage("game");
    setRandomColor(generateRGB());
    setScore(0);
  }

  const [randomColor, setRandomColor] = useState(generateRGB());
  const diffColor = diffRGB(randomColor.r, randomColor.g, randomColor.b);
  const randomTile = Math.floor(Math.random() * 4);
  const [score, setScore] = useState(0);
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      {page === "home" && (
        <>
          <header>Color Game</header>
          <button onClick={newGame}>Start</button>
        </>
      )}
      {page === "game" && (
        <>
          <div style={{ height: "100px", margin: "8px" }}>
            <div
              onClick={() => handleChoice(0)}
              className="color-block"
              style={{
                backgroundColor:
                  randomTile !== 0
                    ? `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`
                    : `rgb(${diffColor.r}, ${diffColor.g}, ${diffColor.b})`,
              }}
            ></div>
            <div
              onClick={() => handleChoice(1)}
              className="color-block"
              style={{
                backgroundColor:
                  randomTile !== 1
                    ? `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`
                    : `rgb(${diffColor.r}, ${diffColor.g}, ${diffColor.b})`,
              }}
            ></div>
          </div>
          <div style={{ height: "100px", margin: "8px" }}>
            <div
              onClick={() => handleChoice(2)}
              className="color-block"
              style={{
                backgroundColor:
                  randomTile !== 2
                    ? `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`
                    : `rgb(${diffColor.r}, ${diffColor.g}, ${diffColor.b})`,
              }}
            ></div>
            <div
              onClick={() => handleChoice(3)}
              className="color-block"
              style={{
                backgroundColor:
                  randomTile !== 3
                    ? `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`
                    : `rgb(${diffColor.r}, ${diffColor.g}, ${diffColor.b})`,
              }}
            ></div>
          </div>
        </>
      )}
      {page === "gameover" && (
        <>
          <p>score: {score}</p>
          <button onClick={newGame}>play again</button>
        </>
      )}
    </div>
  );
}

export default App;
