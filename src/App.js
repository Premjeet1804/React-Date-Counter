import "./index.css";
import { useState } from "react";
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

// return (
//   <div className="btn">
//     <button onClick={subStep}>-</button>
//     <span> Step : {step} </span>
//     <button onClick={addStep}>+</button>
//   </div>
// );

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  function setState() {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="btn">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span> Step : {step} </span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
          {date.toDateString()}
        </span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={setState}>reset</button>
        </div>
      ) : null}
    </div>
  );
}
export default App;
