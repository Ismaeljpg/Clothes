function NavBar() {
    return(
        <div className="flex border-b-2 border-t-2 border-black justify-between">
            <ul className="inline">
                <li className="mx-7">Hombres</li>
                <li className="mx-7">Mujeres</li>
                <li className="mx-7">Buzos</li>
                <li className="mx-7">Remeras</li>
                <li className="mx-7">Zapatillas</li>
            </ul>
            <div>
            <input type="text" className="bg-gray-200 rounded-md border-2 border-black"/><i className="fa-solid fa-magnifying-glass text-xl"></i>
            </div>
            
        </div>
    )
};

export default NavBar

