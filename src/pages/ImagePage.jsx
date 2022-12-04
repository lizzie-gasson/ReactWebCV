import React from 'react';
import {BackToStartButton} from '../components/BackToStartButton'

const ImagePage = ({index}) => {
    return (
        <>
            <div className="imagePage"></div>
                {index === "8" && (
                <BackToStartButton />
            )}
        </>
    )
};

export default ImagePage;