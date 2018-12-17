import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 0, nombre: 'Seba', edad: 27 },
      { id: 1, nombre: 'Magda', edad: 26 }
    ],
    showPersons: false,
    toggleClicked: 0
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
    // Si el estado actual depende del estado anterior, se debe usar prevState en una
    // función anónima, para que no haya problemas de paralelismo
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = 
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
        />;
    }

    return (
      <div className="App">
        <Cockpit persons = {this.state.persons} clicked = {this.togglePersonsHandler} showPersons = {this.state.showPersons} />
        {persons}
      </div>
    );
  }
}

export default App;
