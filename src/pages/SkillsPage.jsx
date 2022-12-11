import React from "react";
import Tabs, { Tab } from "../components/Tabs";

const SkillsPage = () => {

	const other = [
		{
			name: "Photography and video",
			description: "<p>I have loved photography ever since highschool where I found a real passion working on my photography projects in class. I did a lot of photo manipulation and loved experimenting with photoshop to see what I could create. In highschool I was a photographer for the yearbook, and I joined a monthly camera club. I also began working with a friend of mine for KJA Photography where I got experience being a photographer for different events such as corporate parties, weddings, balls, and I even did photography at NZ fashion week. In more recent years I have also enjoyed making videos for companies such as Daikin and the Middlemore foundation, which was great fun and I gained proficiency using adobe premiere and adobe audition</p><p>Some photography awards of mine:</p><ul><li>1st in AS Photography (2014)</li><li>Young designer of the year award 2nd place (2014)</li><li>1st= in A2 Photography (2015)</li><li>Young designer of the year award 2nd place (2015)</li></ul>"
		},
		{
			name: "Agile",
			description: "I have worked in various scrum teams and used the agile methodology on a daily basis. I’ve learned a lot about the processes and meetings that take place, and I have experienced first hand the benefits as well as the challenges that come with it."
		},
		{
			name: "Plua 1 underwriting certification",
			description: "As part of my personal development while I’ve been working at IAG, I took a basic underwriting course so that I could have better industry knowledge about the products that my work helps to sell."
		},
	]

	return (
		<div className="article skills">
			<h1>Skills</h1>

			<h2>Technologies and programming languages</h2>
			<Tabs>
				<Tab name="React">
					<p>
						I spent a few years learning React in my free time, then in 2021 I joined a team at IAG that uses React and since then my skills have continued to improve.
					</p>
				
				</Tab>
				<Tab name="React Native">
					<p>
						I have been learning React Native in my personal development time by working through courses on udemy and creating my own projects outside of work. I'm currently creating a simple language learning app using react native (see my projects section).
					</p>
				</Tab>
				<Tab name='Typescript'>
					<p>
						I started using Typescript in 2021 in one of my teams, and although it seemed like extra work at first, I quickly came to appreciate the assistance it provides you while programming, I continue to use it in my personal projects.
					</p>
				</Tab>
				<Tab name="Javascript">
					<p>
						I have used the language regularly since working at IAG along with libraries and frameworks like JQuery. I also did a course on udemy about javascript to really understand and break down the programming language.
					</p>
				</Tab>
				<Tab name="Styling and css">
					<p>
						I love the visual aspect of web development! Making a page pixel perfect or just a great experience to use really gets me excited and I love a challenge when there’s a satisfying result. From my work experience as well as my personal projects, I have gained experience in problem solving when it comes to CSS (or Less as I tend to use).
					</p>
				</Tab>
			</Tabs>
			
			<h2>Language skills</h2>
			<Tabs>
				<Tab name="English"><p>Native speaker</p></Tab>
				<Tab name="Spanish"><p>B2-C1 - Advanced</p></Tab>
				<Tab name='French'><p>A2-B1 - Low intermediate</p></Tab>
			</Tabs>

			<h2>Other Skills</h2>
			<Tabs>
				<Tab name="Photography and video">
					<p>I have loved photography ever since highschool where I found a real passion working on my photography projects in class. I did a lot of photo manipulation and loved experimenting with photoshop to see what I could create. In highschool I was a photographer for the yearbook, and I joined a monthly camera club. I also began working with a friend of mine for KJA Photography where I got experience being a photographer for different events such as corporate parties, weddings, balls, and I even did photography at NZ fashion week. In more recent years I have also enjoyed making videos for companies such as Daikin and the Middlemore foundation, which was great fun and I gained proficiency using adobe premiere and adobe audition</p><p>Some photography awards of mine:</p><ul><li>1st in AS Photography (2014)</li><li>Young designer of the year award 2nd place (2014)</li><li>1st= in A2 Photography (2015)</li><li>Young designer of the year award 2nd place (2015)</li></ul>
				</Tab>
				<Tab name="Agile">
					<p>
						I have worked in various scrum teams and used the agile methodology on a daily basis. I’ve learned a lot about the processes and meetings that take place, and I have experienced first hand the benefits as well as the challenges that come with it.
					</p>
				</Tab>
				<Tab name='Plua 1 underwriting certification'>
					<p>
						As part of my personal development while I’ve been working at IAG, I took a basic underwriting course so that I could have better industry knowledge about the products that my work helps to sell.
					</p>
				</Tab>
			</Tabs>
			
		</div>
	);
};

export default SkillsPage;
