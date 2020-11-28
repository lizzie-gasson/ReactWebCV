import React from 'react';
import Page from './Page';

class PageMap extends React.Component {
    render () {
        return (
            <div className="page-map-wrapper">
                <div className="page-map">
                    <Page id="1" title="About me"/>
                    <Page id="2" title="Skills" />
                    <Page id="3" title="Work history"/>
                    <Page id="4" title="Projects" />
                    <Page id="5" title="Skills" />
                    <Page id="6" title="Work history"/>
                    <Page id="7" title="Projects" />
                </div>
            </div>
            
        )
    }
};

export default PageMap;