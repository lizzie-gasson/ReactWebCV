import React from 'react';

class ProjectsPage extends React.Component {

    render () {
        return (
            <div className="article projects">
                <h1>Projects and Examples of my work</h1>
                 {/* <h2>Development</h2>

                <p>Here is one of my projects learning react and working with APIs. Based on a project from the course <a  target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/react-redux/">Modern React with Redux</a>. I'm planning to use this as a base to experiment with more APIs and create something fun. Try searching something!</p>
                 <div className="iframe-wrap">
                    <iframe className="iframe-zoomed" src="https://reactpics-73174.web.app/"></iframe>
                 </div> */}

                 
                 {/* <div className="iframe-wrap">
                    <iframe className="iframe-zoomed" src="https://lizzie-website.web.app/"></iframe>
                 </div> */}
                 
                <h2>Photography and film</h2>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://fb.watch/25zRdjkqbW/">Daikin video</a>
                    </li>
                    <li>
                        Bianca's story - Middlemore foundation
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://fb.watch/25A4IL1d4F/">Part 1</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://fb.watch/25Ac6det_v/">Part 2</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://fb.watch/25AdKB4ipu/">Part 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="http://glasstemple.co.nz/">Glass Temple</a> - Check out the home page to see some of my photography!
                    </li>
                    <li>
                        Young Designer Award
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1he0yl_5e8Opk03C4REOv6uOZ96baReUL/view?usp=sharing">YDA Project 2014</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1_MUZEaLg-raoCDHoaB9x46hymGsn8h3h/view?usp=sharing">YDA Project 2015</a></li>
                        </ul>
                    </li>
                </ul>

                {/* <div className="iframe-wrap">
                    <iframe className="iframe-zoomed" src="https://denise177.wixsite.com/glasstemplenurseries"></iframe>
                </div> */}
                
            </div>
        )
    }
};

export default ProjectsPage;