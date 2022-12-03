import React from "react";

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
            <>
                {menuOpen && (<div className="nav-menu" onClick={() => setMenuOpen(false)}>
                    <a href='#landing'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#work'>Work Experience</a>
                </div>)}
            </>
    )
}

export default Menu