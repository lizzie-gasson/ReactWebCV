import React from 'react';
import ReactDOM from 'react-dom';
import { FINALINDEX } from '../utils/constants';
import { goToPage } from '../utils/utils';

const Navigation = ({activePage}) => {
    const isFirst = activePage === 0
    const isLast = activePage === FINALINDEX
    const prevPage = () => goToPage(parseInt(activePage) - 1)
    const nextPage = () => goToPage(parseInt(activePage) + 1)
    return (
        <div className="navigation">
            <div onClick={() => prevPage()} className={`nav-left ${isFirst ? `hide` : ``}`} >
                <i className="fas fa-arrow-alt-circle-left"></i>
            </div>
            <div onClick={() => nextPage()} className={`nav-right ${isFirst ? `landing-nav` : ``} ${isLast ? `hide` : ``}`} >
                <i className="fas fa-arrow-alt-circle-right"></i>
            </div>
            
        </div>
        
    )
    
};

export default Navigation;
