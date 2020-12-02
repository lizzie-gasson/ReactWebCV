import React from 'react';
import './ArticleStyles.css';
//import axios from 'axios';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';
import WorkPage from '../pages/WorkPage';
import ProjectsPage from '../pages/ProjectsPage';




class Page extends React.Component {

    state= { title : '', content: ''};

    // componentDidMount() {
    //     axios.get('content.json').then(res => {
    //         const thispagecontent = res.data[0].pageContent[this.props.id];
    //         this.setState({title: thispagecontent.title, content: thispagecontent.content});
    //     })
    // };

    renderSwitch(param) {
        switch(param) {
          case 'about':
            return <AboutPage />;
        case 'skills':
            return <SkillsPage />;
        case 'work':
            return <WorkPage />;
        case 'projects':
            return <ProjectsPage />;
        case 'space':
            return '';
        default:
            return 'Page not loaded';
        }
      }


    render () {
        return (
            <div className="page">
                {this.renderSwitch(this.props.name)}
            </div>
        )
    }
};

export default Page;