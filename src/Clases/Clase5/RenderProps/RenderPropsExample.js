import Card from "./Card/Card";
import CodeSource from "./CodeSource/CodeSource";
import List from "./List/List";

const dataCard = {
	titulo: "Curso ReactJS",
	subtitulo: "Alumna Carolina",
	entregas: {
		entrega1: "CRA",
		entrega2: "Navbar",
		entrega3: "Boton",
	},
};

const comp = (entregas) => <CodeSource {...entregas} />;

const comp2 = (entregas) => <List {...entregas} />;

export const RenderPropsExample = () => {
	return <Card {...dataCard} render={comp2} />;
};
