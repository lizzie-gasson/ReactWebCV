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
        ReactDOM.findDOMNode(window.pageComponent[i]).scrollIntoView();
    }

    hoverLeft(e) {
        $('.page.active').addClass("hoverLeft");
    }


    hoverRight(e) {
        $('.page.active').addClass("hoverRight");
    }



    render () {
        return (
            <div className="navigation">
                <div 
                    onClick={this.prevPage} 
                    onMouseEnter={() => $('.page.active').addClass("hoverLeft")}
                    onMouseLeave={() => $('.page.active').removeClass("hoverLeft")}
                    className="nav-left hide"
                ><i className="fas fa-arrow-alt-circle-left"></i></div>
                <div 
                    onClick={this.nextPage} 
                    onMouseEnter={() => $('.page.active').addClass("hoverRight")}
                    onMouseLeave={() => $('.page.active').removeClass("hoverRight")}
                    className="nav-right landing-nav"
                ><i className="fas fa-arrow-alt-circle-right"></i></div>
                
            </div>
            
        )
    }
};

export default Navigation;