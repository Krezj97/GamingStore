import "../components/NavBar.css";
import CartWidget from "./CartWidget"; 

const Navbar= () => {
    return <div className = "navbar-container">
        <h3 className="nombre_store">420 Gaming Store</h3>
        <button className= "buttons-navbar">Inicio</button>
        <button className= "buttons-navbar">Auriculares</button>
        <button className= "buttons-navbar">Mouses</button>
        <button className= "buttons-navbar">Teclados</button>
        <button className= "buttons-navbar">Mousepads</button>
        <CartWidget/>
    </div>;
};

export default Navbar;