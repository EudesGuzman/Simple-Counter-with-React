import React, { useState, useEffect } from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
	}, []);

	if (counter == 10) {
		setCounter(0);
		setCounter2(counter2 => counter2 + 1);
	}

	return (
		<div className="container">
			<h1>Counter</h1>
			<div className="target">{counter2}</div>
			<div className="target">{counter}</div>
		</div>
	);
};
