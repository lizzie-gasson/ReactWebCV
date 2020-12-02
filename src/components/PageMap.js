import React from 'react';
import Page from './Page';

class PageMap extends React.Component {
    render () {
        return (
            <div className="page-map-wrapper">
                <div className="page-map">
                    <Page id="0" name="about"/>
                    <Page id="1" name="skills" />
                    <Page id="2" name="work"/>
                    <Page id="3" name="projects" />
                    <Page id="4" name="space" />
                </div>
            </div>
            
        )
    }
};

export default PageMap;