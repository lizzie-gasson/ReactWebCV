import React from 'react';
import Page from './Page';

class PageMap extends React.Component {

    render () {
        return (
            <div className="page-map-wrapper">
                <div className="page-map">
                    <Page name="about"/>
                    <Page name="pic1"/>
                    <Page name="skills" />
                    <Page name="pic2"/>
                    <Page name="work"/>
                    <Page name="pic3"/>
                    <Page name="projects" />
                    <Page name="pic4"/>
                </div>
            </div>
            
        )
    }
};

export default PageMap;