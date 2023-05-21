import Productos from "./Productos"

function Stock() {
    {Productos.map((producto, i) => {
        return(
           <>
            <div key={i}>
                <img src={producto.img}/>
                <p>{producto.name}</p>
                <p>{producto.descripcion}</p>
                <span>{producto.precio}</span>
            </div>
           </>
        )
    })}
}

export default Stock