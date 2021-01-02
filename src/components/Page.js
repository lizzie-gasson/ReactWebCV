import React from 'react';
import './ArticleStyles.css';
import ReactDOM from 'react-dom';
//import axios from 'axios';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';
import WorkPage from '../pages/WorkPage';
import ProjectsPage from '../pages/ProjectsPage';
import Pic1Page from '../pages/Pic1Page';
import Pic2Page from '../pages/Pic2Page';
import Pic3Page from '../pages/Pic3Page';
import Pic4Page from '../pages/Pic4Page';




class Page extends React.Component {

    state= { inView : false };

    getPageInView = () => {
        console.log("get page in view");
        const pos = ReactDOM.findDOMNode(this).getBoundingClientRect();

        if (pos.left > 0 && pos.right < window.innerWidth && this.props.name !== 'space'){
            this.setState({ inView: true });
            console.log("Active page:", this.props.name)
        } else {
            this.setState({ inView: false });
        }

    }
    
    scrollToView = () => {
        ReactDOM.findDOMNode(this).scrollIntoView();
        this.setState({ inView: true });
        //console.log(ReactDOM.findDOMNode(this).getBoundingClientRect().left);
        // this.getPageInView();   
        console.log("scroll to view:", this.props.name, this.state);
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
                return <AboutPage scrollToPage={this.scrollToPage}/>;
            case 'skills':
                return <SkillsPage scrollToPage={this.scrollToPage}/>;
            case 'work':
                return <WorkPage scrollToPage={this.scrollToPage}/>;
            case 'projects':
                return <ProjectsPage />;
            case 'pic1':
                return <Pic1Page />;
            case 'pic2':
                return <Pic2Page />;
            case 'pic3':
                return <Pic3Page />;
            case 'pic4':
                return <Pic4Page />;
            default:
                return 'Page not loaded';
        }
    }

    //className={"page " + (this.state.inView ? 'active' : '')} <- class to show active page
// scrollToPage={this.scrollToPage}
    render () {
        return (
            <div onClick={this.scrollToView} className={"page page-" + this.props.pageType}> 
                {this.renderSwitch(this.props.name)}
            </div>
        )
    }
};

export default Page;