import React from "react";

class WorkPage extends React.Component {
	render() {
		return (
			<div id="work" className="article work">
				<h1>Work and Experience</h1>

				<div className="work-tile-container">
					<div className="work-element card">
						<h2>Full Stack Engineer - Milanote</h2>
						<h3>November 2022 - Now</h3>
						<p>
							I am currently working on the{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://milanote.com/"
							>
								Milanote web app
							</a>{" "}
							as a full stack engineer. Here I am using React and javascript day
							to day, and I'm excited to be working on such a visual tool.
						</p>
					</div>

					<div className="work-element card">
						<h2>Developer II - IAG AU</h2>
						<h3>April 2021 - November 2022</h3>
						<p>
							In the first scrum team I spent lots of time working with
							databases using Microsoft SQL Server. In this team I had a large
							input in changing the processes to improve organisation and
							productivity, using my experience from other agile scrum teams.
							This generated good feedback from outside the team. I also put a
							big focus on creating good documentation during this time.In the
							second team I was working on a greenfield project using React,
							Typescript and Redux. In this team I improved my technical skills
							and had lots of input and discussion around the setup of the
							project, the accompanying BFF project, as well as setting up and
							maintaining thelogging which we use to solve issues during work
							and when doing production support.
						</p>
					</div>

					<div className="work-element card">
						<h2>Developer I - IAG NZ</h2>
						<h3>July 2018 - April 2021</h3>
						<p>
							I started working at IAG as a graduate during my final semester of
							study. At IAG in New Zealand I spent my time in scrum teams
							working on quote and buy portals, primarily front end work but I
							also had some involvement with analytics and back end code. During
							my time here I did a reskin of all the projects we worked on
							(home, contents and car for both the AMI and State brands) as I
							have strong css and styling skills. We worked with analytics
							systems such as Tealeaf and VWO, plus Prometheus and Grafana for
							logging. We had a regular formal sprintreview meeting where I
							would present the work that I or the team had done to a number of
							teammates and stakeholders. At IAG I was part of the social club
							during 2019 where we planned events and activities for the digital
							team. I also worked with new graduates and starters helping them
							get up to speed.
						</p>
					</div>

					<div className="work-element card">
						<h2>Content creator</h2>
						<h3>2019 - 2020</h3>
						<p>
							After working as a photographer for many years, I used my skills
							to do a few jobs creating video and photo content for different
							companies. In 2020 I worked with Daikin on their healthy homes
							competition to document the process of the home makeover, and to
							tell the story of the winning family. I took photos and filmed the
							process, using adobe premiere and audition to put the final
							products together. In 2019 I worked with the Middlemore Foundation
							creating photo and video content to be used in social media. I
							worked with a collegue to create a set of videos that told the
							story of a girl who had to go through years of hospital treatment.
						</p>
					</div>

					<div className="work-element card">
						<h2>Sales assistant - Zara</h2>
						<h3>Dec 2016 – July 2018</h3>
						<p>
							At Zara, I worked with a big team of people. I often had to work
							to complete tasks as a group, other times I worked independently,
							always to strict time targets. Quite often I had to decide on my
							own how to complete a task in the most efficient way, or to
							organize and delegate jobs to others. I worked in almost every
							aspect of the store, from customer service on the shop floor, to
							unpacking and processing deliveries in the stockroom.
						</p>
					</div>

					<div className="work-element card">
						<h2>Tutor - MyTuition</h2>
						<h3>June 2016 – Dec 2016</h3>
						<p>
							I tutored AS and IGCSE maths during my first year at university.
							This helped me with my organization skills as I had to prepare
							lessons for the students as well as following up after with
							feedback and helpful study material.
						</p>
					</div>

					<div className="work-element card">
						<h2>Photographer - KJA Photography</h2>
						<h3>2014 – 2017</h3>
						<p>
							As a photographer for KJA I worked at events such as weddings,
							balls and even New Zealand Fashion Week. At smaller events I would
							go by myself to take the photos, at events like balls I worked in
							a team of two or three. Most of the jobs were for events, but I
							also did a few other interesting things like interior design.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default WorkPage;
