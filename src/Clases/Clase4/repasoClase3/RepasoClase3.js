export const RepasoClase3 = () => {
	return <Padre />;
};

//CASO 1

const Padre = () => {
	return (
		<section>
			<h1>Titulo</h1>
			<Parrafos />
		</section>
	);
};

const Parrafos = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
			<p>Parrafo 1</p>
			<p>Parrafo 2</p>
			<p>Parrafo 3</p>
		</div>
	);
};

//CASO 2

// const Padre = () => {
// 	return (
// 		<section>
// 			<h1>Titulo</h1>
// 			<div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
// 				<Parrafos />
// 			</div>
// 		</section>
// 	);
// };

// const Parrafos = () => {
// 	return (
// 		<>
// 			<p>Parrafo 1</p>
// 			<p>Parrafo 2</p>
// 			<p>Parrafo 3</p>
// 		</>
// 	);
// };
