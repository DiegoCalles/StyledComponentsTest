import React, { Component } from "react";
export class Reloj extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }
  componentWillUnmount() {
    // console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}
export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, " se inicializa, aun no está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
    };
    this.temporizador = null;
  }
  componentDidMount() {
    // console.log(1, " el componente ya se encuentra en el DOM");
  }
  
  componentDidUpdate(prevProps, prevState) {
        // console.log(2, "el estado o las props han cambiado");
        // console.log(prevProps)
        // console.log(prevState);
  }

  

  tictac = (e) => {
    this.temporizador = setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  };

  start = () => {
    this.tictac();
    this.setState({visible:true})
  };

  stop = () => {
    clearInterval(this.temporizador);
    this.setState({visible:false})
  };

  render() {
    // console.log(
    //   4,
    //   "El componente se dibuja o redibuja por un cambio en el DOM"
    // );
    return (
      <>
        <h2>Ciclo de Vida de los Componentes de clase</h2>
        {this.state.visible &&<Reloj hora={this.state.hora} />}
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
      </>
    );
  }
}