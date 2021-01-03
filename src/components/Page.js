import React from 'react';
import './ArticleStyles.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';
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

    constructor(){
        super();
    }

    setPageInView = () => {
        const pos = ReactDOM.findDOMNode(this).getBoundingClientRect();

        if (pos.left == 0) {
            this.setState({ inView: true });
            window.pageComponent.active = this;
        } else {
            this.setState({ inView: false });
        }

    }
    
    scrollToView = () => {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }


    componentDidMount() {
        window.pageComponent[this.props.index] = this;

        var thisPage = this;
        thisPage.setPageInView();
  
        $('.page-map').on('scroll', function() {
            thisPage.setPageInView();
        });
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
            <div onClick={this.scrollToView} className={(this.state.inView ? 'active ' : '') + "page page-" + this.props.pageType}> 
                {this.renderSwitch(this.props.name)}
            </div>
        )
    }
};

export default Page;