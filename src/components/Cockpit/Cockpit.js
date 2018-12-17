import React from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
    // esto genera un array que dice "red bold"
    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if(props.persons.length <= 1) {
      classes.push('red'); // classes = ['red']
    }
    if(props.persons.length <= 0) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return(
        <Aux>
            <button 
                className = {classes.join(' ')}
                onClick = {props.clicked}>
                Mostrar nombres
            </button>
            <p>Holaaaaaaaaa</p>
        </Aux>
    );
};

export default Cockpit;