import React, { Component } from "react";
import './index.css';

class Membro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: true
    };

    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);

  }

  sair() {
    this.setState({ status: false })
  }

  entrar() {
    this.setState({ status: true })
  }

  render() {
    return (
      <div>
        {/* {this.state.status === 1 && <h1>Bem-Vindo ao sistema!</h1>} */}

        {/* Ou pode-se fazer com o OPERADOR TERNÁRIO */}

        {this.state.status ?
          <div>
            <h2>Bem-vindo ao Sistema</h2>
            <button onClick={this.sair} > Sair do sistema</button>
          </div>
          :
          <div>
            <h2>Olá Visitante, faça o login!</h2>
            <button onClick={this.entrar}>Entra no sistema</button>
          </div>
        }
      </div>

    );
  }
}

export default Membro;


