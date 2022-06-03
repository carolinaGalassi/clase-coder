import "./TresDeJunioStyle.css";

/*
COMO ENCARAR UN PROBLEMA
1. Veo la pagina a desarrollar
2. La creo
3. Me fijo ¿Esto es un componente?¿Reutilizo una estructura?
¿Solo varia su informacion?¿Ayuda a la expresividad de mi codigo?
*/

//Pagina con componentes

export const PaginaContainer = () => {
	return (
		<div className="containerPagina">
			<Header />
			<ListOfBlogs />
			<Footer />
		</div>
	);
};

const Header = () => {
	return (
		<header>
			<h1>After de clase</h1>
			<h2>Donde explicamos lo aprendido</h2>
		</header>
	);
};

const ListOfBlogs = () => {
	return (
		<section>
			<BlogArticle
				blogTitle={"Mas Novedades!"}
				infoExtra={
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"
				}
			/>
			<BlogArticle
				blogTitle={"Mas info"}
				infoExtra={
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"
				}
			/>
			<BlogArticle
				blogTitle={"Descuentos!"}
				infoExtra={
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,"
				}
			/>
		</section>
	);
};

const BlogArticle = (props) => {
	const { blogTitle = "Titulo sin especificar", infoExtra } = props;
	return (
		<article>
			<h2>{blogTitle}</h2>
			<p>{infoExtra}</p>
		</article>
	);
};

const Footer = () => {
	return (
		<footer>
			<h5>Contact us</h5>
			<WaysToContact />
		</footer>
	);
};

const WaysToContact = () => {
	return (
		<ul>
			<li>Mandanos un email</li>
			<li>Encontranos en facebook</li>
			<li>Llamanos</li>
		</ul>
	);
};

//Pagina sin componentes

// export const PaginaContainer = () => {
// 	return (
// 		<div className="containerPagina">
// 			<header>
// 				<h1>After de clase</h1>
// 				<h2>Donde explicamos lo aprendidos</h2>
// 			</header>

// 			<section>
// 				<article>
// 					<h2>Mas novedades!</h2>
// 					<p>
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab
// 						magni rerum exercitationem! Placeat id itaque ex. Ullam dolores a
// 						omnis nesciunt optio nostrum praesentium culpa eum, placeat
// 						obcaecati. Consequuntur?
// 					</p>
// 				</article>
// 				<article>
// 					<h2>No te olvides!</h2>
// 					<p>
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab
// 						magni rerum exercitationem! Placeat id itaque ex. Ullam dolores a
// 						omnis nesciunt optio nostrum praesentium culpa eum, placeat
// 						obcaecati. Consequuntur?
// 					</p>
// 				</article>
// 				<article>
// 					<h2>Descuentos!</h2>
// 					<p>
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab
// 						magni rerum exercitationem! Placeat id itaque ex. Ullam dolores a
// 						omnis nesciunt optio nostrum praesentium culpa eum, placeat
// 						obcaecati. Consequuntur?
// 					</p>
// 				</article>
// 			</section>
// 			<footer>
// 				<h5>Contact us</h5>
// 				<ul>
// 					<li>Mandanos un email</li>
// 					<li>Encontranos en facebook</li>
// 					<li>Llamanos</li>
// 				</ul>
// 			</footer>
// 		</div>
// 	);
// };
