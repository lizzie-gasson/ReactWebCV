import React from 'react'
import ReactDOM from 'react-dom'


//create react component
const App = function(){
    return <div>Lizzie's page!</div>
};
//Should I use function or class based components??
//todo set up git repo


//show component on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);