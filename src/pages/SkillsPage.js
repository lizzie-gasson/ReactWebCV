import React from 'react';

class SkillsPage extends React.Component {

    render () {
        return (
            <div className="article skills">
                <h1>Skills</h1>

                <h2>Technologies and programming languages</h2>
                
                <div className="text-group">
                    <h3>React</h3>
                    <p>I have been learning React in my personal development time by working through courses on udemy and creating my own projects outside of work. I love how it can be very organized and component based, and I’d really like to use it more in my work.
                    </p>
                </div>
                

                <div className="text-group">
                    <h3>Javascript</h3>
                    <p>As I am most passionate about front end work, I feel most comfortable using javascript. I have used the language regularly since working at IAG along with libraries and frameworks like JQuery. I also did a course on udemy about javascript to really understand and break down the programming language.
                    </p>
                </div>
                

                <div className="text-group">
                    <h3>CSS/Less</h3>
                    <p>I love the visual aspect of web development! Making a page pixel perfect or just a great experience to use really gets me excited and I love a challenge when there’s a satisfying result. From my work experience as well as my personal projects, I have gained experience in problem solving when it comes to CSS (or Less as I tend to use).</p>
                </div>
                

                <h2>Other Skills</h2>

                <div className="text-group">
                    <h3>Photography and video</h3>
                    <p>I have loved photography ever since highschool where I found a real passion working on my photography projects in class. I did a lot of photo manipulation and loved experimenting with photoshop to see what I could create. In highschool I was a photographer for the yearbook, and I joined a monthly camera club. I also began working with a friend of mine for KJA Photography where I got experience being a photographer for different events such as corporate parties, weddings, balls, and I even did photography at NZ fashion week. In more recent years I have also enjoyed making videos for companies such as Daikin and the Middlemore foundation, which was great fun and I gained proficiency using adobe premiere and adobe audition. 
                    </p>

                    <p>Some photography awards of mine:</p>
                    <ul>
                        <li>1st in AS Photography (2014)</li>
                        <li>Young designer of the year award 2nd place (2014)</li>
                        <li>1st= in A2 Photography (2015)</li>
                        <li>Young designer of the year award 2nd place (2015)</li>
                    </ul>
                </div>
                

                <div className="text-group">
                    <h3>Agile</h3>
                    <p>I work in a scrum team and use the agile methodology on a daily basis. I’ve learned a lot about the processes and meetings that take place, and I have experienced first hand the benefits as well as the challenges that come with it.</p>
                </div>
                

                <div className="text-group">
                    <h3>Plua 1 underwriting certification</h3>
                    <p>As part of my personal development while I’ve been working at IAG, I took a basic underwriting course so that I could have better industry knowledge about the products that my work helps to sell.</p>
                </div>
                

            </div>
        )
    }
};

export default SkillsPage;