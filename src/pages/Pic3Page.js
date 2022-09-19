import React from 'react';
import ReactDOM from 'react-dom';

class Pic3Page extends React.Component {

    firstPage = () => {
        ReactDOM.findDOMNode(window.pageComponent[0]).scrollIntoView();
    }
    render () {
        return (
            <div className="imagePage pic3">
                <div className="back-to-start">
                    <a onClick={this.firstPage}><i className="fas fa-long-arrow-alt-left"></i> back to start</a>
                </div>
            </div>
        )
    }
};

export default Pic3Page;