import React, { useState } from "react";
import "./CounterDateStyle.css";

// export const CounterDate = (props) => {
// 	const [count, setCount] = useState(0);
// 	const [dateAndHour, setDateAndHour] = useState();

// 	const handleChange = () => {
// 		setCount(count + 1);
// 		setDateAndHour(new Date().toLocaleString());
// 	};

// 	return (
// 		<div className="container">
// 			<h4>{`Hiciste click unas ${count} veces`}</h4>
// 			{dateAndHour && <h5>{dateAndHour}</h5>}
// 			<button onClick={(e) => handleChange()}>Click!</button>
// 		</div>
// 	);
// };

//Una mejor solucion....
export const CounterDate = (props) => {
	const [count, setCount] = useState(0);

	const handleChange = () => {
		setCount(count + 1);
	};
	return (
		<div className="container">
			<h4>{`Hiciste click unas ${count} veces`}</h4>
			{count && <h5>{new Date().toLocaleString()}</h5>}
			<button onClick={(e) => handleChange()}>Click!</button>
		</div>
	);
};
