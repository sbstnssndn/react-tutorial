import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
    return(
        props.persons.map((person, index) => {
            return (
                <Person 
                key = {person.id}
                click = {() => props.clicked(index)}
                nombre = {person.nombre} 
                edad = {person.edad }
                changed = {(event) => props.changed(event, person.id)}
                />
            );
        })
    );
}

export default Persons;