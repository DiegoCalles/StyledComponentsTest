import React, { Component } from "react";

function EstadoAHijo(props){
    return (
        <dir>
            <h3>{props.contadorHijo}</h3>
        </dir>
    );
}

export default class Estado extends Component{
    constructor(props) {
        super();
        this.state = {
            contador: 0,
        }

        // setInterval(() => {
        //     this.setState({
        //         contador: this.state.contador+1
        //     })
        // }, 1000)
    }

    render() {
        return (
          <div>
            <h2>El State</h2>
            <h3>{this.state.contador}</h3>

            <EstadoAHijo contadorHijo={this.state.contador} />
          </div>
        );
    }
}

