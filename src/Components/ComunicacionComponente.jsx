import React, { Component } from "react";


export default class Padre extends Component{

    state = {
    contador : 0,
    }

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    render() {
        return (
            <div>
                <h2>Comunicación Entre Componentes</h2>
                <p><b>{ this.state.contador}</b></p>
                <Hijo contador={this.incrementarContador} mensaje = "Mensaje para Hijo 1"/>
            </div>
        )
    }


}

function Hijo(props){
    return (
      <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.contador}>+</button>
      </>
    );
}

