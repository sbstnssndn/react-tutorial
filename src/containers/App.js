import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 0, nombre: 'Seba', edad: 27 },
      { id: 1, nombre: 'Magda', edad: 26 }
    ],
    showPersons: false
  } 
  
  deletePersonHandler = (personIndex) => {
    // Si hago const persons = this.state.persons; estoy referenciando el objeto persons original,
    // y esto está mal, porque estaría editando el estado a mano en vez de usar setState. Para evitar
    // eso, creo una copia del estado original usando slice(). Otra opción es usar el spread operator
    // para crear un nuevo array sólo con los elementos del estado original
    // OPCIÓN 1: const persons = this.state.persons.slice();
    // OPCIÓN 2:
    const persons = [...this.state.persons];
    // recordar que los arrays se pasan por referencia, así que no estoy editando una constante,
    // sino que estoy cambiando el puntero
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // el objeto evento es pasado automáticamente por react/js
  nameChangedHandler = (event, id) => {
    // ejecuta findIndex en cada elemento del arry. Verifica si el id de esa persona
    // es igual al id que estoy buscando. La función p devuelve true/false. Si es true,
    // findIndex devuelve el id de la persona que estoy buscando.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // copio el estado actual de la persona que encontré
    const person = { ...this.state.persons[personIndex] };
    // hago que el nombre que se ingrese en el input sea el de la persona que encontré
    // es como un nuevaPersona.setName(nombreEnElForm)
    person.nombre = event.target.value;
    // copio el array de personas y sobreescribo la persona que encontré con
    // la nueva persona, con el nombre cambiado según el input
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // actualizo el estado haciendo algo como persons: newPersons
    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null;
    // esto genera un array que dice "red bold"
    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if(this.state.persons.length <= 1) {
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length <= 0) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                  // React compara el presente con el futuro y renderea sólo lo que ha cambiado
                  // para eso, necesita una key única (index no sirve porque cambia cada vez que
                  // se renderea de nuevo la lista)
                  key = {person.id}
                  click = {() => this.deletePersonHandler(index)}
                  nombre = {person.nombre} 
                  edad = {person.edad }
                  // la función anónima es la que se ejecuta con el evento onChange, así que
                  // ella es la que recibe el objeto event, y luego se le pasa al handler
                  changed = {(event) => this.nameChangedHandler(event, person.id)}
                />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        {/* Así le paso la referencia a una función para que la ejecute al hacer click:
          <button onClick={this.switchNameHandler}>Cambiar nombre</button>*/}
        <button 
          className = {classes.join(' ')}
          onClick = {this.togglePersonsHandler}>Mostrar nombres</button>
        {persons}
      </div>
    );
  }
}

export default App;
