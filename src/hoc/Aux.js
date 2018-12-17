/* Si envuelvo varios elementos dentro de este componente, no debo crear 
    otro elemento HTML, como un div, para renderear múltiples elementos
    en un componente. Esto sirve si el estilo se rompe al crear un nuevo
    div o algo así (ejemplo: flexbox?) */
const Aux = (props) => props.children;

export default Aux;