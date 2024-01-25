import React, { Component } from "react";

function LogIn(props) {
    return (
        <div>
            <h3>Login</h3>
        </div>
    );
    
    
}

function LogOut(props) {
    return (
        <div>
            <h3> LogOut </h3>

        </div>
    );
}

export default class RenderizadoCondicional extends Component {
    constructor(props) {
        super();
        this.state = {
            session:false,
        }
    }
    render() {
        return (
          <div>
            <h2>Renderizado Condicional</h2>
            {this.state.session ? <LogIn /> : <LogOut />}
          </div>
        );

    }
}