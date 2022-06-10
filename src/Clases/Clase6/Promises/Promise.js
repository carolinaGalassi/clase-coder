// //LA CREO

// const myPromise = new Promise((resolve, reject) => {
// 	//le pido a la base de datos un array de usuarios y me lo devuelve en arr
// 	var arr = ["Caro", "Cami", "Franco"];

// 	if (arr.length > 0) {
// 		resolve(arr);
// 	} else {
// 		reject("error al obtener los usuarios");
// 	}
// });

// //LA USO
// const [spinner,setSpinner] = useState(false)

// setSpinner(true);
// myPromise
// 	.then((arr) => console.log(arr))
// 	.catch((error) => console.log("muestra el error"))
//   .finally(() => setSpinner(false));
