import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
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

const PageMap = ({activePage, setActivePage}) => {
	const [scrollOffset, setScrollOffset] = useState(0)
	const [pageMapStyle, setPageMapStyle] = useState({
		backgroundImage: `url(${landingImage})`,
		backgroundPosition: '35% 20%'
	})

	const getBackgroundImage = (offsets, scrollPos) => {
		if (scrollPos < offsets[0]) {
			setPageMapStyle({
				backgroundImage: `url(${landingImage})`,
				backgroundPosition: '35% 45%'
			})
		} else if (scrollPos > offsets[1] && scrollPos < offsets[3]){
			setPageMapStyle({
				backgroundImage: `url(${birdImage})`,
				backgroundPosition: '35% 47%'
			})
		} else if (scrollPos > offsets[3] && scrollPos < offsets[5]){
			setPageMapStyle({
				backgroundImage: `url(${flowerImage})`,
				backgroundPosition: '35% 22%'
			})
		} else if (scrollPos > offsets[5] && scrollPos < offsets[7]){
			setPageMapStyle({
				backgroundImage: `url(${paperImage})`,
				backgroundPosition: '35% 10%'
			})
		} else if (scrollPos > offsets[7]){
			setPageMapStyle({
				backgroundImage: `url(${emmaImage})`,
				backgroundPosition: '35% 20%'
			})
		} else {
			setPageMapStyle({
				backgroundImage: `url(${landingImage})`,
				backgroundPosition: '35% 45%'
			})
		}
	}

	const getMatchingElement = (pagePositionList, scrollPos) => {
		for (let index = 0; index < pagePositionList.length; index++) {
			const elementOffset = pagePositionList[index]
			if (scrollPos >= elementOffset + scrollOffset) {
				setActivePage(index)
			}
		}
	}

	const getOffset = () => {
		setScrollOffset(document.getElementsByClassName(`index-0`)[0].offsetLeft)
	}

	const handleScroll = (e) => {
		let pagePositionList = []
		const scrollPos = e.currentTarget.scrollTop
		for (let index = 0; index < FINALINDEX + 1; index++) {
			pagePositionList[index] = getDomElement(index).offsetTop + scrollOffset
		}
		getMatchingElement(pagePositionList, scrollPos)
		getBackgroundImage(pagePositionList, scrollPos)
		getOffset()
	}

	useEffect(() => {
		getOffset()
	},[]);

	return (
		<div className="page-map-wrapper">
			<div onScroll={handleScroll} className="page-map" style={pageMapStyle}>
				<PageWrapper pageType="landing" name="landing" index="0">
					<LandingPage />
				</PageWrapper>
				<PageWrapper pageType="text" name="about" index="1">
					<AboutPage />
				</PageWrapper>
				<PageWrapper pageType="image" name="pic1" index="2">
					<ImagePage index="2" />
				</PageWrapper>
				<PageWrapper pageType="text" name="projects" index="3">
					<ProjectsPage />
				</PageWrapper>
				<PageWrapper pageType="image" name="pic3" index="4">
					<ImagePage index="4" />
				</PageWrapper>
				<PageWrapper pageType="text" name="skills" index="5">
					<SkillsPage />
				</PageWrapper>
				<PageWrapper pageType="image" name="pic2" index="6">
					<ImagePage index="6" />
				</PageWrapper>
				<PageWrapper pageType="text" name="work" index="7">
					<WorkPage />
				</PageWrapper>
				<PageWrapper pageType="image" name="pic4" index="8">
					<ImagePage index="8" />
				</PageWrapper>
			</div>
		</div>
	)
}

export default PageMap;
