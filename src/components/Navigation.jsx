import React from 'react';
import $ from 'jquery';
import PageMap from './PageMap';
import ReactDOM from 'react-dom';

class Navigation extends React.Component {
    
    prevPage = () => {
        var page = parseInt(window.pageComponent.active.props.index);
        if (page > 0) {
            this.goToPage(page - 1);
        }
    }

    nextPage = () => {
        var page = parseInt(window.pageComponent.active.props.index);
        if (page < window.pageComponent.length - 1){
            this.goToPage(page + 1);
        }
    }

    goToPage(page) {
        var i = window.pageComponent[page].props.index;
        ReactDOM.findDOMNode(window.pageComponent[i]).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

    render () {
        return (
            <div className="navigation">
                <div onClick={this.prevPage} className="nav-left hide" >
                    <i className="fas fa-arrow-alt-circle-left"></i>
                </div>
                <div onClick={this.nextPage} className="nav-right landing-nav" >
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
                
            </div>
            
        )
    }
};

export default Navigation;
