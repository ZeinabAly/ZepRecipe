import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    // FERMER  LE MENU DES QUE LA FENETRE AUGMENTE
    useEffect(() => {
        const handleResize = () => {
          if (document.body.offsetWidth > 680) {
            setMenuOpen(false);
          }
        };
    
        // Appelle handleResize au montage pour vérifier la taille initiale
        handleResize();
    
        // Ajoute un écouteur d'événement pour redimensionner la fenêtre
        window.addEventListener("resize", handleResize);
    
        // Nettoie l'écouteur d'événement lors du démontage du composant
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    

    
    return (
        <div className="navbar">
            <div className="logo">ZedF<span>oo</span>d</div>
            <div className="navigation-container">
                <div className={menuOpen ? "sidebar" : "navLinks"}>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
                    <NavLink to="/recipes" end className={({ isActive }) => (isActive ? "active-link" : "")}>Recettes</NavLink>
                    {/* <NavLink to="/settings" end className={({ isActive }) => (isActive ? "active-link" : "")}>Settings</NavLink>
                    <NavLink to="/contact" end className={({ isActive }) => (isActive ? "active-link" : "")}>Contact</NavLink>*/}
                </div>
                <div className="utils">
                    {/* <div className="login">Login</div> */}
                    <div className={menuOpen ? "menu menuOpen" : "menu "} onClick={() => setMenuOpen(!menuOpen)}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;