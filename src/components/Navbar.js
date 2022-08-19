import React from "react";

const Navbar = () => {
    const logoImg = "https://www.logosurfer.com/wp-content/uploads/2018/03/pokemon-logo_0.png" ;
    return (
        <nav>
            <div>
                <img alt="pokemon-logo" src={logoImg} className="navbar-img"/>
            </div>
        </nav>
    )
}

export default Navbar
