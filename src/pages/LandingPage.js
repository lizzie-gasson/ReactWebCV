import React from "react";

class LandingPage extends React.Component {
	render() {
		return (
			<div id="landling" className="article landing">
				<h1>Hi, I'm Lizzie!</h1>
				<div className="landing-text">
					<p>
						I'm a developer with a passion for front end development and
						gorgeous websites. I created this website to tell a story about me,
						using React.
					</p>
					<p className="mobile-only">
						Scroll <i className="fas fa-long-arrow-alt-right"></i> to find out
						more!
					</p>
				</div>
			</div>
		);
	}
}

export default LandingPage;
