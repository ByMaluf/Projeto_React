import React, { Component } from "react";
import "./index.css";

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      error: "",
    };

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(e) {
    e.preventDefault();
    const { nome, email, senha } = this.state;

    nome == "" || email == "" || senha == ""
      ? this.setState({error: 'Ops! Parece que está faltando algo!'})
      : alert(` Nome ${nome} \n Email: ${email} \n Senha ${senha}`);
  }

  render() {
    return (
      <div>
        <h1>Novo Usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input
            type="text"
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          <label>Senha:</label>
          <input
            type="password"
            value={this.state.senhas}
            onChange={(e) => this.setState({ senha: e.target.value })}
          />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default Membro;
