import ReactDOM from "react-dom";

// Navigation
export const goHome = () =>
	ReactDOM.findDOMNode(window.pageComponent[0]).scrollIntoView();
