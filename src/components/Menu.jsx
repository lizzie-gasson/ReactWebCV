import React, {Button} from "react";

export const Menu = (menuOpen, setMenuOpen) => {
    return (
            <>
                {menuOpen && (<div>
                    <Button>About</Button>
                    <Button>Skills</Button>
                    <Button>Projects</Button>
                    <Button>Work Experience</Button>
                    <Button onClick={() => {setMenuOpen(false)}}>Close</Button>
                </div>)}
            </>
    )
}

export default Menu