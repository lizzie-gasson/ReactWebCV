import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import $ from 'jquery';

class PageMap extends React.Component {

    constructor(){
        super();
        window.pageComponent = [];
    }

    componentDidMount() {

        $('.nav-left').addClass('hide-nav');

        $('.page-map').on('scroll', function() {
            if (this.scrollLeft == 0){
                $('.nav-left').addClass('hide-nav');
                $('.nav-right').addClass('landing-nav');
            } else if (this.scrollLeft + this.offsetWidth >= this.scrollWidth - 100) {
                $('.nav-right').addClass('hide-nav');
            } else {
                $('.nav-right, .nav-left').removeClass('hide-nav');
                $('.nav-right').removeClass('landing-nav');
            }

        });
    }

    render () {
        return (
            <div className="page-map-wrapper">
                <div className="page-map">
                    <Page pageType="landing" name="landing" index="0"/>
                    <Page pageType="text" name="projects" index="1" />
                    <Page pageType="image" name="pic4" index="2"/>
                    <Page pageType="text" name="about" index="3"/>
                    <Page pageType="image" name="pic1" index="4"/>
                    <Page pageType="text" name="skills" index="5"/>
                    <Page pageType="image" name="pic2" index="6"/>
                    <Page pageType="text" name="work" index="7"/>
                    <Page pageType="image" name="pic3" index="8"/>
                </div>
            </div>
            
        )
    }
};

export default PageMap;