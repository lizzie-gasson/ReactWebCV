import React from 'react';
import Page from './Page';

class PageMap extends React.Component {

    render () {
        return (
            <div className="page-map">
                <Page name="landing"/>
                <Page name="about"/>
                <Page name="skills" />
                <Page name="work"/>
                <Page name="projects" />
                {/* <Page id="4" name="space" /> */}
            </div>
   
        )
    }
};

export default PageMap;