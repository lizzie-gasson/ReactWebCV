import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import $ from 'jquery';

class PageMap extends React.Component {

    scrollToPage = () => {
        console.log('scroll to page called');
        ReactDOM.findDOMNode(this).scrollIntoView();
    }
    constructor(){
        super();
        window.pageComponent = [];
        console.log(window);
    }

    componentDidMount() {
        
    }

    render () {
        return (
            <div className="page-map-wrapper">
                <div className="page-map">
                    <Page pageType="text" name="about" index="0"/>
                    <Page pageType="image" name="pic1" index="1"/>
                    <Page pageType="text" name="skills" index="2"/>
                    <Page pageType="image" name="pic2" index="3"/>
                    <Page pageType="text" name="work" index="4"/>
                    <Page pageType="image" name="pic3" index="5"/>
                    <Page pageType="text" name="projects" index="6" />
                    <Page pageType="image" name="pic4" index="7"/>
                </div>
            </div>
            
        )
    }
};

export default PageMap;