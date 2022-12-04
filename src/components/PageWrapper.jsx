import React from "react";
import "./ArticleStyles.css";
import ReactDOM from "react-dom";
import $ from "jquery";

class PageWrapper extends React.Component {
	state = { inView: false };
	setPageInView = () => {
		console.log("Current page", this.props.name);
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
		// add the index to window object
		window.pageComponent[this.props.index] = this;

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		// const vh = window.innerHeight * 0.01;
		// // Then we set the value in the --vh custom property to the root of the document
		// document.documentElement.style.setProperty("--vh", `${vh}px`);

		var thisPage = this;
		thisPage.setPageInView();

		$(".page-map").on("scroll", function () {
			thisPage.setPageInView();
		});
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
				{this.props.children}
			</div>
		);
	}
}

export default PageWrapper;
