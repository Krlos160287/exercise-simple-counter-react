import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Counter = props => {
	return (
		<div className="container">
			<div className="first">
				<div className="center"></div>
				<i className="fas fa-clock fa-5x"></i>
			</div>
			<div className="second">
				<div className="center">{props.hundredThousand % 10}</div>
			</div>
			<div className="third">
				<div className="center">{props.tenThousand % 10}</div>
			</div>
			<div className="fourth">
				<div className="center">{props.thousand % 10}</div>
			</div>
			<div className="fifth">
				<div className="center">{props.hundred % 10}</div>
			</div>
			<div className="sixth">
				<div className="center">{props.ten % 10}</div>
			</div>
			<div className="seventh">
				<div className="center">{props.unit % 10}</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	hundredThousand: PropTypes.number,
	tenThousand: PropTypes.number,
	thousand: PropTypes.number,
	hundred: PropTypes.number,
	ten: PropTypes.number,
	unit: PropTypes.number
};

var count = 0;
setInterval(function() {
	const two = Math.floor(count / 1000);
	const three = Math.floor(count / 1000);
	const four = Math.floor(count / 1000);
	const five = Math.floor(count / 100);
	const six = Math.floor(count / 10);
	const seven = Math.floor(count / 1);

	count++;
	ReactDOM.render(
		<Counter
			unit={seven}
			ten={six}
			hundred={five}
			thousand={four}
			tenThousand={three}
			hundredThousand={two}
		/>,
		document.querySelector("#app")
	);
}, 1000);
