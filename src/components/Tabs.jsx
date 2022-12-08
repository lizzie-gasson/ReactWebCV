import React, { useState } from "react"
import isNil from 'lodash/isNil';
import ReactHtmlParser from 'react-html-parser';

export const Tab = (props) => {
    return (
        <>
            {props.children}
        </>
    )
}

const Tabs = (props) => {
    const { children } = props
    const [activeTab, setActiveTab] = useState(null)

    const handleClick = (index) => {
        setActiveTab(index === activeTab ? null : index)
    }
    return (
        <div className="tabComponent">
            <div className={`tabs ${!isNil(activeTab) ? `showing-text` : ``}`}>
                {children.map((element, index) => {
                    return (
                        <div key={index} className={`text-group card tab ${activeTab === index ? `active` : ``}`} onClick={() => handleClick(index)}>
                            <h3>{element.props.name}</h3>
                        </div>
                    );
                })}
            </div>
            { !isNil(activeTab) ? (
                <div className={`content ${!isNil(activeTab) ? `showing-text` : ``}`}>
                    {children[activeTab]}
                </div>
            ) : (
                <div className={`content`} />
            )}
        </div>
    )
}

export default Tabs