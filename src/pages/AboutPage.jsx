import React from "react";
import me from "../assets/me.png";

const AboutPage = () => {
	return (
		<div id="about" className="article about">
			<h1>About Me</h1>
			<img
				src={me}
				width={250}
				className="profile-image"
				alt="Lizzie gasson"
			></img>
			<p>
				I am currently working as a Full Stack Engineer for Milanote, I have a
				particular passion for front end development and making a user's
				online experience as simple, efficient and enjoyable as possible. I
				finished studying computer science at the University of Auckland in
				2018, and after that I joined IAG where I have gained lots of
				experience working on web portals, being part of a scrum team, and
				also learning more about the insurance industry. I am always keen to
				learn something new, and I strive to find the best and most efficient
				ways of doing things, both at work and in my personal life.
			</p>

			<p>
				A goal that I have been working towards for the last few years is
				fluency in Spanish. I have been learning it since I finished
				university, and now I am at an advanced level. I cherish any chance to
				make a new connection with someone through language! I also started
				learning french at the beginning of 2021 and I'd say I'm at a low
				intermediate level now.
			</p>
			<p>
				I enjoy photography and video making, I don't do it so often these
				days but I have worked on a few jobs such as weddings and promotional
				videos, and I believe that these skills along with my technical
				programming ability help me to have a good eye for front end
				development and styling websites.
			</p>
		</div>
	);
}

export default AboutPage;
