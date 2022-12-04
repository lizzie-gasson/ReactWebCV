import React from "react";
import { goHome } from "../utils/utils";

export const BackToStartButton = () => {
    return (
        <div className="back-to-start">
            <a onClick={() => goHome()}>
                <i className="fas fa-long-arrow-alt-left"></i> back to start
            </a>
        </div>
    )
}