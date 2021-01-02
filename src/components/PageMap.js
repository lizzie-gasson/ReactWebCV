import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';

class PageMap extends React.Component {

    scrollToPage = () => {
        console.log('scroll to page called');
        ReactDOM.findDOMNode(this).scrollIntoView();
    }

    render () {
        return (
            <div className="page-map-wrapper">
                <div className="page-map">
                    <Page pageType="text" onClick={this.scrollToPage} scrollToPage={this.scrollToPage} name="about"/>
                    <Page pageType="image" scrollToPage={this.scrollToPage} name="pic1"/>
                    <Page pageType="text" scrollToPage={this.scrollToPage} name="skills" />
                    <Page pageType="image" name="pic2"/>
                    <Page pageType="text" name="work"/>
                    <Page pageType="image" name="pic3"/>
                    <Page pageType="text" name="projects" />
                    <Page pageType="image" name="pic4"/>
                </div>
            </div>
            
        )
    }
};

export default PageMap;