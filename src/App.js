import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { nombre: 'Seba', edad: 27 },
      { nombre: 'Magda', edad: 26 }
    ]
  }

  switchNameHandler = (nuevoNombre) => {
    this.setState({
      persons: [
        { nombre: nuevoNombre, edad: 27 }
      ]
    })
  }

  // el objeto evento es pasado automáticamente por react/js
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        // El target de este event es el input (campo de texto) en que escribimos, y obtenemos el valor de dicho input
        { nombre: event.target.value, edad: 27 },
        { nombre: 'Magda', edad: 26 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        {/* Así le paso la referencia a una función para que la ejecute al hacer click:
          <button onClick={this.switchNameHandler}>Cambiar nombre</button>*/}
        {/* Para pasarle un argumento a una función, al botón le paso una función anónima
            que se va a ejecutar al hacerle click a ese botón, y que a su vez, va a ejecutar
            la función switchNameHandler con los parámetros ingresados */}
        <button onClick={() => this.switchNameHandler('Sebita')}>Cambiar nombre</button>
        <Person
          nombre={this.state.persons[0].nombre}
          edad={this.state.persons[0].edad}
          click={this.switchNameHandler.bind(this, 'Sebalino')}
          changed={this.nameChangedHandler}
        >
        Este es un props.children
        </Person>
      </div>
    );
  }
}

export default App;
