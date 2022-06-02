import React from "react";

// class ClasePadre extends React.Component {
//   render() {
//     return <h1 style={{color:'white'}}>Hola soy un dinosaurio</h1>
//   }
// }

// export default ClasePadre;

//AHORA CON PROP

class ClasePadreProps extends React.Component {
	render() {
		const { text } = this.props;
		return <h1 style={{ color: "white" }}>{text}</h1>;
	}
}

export default ClasePadreProps;
