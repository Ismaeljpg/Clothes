function NavBar() {
    return(
        <div className="flex bg-black text-white justify-between">
            <ul className="inline">
                <li className="mx-7">Hombres</li>
                <li className="mx-7">Mujeres</li>
                <li className="mx-7">Buzos</li>
                <li className="mx-7">Remeras</li>
                <li className="mx-7">Zapatillas</li>
            </ul>
            <div>
            <input type="text" className=" rounded-md border-2 border-black"/><i className="fa-solid fa-magnifying-glass text-xl"></i>
            </div>
            
        </div>
    )
};

export default NavBar

