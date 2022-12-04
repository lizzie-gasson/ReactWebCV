import React from 'react';
import {BackToStartButton} from '../components/BackToStartButton'

const ImagePage = (props) => {
    const { name, index } = props
    return (
        <>
            <div className={`imagePage ${name}`}></div>
                {index === "8" && (
                <BackToStartButton />
            )}
        </>
    )
};

export default ImagePage;