import React from "react";
import qrCode from "../assets/expo-go.svg";
import frenchConj from "../assets/conju-app-assets/conj-french.PNG";
import spanishExp from "../assets/conju-app-assets/explanation-spanish.PNG";
import walkthrough from "../assets/conju-app-assets/walkthrough.MP4";
import poster from "../assets/conju-app-assets/home-spanish.PNG";
import "video-react/dist/video-react.css"; // import css
import { Player } from "video-react";
import Tabs, { Tab } from "../components/Tabs";
import HorizontalScroll from "../components/HorizontalScroll";

// https://video-react.js.org/


const ProjectsPage = () => {
	return (
		<div className="article projects">
			<h1>Projects</h1>
			<h2>Development</h2>

			<div className="appSection project-section">
				<div>
					<h3>Conjugation app (in progress)</h3>
					<div className="appDesc">
						<div className="text">
							<p>
								I'm working on a small application using React Native,
								Typescript and Expo. It helps users learn how to conjugate verbs
								in Spanish and French.
							</p>
							<p>
								Use the QR code to try it on your own device using{" "}
								<a
									href="https://expo.dev/@lizzieg"
									target="_blank"
									rel="noopener noreferrer"
								>
									Expo
								</a>
							</p>
						</div>
						<a href="https://expo.dev/@lizzieg/conju-app" target="_blank" rel="noopener noreferrer">
							<img id="expo-qr" src={qrCode} alt="QR code expo" width={250} />
						</a>
						
					</div>
				</div>
				<div className="project-media">
					<div className="mobile-image">
						<div className="media mobile-border" width="100px">
							<Player playsInline poster={poster} src={walkthrough} />
						</div>
					</div>
					<div className="mobile-image">
						<img className="media mobile-border" src={frenchConj} />
						</div>
					<div className="mobile-image">
						<img className="media mobile-border" src={spanishExp} />
					</div>
					
					
				</div>
			</div>

			<h2>Photography and film</h2>

			<div className="card">
				<h3>Bianca's story - Middlemore foundation</h3>
				{/* <div className="biancaVideos"> */}
				<HorizontalScroll>
					<iframe
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmiddlemorefoundation%2Fvideos%2F345363779411831%2F&show_text=false&width=560&t=0"
						scrolling="no"
						frameBorder="0"
						allowFullScreen={true}
						className="videoEmbed"
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					></iframe>

					<iframe
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmiddlemorefoundation%2Fvideos%2F2318327965158874%2F&show_text=false&width=560&t=0"
						scrolling="no"
						frameBorder="0"
						allowFullScreen={true}
						className="videoEmbed"
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					></iframe>

					<iframe
						src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmiddlemorefoundation%2Fvideos%2F426783814761441%2F&show_text=false&width=560&t=0"
						scrolling="no"
						frameBorder="0"
						allowFullScreen={true}
						className="videoEmbed"
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					></iframe>
				</HorizontalScroll>
					
				{/* </div> */}
			</div>

			<h3>Others</h3>

			<Tabs>
				<Tab name="Daikin Healthy Homes">
					<>
						<a target="_blank" rel="noopener noreferrer" href="https://fb.watch/25zRdjkqbW/" > Daikin Healthy Homes video </a>
					</>
				</Tab>
				<Tab name="Glass Temple">
					<>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://glasstemple.co.nz/"
						>
							Glass Temple
						</a>{" "}
						- Check out the home page to see some of my photography!
					</>
				</Tab>
				<Tab name="Young Designer Award">
					<>
						Young Designer Award
						<ul>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://drive.google.com/file/d/1Wz_LeFzj-8aUT5fuA5FYfUs9QnzyNMOP/view?usp=share_link"
								>
									YDA Project 2014
								</a>
							</li>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://drive.google.com/file/d/1qCe-RPNbngV54TCwgjLR2yUq0wmfaDCZ/view?usp=share_link"
								>
									YDA Project 2015
								</a>
							</li>
						</ul>
					</>
				</Tab>
			</Tabs>

			
		</div>
	);
}

export default ProjectsPage;
