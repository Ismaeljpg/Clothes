import './App.css'
import DemoCarousel from './Carrusel.jsx';
import NavBar from './NavBar.jsx';
import Stock from './Productos.jsx';
import './app.js'



function app(){
    return(
        <div>
             <div className="navbar">
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Contacto</li>
                    <li>Cuenta</li>
                </ul>
            </nav>
            <i className="fa-solid fa-bag-shopping" id='cart' onClick={() => {
                cart.classList.toggle('active')
            }}></i>
            <script src="https://kit.fontawesome.com/0fb265836e.js" crossOrigin="anonymous"></script>
            <div className='hidden-cart' id='hidden-cart'>
            
            </div>
        </div>
             <DemoCarousel/>
            <NavBar/>
            <div className='grid'>
                <Stock/>
            </div>
        </div>
        

    )
};

export default app 