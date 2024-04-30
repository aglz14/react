// const array = [];
/*
const Navbar = () => {
  return <h1>Hola</h1>;
};*/

// 1. exportación nombrada
// export const array = [];
// export const Navbar = () => {
//  return <h1>Hola</h1>;
// };

// 2. exportacion por defecto
// export default Navbar
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="container">
      <h1>Navbar</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};
