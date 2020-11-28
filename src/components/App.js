import React from 'react'
import ReactDOM from 'react-dom'
import './MainStyles.css';
import PageMap from './PageMap';


//create react component
class App extends React.Component {

    render() {
        return (
            <div className="frame">
                <div className="scrollbar-wrapper"></div>
                <PageMap />
            </div>
        )
    }
    
};

export default App;