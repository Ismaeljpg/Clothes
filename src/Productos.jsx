import Productos from "./Productos";
import './Productos.css'

function Stock() {
  return (
    <>
      {Productos.map((producto, i) => {
        return (
          <div className="flex">
            <div className="container" key={i}>
              <img className="imagen" src={producto.img} />
              <p className="name">{producto.name}</p>
              <p className="descripcion">{producto.descripcion}</p>
              <div className="BT">
              <span className="precio">{producto.precio}</span>
              <button className="button" id="button">AGREGAR AL CARRITO</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Stock;
