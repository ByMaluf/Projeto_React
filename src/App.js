import React, { Component } from "react";
import "./index.css";

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      sexo: "",
    };

    this.trocaEmail = this.trocaEmail.bind(this);
  }

  trocaEmail(e) {
    let valorDigitado = e.target.value;
    this.setState({ email: valorDigitado });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Email:
        <input
          type="email"
          name="senha"
          value={this.state.email}
          onChange={this.trocaEmail}
        />{" "}
        <br />
        Senha:
        <input
          type="password"
          name="senha"
          value={this.state.senha}
          // Desta vez faremos do jeito inline
          onChange={(e) => this.setState({ senha: e.target.value })}
        />
        <br />
        Sexo:
        <select
          name="sexo"
          value={this.state.sexo}
          // Desta vez faremos do jeito inline
          onChange={(e) => this.setState({ sexo: e.target.value })}
        >
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outros">Outros</option>
        </select>
        {/* Visualizar as mudanças conforme altaração no formulário */}
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </div>
    );
  }
}

export default Membro;
