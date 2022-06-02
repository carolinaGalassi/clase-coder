import React from "react";
import { Card } from "./Card/Card";
import { CodeSource } from "./CodeSource/CodeSource";
import { List } from "./List/List";

const styleContainer = { height: "100%", display: "flex" };

export const Children = () => {
	return (
		<section style={styleContainer}>
			<Card titulo="Titulo" subtitulo="Una tarea ardua">
				<CodeSource />
			</Card>
			<Card titulo="Titulo" subtitulo="Una tarea ardua">
				<List />
			</Card>
		</section>
	);
};
