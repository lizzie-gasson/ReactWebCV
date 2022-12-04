import React from "react";
import { goToPage } from "../utils/utils";

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
            <>
                {menuOpen && (<div className="nav-menu" onClick={() => setMenuOpen(false)}>
                    <button onClick={() => goToPage(0)}>Home</button>
                    <button onClick={() => goToPage(1)}>About</button>
                    <button onClick={() => goToPage(3)}>Projects</button>
                    <button onClick={() => goToPage(5)}>Skills</button>
                    <button onClick={() => goToPage(7)}>Work Experience</button>
                </div>)}
            </>
    )
}

export default Menu