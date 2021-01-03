import React from 'react';
//import ReactDOM from 'react-dom';
import $ from 'jquery';
import './MainStyles.css';
import PageMap from './PageMap';
import Header from './Header';
import Navigation from './Navigation';


//create react component
class App extends React.Component {

    

    render() {
        return (
            <div className="frame">
                <Header />
                <PageMap />
                <Navigation />
            </div>
        )
    }
    
};

export default App;