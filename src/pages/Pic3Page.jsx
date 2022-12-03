import React from "react";
import ReactDOM from "react-dom";
import { goHome } from "../utils/utils";

const Pic3Page = () => {
	return (
		<div className="imagePage pic3">
			<div className="back-to-start">
				<a onClick={() => goHome()}>
					<i className="fas fa-long-arrow-alt-left"></i> back to start
				</a>
			</div>
		</div>
	)
}

export default Pic3Page;
