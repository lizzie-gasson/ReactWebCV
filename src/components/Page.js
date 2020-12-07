import React from 'react';
import './ArticleStyles.css';
import ReactDOM from 'react-dom';
//import axios from 'axios';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';
import WorkPage from '../pages/WorkPage';
import ProjectsPage from '../pages/ProjectsPage';




class Page extends React.Component {

    state= { inView : false };

    // getPageInView = () => {
    //     console.log("get page in view");
    //     const pos = ReactDOM.findDOMNode(this).getBoundingClientRect();

    //     if (pos.left > 0 && pos.right < window.innerWidth && this.props.name !== 'space'){
    //         this.setState({ inView: true });
    //         console.log("Active page:", this.props.name)
    //     } else {
    //         this.setState({ inView: false });
    //     }

    // }

    

    scrollToView = () => {
        ReactDOM.findDOMNode(this).scrollIntoView();
        console.log(ReactDOM.findDOMNode(this).getBoundingClientRect().left);
        // this.getPageInView();
    }


    componentDidMount() {
        document.addEventListener('click', this.getPageInView);

        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        const vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

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

    //className={"page " + (this.state.inView ? 'active' : '')} <- class to show active page

    render () {
        return (
            <div onClick={this.scrollToView} className="page "> 
                {this.renderSwitch(this.props.name)}
            </div>
        )
    }
};

export default Page;