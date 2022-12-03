import React from "react";
import "./ArticleStyles.css";
import ReactDOM from "react-dom";
import $ from "jquery";
//import axios from 'axios';
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import WorkPage from "../pages/WorkPage";
import ProjectsPage from "../pages/ProjectsPage";
import Pic1Page from "../pages/Pic1Page";
import Pic2Page from "../pages/Pic2Page";
import Pic3Page from "../pages/Pic3Page";
import Pic4Page from "../pages/Pic4Page";

class Page extends React.Component {
	state = { inView: false };

	setPageInView = () => {
		const pos = ReactDOM.findDOMNode(this).getBoundingClientRect();

		if (pos.left === 0 || (pos.left < 1 && pos.left > -1)) {
			this.setState({ inView: true });
			console.log("set url", this.props.name);
			window.pageComponent.active = this;
		} else {
			this.setState({ inView: false });
		}
	};

	scrollToView = () => {
		ReactDOM.findDOMNode(this).scrollIntoView();
	};

	componentDidMount() {
		window.pageComponent[this.props.index] = this;

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		const vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty("--vh", `${vh}px`);

		var thisPage = this;
		thisPage.setPageInView();

		$(".page-map").on("scroll", function () {
			thisPage.setPageInView();
		});
	}

	renderSwitch(param) {
		switch (param) {
			case "landing":
				return <LandingPage />;
			case "about":
				return <AboutPage />;
			case "skills":
				return <SkillsPage />;
			case "work":
				return <WorkPage />;
			case "projects":
				return <ProjectsPage />;
			case "pic1":
				return <Pic1Page />;
			case "pic2":
				return <Pic2Page />;
			case "pic3":
				return <Pic3Page />;
			case "pic4":
				return <Pic4Page />;
			default:
				return "Page not loaded";
		}
	}

	render() {
		return (
			<div
				className={
					(this.state.inView ? "active " : "") +
					"page page-" +
					this.props.pageType +
					" " +
					this.props.name
				}
			>
				{this.renderSwitch(this.props.name)}
			</div>
		);
	}
}

export default Page;
