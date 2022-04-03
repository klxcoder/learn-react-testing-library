import React from "react";
import "./Counter.css"

function Counter() {
	const [counterValue, setCounterValue] = React.useState(0);
	const [inputValue, setInputValue] = React.useState(1);

	const subtractToCounter = () => {
		setCounterValue(counterValue - inputValue);
	}

	const addToCounter = () => {
		setCounterValue(counterValue + inputValue);
	}

	return (
		<div className="border">
			<h1 data-testid="header">My Counter</h1>
			<h1
				data-testid="counter"
				className={`${counterValue >= 100 ? 'green' : ''}${counterValue <= -100 ? 'red' : ''}`}
			>{counterValue}</h1>
			<button
				data-testid="subtract-btn"
				onClick={subtractToCounter}
			>-</button>
			<input
				data-testid="input"
				className="text-center"
				type="number"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value * 1)}
			/>
			<button
				data-testid="add-btn"
				onClick={addToCounter}
			>+</button>
		</div>
	);
}

export default Counter;
