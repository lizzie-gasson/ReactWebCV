import React from 'react';

class LandingPage extends React.Component {

    render () {
        return (
            <div className="article landing">
                <h1>Hi, I'm Lizzie!</h1>
                <div className="landing-text-wrapper">
                    <div className="picture"></div>
                    <div className="landing-text">
                        <p>I'm a developer with a passion for front end development. I created this website to tell a story about me, using React.</p>
                        <p>Scroll <i className="fas fa-long-arrow-alt-right"></i> <span className="lge-only">or click the arrow <i className="fas fa-arrow-alt-circle-right"></i></span> to find out more!</p>
                    </div>
                </div>
                
                
            </div>
        )
    }
};

export default LandingPage;