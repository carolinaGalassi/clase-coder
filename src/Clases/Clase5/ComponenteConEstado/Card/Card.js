import React, { useState } from "react";
import "./CardStyle.css";

const CardConEstado = (props) => {
	const { titulo, subtitulo, children } = props;
	const [leida, setLeida] = useState(false);

	return (
		<article className="cardContainer">
			<h2>{titulo}</h2>
			<h4>{subtitulo}</h4>
			{children}
			<button onClick={(e) => (leida ? setLeida(false) : setLeida(true))}>
				{leida ? "Marcar como no leida" : "Marcar como leida"}
			</button>
			{leida && <h5>LEIDA</h5>}
		</article>
	);
};

export default CardConEstado;
