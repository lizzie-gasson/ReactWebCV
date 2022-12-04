import React, {useState} from 'react';
import './MainStyles.css';
import PageMap from './PageMap';
import Header from './Header';
import Navigation from './Navigation';


//create react component
const App = () => {
    const [activePage, setActivePage] = useState('')

    return (
        <div className="frame">
            <Header />
            <PageMap activePage={activePage} setActivePage={setActivePage} />
            <Navigation activePage={activePage} />
        </div>
    )

};

export default App;