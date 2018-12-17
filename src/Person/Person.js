import React from 'react';

const Person = (props) => {
    return (
        <div>
            {/* Le paso una referencia a una función a un stateless component
                para que pueda acceder al estado de un componente que no está
                en su scope. Acá quiero ejecutar un método y cambiar el estado
                de Person, y en vez de convertir a Person en un stateful comp,
                hago que App maneje su estado desde afuera, y le paso la referencia
                a la función que maneja el estado de Person */}
            <h2 onClick={props.click}>Hola, soy {props.nombre} y tengo {props.edad} años</h2>
            <p>{props.children}</p>
            {/* onChange se ejecuta cuando el valor en este input cambia. Es un evento. */}
            <input type="text" onChange={props.changed} />
        </div>
    );
};

export default Person;