import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

    goHome = () => {
        ReactDOM.findDOMNode(window.pageComponent[0]).scrollIntoView();
    }

    render () {
        return (
            <div className="header">
                <span onClick={this.goHome} className="title">Lizzie Gasson</span>

                <div className="contact-links">
                    <a target="_blank" rel="noopener noreferrer" className="link email" href="mailto:lizzie.gasson@gmail.com"></a>
                    <a target="_blank" rel="noopener noreferrer" className="link codepen" href="https://codepen.io/LizzieGasson/"></a>
                    <a target="_blank" rel="noopener noreferrer" className="link github" href="https://github.com/Liz454"></a>
                    <a target="_blank" rel="noopener noreferrer" className="link linkedin" href="https://www.linkedin.com/in/lizziegasson/"></a>
                </div>
            </div>
        )
    }
};

export default Header;