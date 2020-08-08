import React, { useState, useEffect } from "react";
import "../../styles/home.scss";

export const Demo = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
	}, []);

	return (
		<div className="container">
			<h1>Counter</h1>
			<div className="target">{counter.toString()[counter.toString().length - 3] || 0}</div>
			<div className="target">{counter.toString()[counter.toString().length - 2] || 0}</div>
			<div className="target">{counter.toString()[counter.toString().length - 1] || 0}</div>
			{console.log(counter.toString()[counter.toString().length - 1])}
		</div>
	);
};
