import React from 'react';

class Header extends React.Component {

    render () {
        return (
            <div className="header">
                <span className="title">Lizzie Gasson</span>

                <div className="contact-links">
                    <a target="_blank" rel="noopener noreferrer" class="link email" href="mailto:lizzie.gasson@gmail.com"></a>
                    <a target="_blank" rel="noopener noreferrer" class="link codepen" href="https://codepen.io/LizzieGasson/"></a>
                    <a target="_blank" rel="noopener noreferrer" class="link github" href="https://github.com/Liz454"></a>
                    <a target="_blank" rel="noopener noreferrer" class="link linkedin" href="https://www.linkedin.com/in/lizziegasson/"></a>
                </div>
            </div>
        )
    }
};

export default Header;