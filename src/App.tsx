import { FC, useState, useEffect } from "react";

import "./App.css";

const App: FC = () => {
  const [text, setText] = useState<string>("Starting...");
  const [speed, setSpeed] = useState<number>(300);
  const [index, setIndex] = useState<number>(1);
  const textContent: string = "I Love Coding!";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(textContent.slice(0, index));
      setIndex(index + 1);
      if (index > textContent.length) {
        setIndex(1);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [index, speed, textContent]);

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(300 / Number(event.target.value));
  };

  return (
    <div className="app">
      <h1 className="text">{text}</h1>
      <div className="controls">
        <label htmlFor="speed">Speed:</label>
        <input
          className="input"
          type="number"
          name="speed"
          id="speed"
          value={300 / speed}
          min={1}
          max={10}
          step={1}
          onChange={handleSpeedChange}
        />
      </div>
    </div>
  );
};

export default App;
