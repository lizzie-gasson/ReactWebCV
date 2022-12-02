import React from "react";
import qrCode from "../assets/expo-go.svg";
import walkthrough from "../assets/conju-app-assets/walkthrough.MP4";
import poster from "../assets/conju-app-assets/home-spanish.PNG";
import "video-react/dist/video-react.css"; // import css
import { Player } from "video-react";

// https://video-react.js.org/

class ProjectsPage extends React.Component {
	render() {
		return (
			<div className="article projects">
				<h1>Projects</h1>
				<h2>Development</h2>

				<div className="appSection card">
					<div className="sectionOne" style={{ marginRight: 15 }}>
						<div style={{ width: 250 }}>
							<Player playsInline poster={poster} src={walkthrough} />
						</div>
					</div>
					<div className="sectionTwo">
						<h3>Conjugation app (in progress)</h3>
						<p>
							I'm working on a small application using React Native, Typescript
							and Expo. It helps users learn how to conjugate verbs in Spanish
							and French.
						</p>
						<p>
							Use the QR code below to try it on your own device using{" "}
							<a
								href="https://expo.dev/@lizzieg"
								target="_blank"
								rel="noopener noreferrer"
							>
								Expo
							</a>
						</p>
						<div style={{ display: "flex", alignContent: "center" }}>
							<img
								id="expo-qr"
								style={{ margin: "auto" }}
								src={qrCode}
								alt="QR code expo"
								width={250}
							/>
						</div>
					</div>
				</div>

				<h2>Photography and film</h2>

				<div className="card">
					<h3>Bianca's story - Middlemore foundation</h3>
					<div className="biancaVideos">
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
					</div>
				</div>

				<h3>Others</h3>
				<div className="card-container">
					<div className="card">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://fb.watch/25zRdjkqbW/"
						>
							Daikin Healthy Homes video
						</a>
					</div>
					<div className="card">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://glasstemple.co.nz/"
						>
							Glass Temple
						</a>{" "}
						- Check out the home page to see some of my photography!
					</div>
					<div className="card">
						Young Designer Award
						<ul>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://drive.google.com/file/d/1he0yl_5e8Opk03C4REOv6uOZ96baReUL/view?usp=sharing"
								>
									YDA Project 2014
								</a>
							</li>
							<li>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://drive.google.com/file/d/1_MUZEaLg-raoCDHoaB9x46hymGsn8h3h/view?usp=sharing"
								>
									YDA Project 2015
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectsPage;
