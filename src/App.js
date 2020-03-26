import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: this.props.tasks
    }
  }


  render() {
    const tareasIniciales = this.state.task.map((task, index) => {
      return (
        <div className="row p-1" key={index}>
          <div className="col-5 border offset-2">{'# '+task.nombre}</div>
          <div className="col-1 offset-1 border">{task.dateIni}</div>
          <div className="col-1 border">{task.dateFin}</div>
        </div>
      )
    });
    return (
      <div className="conteiner-fluid border rounded m-2">
        <div className='row border-bottom m-0' >
          <div className='col-12 h1 text-center'>Lista de Tareas | Proyecto Marzo 2020</div>
        </div>
        {tareasIniciales}
      </div>
    );
  }
}

export default App;
