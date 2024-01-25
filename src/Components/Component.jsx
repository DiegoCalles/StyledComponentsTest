import React, { Component } from "react";

//  1. componente desde unaa clase
// class Componente extends Component {
//     render() {
//         return <h2>{ this.props.msg}</h2>
//     }
// }

//2. componente desde una función

function Componente(props) {
    return <h2>{props.msg}</h2>;
}
export default Componente;