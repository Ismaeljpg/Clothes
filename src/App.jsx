import './App.css'
import DemoCarousel from './Carrusel.jsx';
import NavBar from './NavBar.jsx';
import Productos from './Productos';
import Stock from './Productos.jsx';
import login from './login';
import { useState, useEffect } from 'react';



function App() {
  const allCategories = [
    'All',
    ...new Set(Productos.flatMap((producto) => producto.categoria)),
  ];

  const [categoria, setCategorias] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterCategory = (category) => {
    setSelectedCategory(category);
  };

  const [isActive, setIsActive] = useState(false);
  const [carrito, setCarrito] = useState([]);


  const addToCart = (id) => {
    let nuevoProducto = Productos.find((producto) => producto.id === id);
    setCarrito([...carrito, nuevoProducto]);
  };



  const removeFromCart = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  const handleClassChange = (e) => {
    const carta = e.target.value
    setCarrito(carta);
  };
    
 
 
  useEffect(() => {
    const savedProductos = localStorage.getItem('productos');
      if (savedProductos) {
    setCarrito(JSON.parse(savedProductos));
      }
    }, []);

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(carrito));
  }, [carrito]);

  

  const filteredProductos =
    selectedCategory === 'All'
      ? Productos
      : Productos.filter((producto) =>
          producto.categoria.includes(selectedCategory)
        );

  return (
    <div>
      <div className="navbar">
        <nav>
          <ul>
            <li>inicio</li>
            <li>Contacto</li>
            <li><a href="./"></a></li>
          </ul>
        </nav>
        <button onClick={() => setIsActive(!isActive)}>
          <img src="../SVG/bag-shopping-solid.svg" className="w-6" alt="" />
        </button>
        <div onChange={handleClassChange} className={`hidden-cart ${isActive ? 'active' : ''}`}>
          {carrito.map((producto, index) => {
            return (
              <div className="cart" key={`${producto.id}-${index}`}>
                <img src={producto.img} alt="" />
                <div className="">
                  <h3>{producto.name}</h3>
                  <div></div>
                  <div className="cart-product">
                    <h3 className="text-4xl">{producto.precio}</h3>
                    <button onClick={() => removeFromCart(producto.id)}>
                      <img
                        className="icon"
                        src="../SVG/trash-solid.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <DemoCarousel />
      <NavBar
        categorias={categoria}
        selectedCategory={selectedCategory}
        filterCategory={filterCategory}
        Productos={Productos}
      />
      <Stock productos={Productos} filteredProductos={filteredProductos} addToCart={addToCart}/>
    </div>
  );
}

export default App;