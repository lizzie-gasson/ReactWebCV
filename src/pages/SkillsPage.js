import React from 'react';

class SkillsPage extends React.Component {

    render () {
        return (
            <div className="skills">
                <h1>Skills</h1>

                <h2>Technologies and programming languages</h2>
                <ul>
                    <li>React</li>
                    <li>Javascript</li>
                </ul>

                <h2>Personal skills</h2>
                <ul>
                    <li>Agile</li>
                    <li>Photography</li>
                </ul>
            </div>
        )
    }
};

export default SkillsPage;