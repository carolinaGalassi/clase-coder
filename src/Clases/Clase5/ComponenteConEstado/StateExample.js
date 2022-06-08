import React from "react";
import { CodeSource } from "./CodeSource/CodeSource";
import CardConEstado from "./Card/Card";

export const StateExample = (props) => {
	return (
		<CardConEstado titulo="Tarea react" subtitulo="un subtitulo">
			<CodeSource />
		</CardConEstado>
	);
};
