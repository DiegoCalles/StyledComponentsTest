import React, { Component } from "react";


export  class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
      this.sumar = this.sumar.bind(this);
      this.restar = this.restar.bind(this);
  }

  sumar(e) {
      console.log("sumando");
    //   console.log(this)
      this.setState({contador: this.state.contador + 1})
  }
  restar(e) {
      console.log("restando");
      this.setState({contador:this.state.contador - 1})
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>

          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Porperty Initializer
export class EventosES7 extends Component {
  
    
    state = {
      contador: 0,
    };
  

  sumar = (e)=> {
    console.log("sumando");
      console.log(this)
    this.setState({ contador: this.state.contador + 1 });
  }
  restar = (e) => {
    console.log("restando");
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>

          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// componente <Boton> para probar los eventos personalizados
{/* - USé la funcion expresada, destructuración de la prop (MyOnClick) de mi boton para renderizar el evento en el boton
      sin usar el props.MyOnClick, sino, simpleemte el MyOnClick 
    - Acá tambien estoy haciendo que el elemento hijo altere el orden de la comunicación (de padre a hijo / el hijo modifica al
      padre), es decir que a traves de las props modificamos la comunicacion de padre hijo / hijo padre.
*/}
const Boton = ({ MyOnClick }) => {
  
  return (
    <button onClick={MyOnClick}>
      Boton Hecho Componente
    </button>
  );
}

export class MasSobreEventos extends Component{
  handleClick = (e, msg) => {
    console.log(e);
    console.log(e.target)
    console.log(e.nativeEvent)
    console.log(e.nativeEvent.target)
    console.log(msg)
  }

  render(){
    return (
      <div>
        <h2>Más Sobre Eventos</h2>
        <button onClick={(e) => this.handleClick(e, "Hola Mundo desde el JSX")}>
          Saludar
        </button>

        <Boton
          MyOnClick={(e) =>
            this.handleClick(e, "Hola Mundo desde el componente")
          }
        />
      </div>
    );
  }

}