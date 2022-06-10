import React from "react";
import "./CodeSourceStyles.css";

const entregas = [
	{ id: "ffx", titulo: "Entrega 1", aprobadas: false },
	{ id: "ffd", titulo: "Entrega 2", aprobadas: false },
	{ id: "ff4", titulo: "Entrega 3", aprobadas: false },
	{ id: "ffx", titulo: "Entrega 1", aprobadas: true },
	{ id: "ffd", titulo: "Entrega 2", aprobadas: false },
	{ id: "ff4", titulo: "Entrega 8", aprobadas: false },
	{ id: "ffx", titulo: "Entrega 8", aprobadas: false },
	{ id: "ffd", titulo: "Entrega 7", aprobadas: true },
	{ id: "ff4", titulo: "Entrega 5", aprobadas: false },
];

export const CodeSource = () => {
	return (
		<article className="codeSourceListContainer">
			{entregas
				.filter((entrega) => entrega.aprobadas)
				.map((entrega) => (
					<EntregarEntrega key={entrega.id} {...entrega} />
				))}
		</article>
	);
};

//SINO TUVIER MAP
// export const CodeSource = () => {
// 	return (
// 		<article className="codeSourceListContainer">
// <EntregarEntrega key={entrega.id}/>
// <EntregarEntrega key={entrega.id}/>
// <EntregarEntrega key={entrega.id}/>
// <EntregarEntrega key={entrega.id}/>
// <EntregarEntrega key={entrega.id}/>
// <EntregarEntrega key={entrega.id}/>
// <EntregarEntrega key={entrega.id}/>
// <EntregarEntrega key={entrega.id}/>
// <EntregarEntrega key={entrega.id}/>
// 		</article>
// 	);
// };

//TIP: ETIQUETA O FRAGMENT, dependen de muchas cosas!
//no hay regla quemada al fuego
//evaluar semantica, estilado
const EntregarEntrega = ({ titulo }) => {
	return (
		<>
			<h5>{titulo}</h5>
			<button>Ver</button>
		</>
	);
};
