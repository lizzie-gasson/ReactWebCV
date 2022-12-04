import React from "react";
import $ from "jquery";

import PageWrapper from "./PageWrapper";
import ImagePage from '../pages/ImagePage'
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import WorkPage from "../pages/WorkPage";
import ProjectsPage from "../pages/ProjectsPage";

class PageMap extends React.Component {
	constructor() {
		super();
		window.pageComponent = [];
	}

	componentDidMount() {
		$(".nav-left").addClass("hide-nav");

		// Navigation
		$(".page-map").on("scroll", function () {
			const halfView = $(window).width() / 2;
			if (this.scrollTop < halfView) {
				// at the start
				// from 0 to half way through the first page show the animation
				// and hide left button
				$(".nav-left").addClass("hide-nav");
				$(".nav-right").addClass("landing-nav");
			} else if (
				this.scrollTop + this.offsetHeight >=
				this.scrollHeight - halfView
			) {
				// Hide right nav on last page
				$(".nav-right").addClass("hide-nav");
			} else {
				// anywhere else on the site
				$(".nav-right, .nav-left").removeClass("hide-nav");
				$(".nav-right").removeClass("landing-nav");
			}
		});
	}

	render() {
		return (
			<div className="page-map-wrapper">
				<div className="page-map">
					<PageWrapper pageType="landing" name="landing" index="0">
						<LandingPage />
					</PageWrapper>
					<PageWrapper pageType="text" name="about" index="1">
						<AboutPage />
					</PageWrapper>
					<PageWrapper pageType="image" name="pic1" index="2">
						<ImagePage name="pic1" index="2" />
					</PageWrapper>
					<PageWrapper pageType="text" name="projects" index="3">
						<ProjectsPage />
					</PageWrapper>
					<PageWrapper pageType="image" name="pic3" index="4">
						<ImagePage name="pic3" index="4" />
					</PageWrapper>
					<PageWrapper pageType="text" name="skills" index="5">
						<SkillsPage />
					</PageWrapper>
					<PageWrapper pageType="image" name="pic2" index="6">
						<ImagePage name="pic2" index="6" />
					</PageWrapper>
					<PageWrapper pageType="text" name="work" index="7">
						<WorkPage />
					</PageWrapper>
					<PageWrapper pageType="image" name="pic4" index="8">
						<ImagePage name="pic4" index="8" />
					</PageWrapper>
				</div>
			</div>
		);
	}
}

export default PageMap;
