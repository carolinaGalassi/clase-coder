import React from "react";
import "./CodeSourceStyles.css";

// const CodeSource = (props) => {
// 	const { entrega1, entrega2 } = props;

//MISMA FORMA
const CodeSource = ({ entrega1, entrega2 }) => {
	return (
		<article className="list2Container">
			<h4>{entrega1}</h4>
			<button>Ver código</button>
			<h4>{entrega2}</h4>
			<button>Ver código</button>
		</article>
	);
};

export default CodeSource;

/* */
