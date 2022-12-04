import React, { useRef, useEffect, useState } from "react";
import $ from "jquery";

import PageWrapper from "./PageWrapper";
import ImagePage from '../pages/ImagePage'
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import WorkPage from "../pages/WorkPage";
import ProjectsPage from "../pages/ProjectsPage";

import landingImage from '.././assets/photos/IMG_4256.JPG'
import birdImage from '.././assets/photos/DSC_0421.jpg'
import flowerImage from '.././assets/photos/DSC_0286.JPG'
import paperImage from '.././assets/photos/DSC_0752.JPG'
import emmaImage from '.././assets/photos/DSC_0717.jpg'

import { getDomElement } from "../utils/utils";
import { FINALINDEX } from "../utils/constants";

const PageMap = (props) => {
	const {activePage, setActivePage} = props
	const [image, setImage] = useState(landingImage)
	let scrollOffset = 362.5

	const getBackgroundImage = (offsets, scrollPos) => {
		if (scrollPos < offsets[0]) {
			setImage(landingImage)
		} else if (scrollPos > offsets[1] && scrollPos < offsets[3]){
			setImage(birdImage)
		} else if (scrollPos > offsets[3] && scrollPos < offsets[5]){
			setImage(flowerImage)
		} else if (scrollPos > offsets[5] && scrollPos < offsets[7]){
			setImage(paperImage)
		} else if (scrollPos > offsets[7]){
			setImage(emmaImage)
		} else {
			setImage(landingImage)
		}
	}

	const getMatchingElement = (list, scrollPos) => {
		for (let index = 0; index < list.length; index++) {
			const elementOffset = list[index]
			if (scrollPos >= elementOffset - scrollOffset) {
				setActivePage(index)
			}
		}
	}

	const handleScroll = (e) => {
		let offsets = []
		const scrollPos = e.currentTarget.scrollTop
		for (let index = 0; index < FINALINDEX + 1; index++) {
			offsets[index] = getDomElement(index).offsetTop
		}
		getMatchingElement(offsets, scrollPos)
		getBackgroundImage(offsets, scrollPos)
	}

	return (
		<div className="page-map-wrapper">
			<div onScroll={handleScroll} className="page-map" style={{backgroundImage: `url(${image})`}}>
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
	)
}

export default PageMap;
