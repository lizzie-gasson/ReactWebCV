import React from "react";
import ReactDOM from "react-dom";
import { goHome } from "../utils/utils";

class Pic3Page extends React.Component {
	render() {
		return (
			<div className="imagePage pic3">
				<div className="back-to-start">
					<a onClick={() => goHome()}>
						<i className="fas fa-long-arrow-alt-left"></i> back to start
					</a>
				</div>
			</div>
		);
	}
}

export default Pic3Page;
