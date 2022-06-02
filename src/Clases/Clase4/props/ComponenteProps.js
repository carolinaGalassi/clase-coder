import React from "react";

//Estilo
const containerStyle = {
	width: 300,
	backgroundColor: "white",
	borderRadius: 10,
	margin: "2em",
	padding: "2em",
	display: "flex",
	flexDirection: "column",
	gap: "0.8em",
};

//Componente hijo
const NameComponent = ({ name }) => {
	return (
		<>
			<h1>Nombre de alumno</h1>
			<h5>{name}</h5>
			<button>Click!</button>
		</>
	);
};

//componente padre
export const ComponenteProps = (props) => {
	const { nombre } = props;
	const nombreTxt = `Mi nombre es ${nombre}`;
	return (
		<section style={containerStyle}>
			<NameComponent name={nombreTxt} />
		</section>
	);
};

//USO
//<ComponenteProps nombre="Carolina" />;
