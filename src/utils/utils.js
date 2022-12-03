import ReactDOM from "react-dom";

// Navigation
export const goHome = () =>
	ReactDOM.findDOMNode(window.pageComponent[0]).scrollIntoView();

export const executeScroll = (ref) => ref.current.scrollIntoView();
// DO THIS !!
// export const goToPage = (id) => {
// 	const element = document.getElementById(id);
// 	const pos = ReactDOM.findDOMNode(element).getBoundingClientRect();

// 	if (pos.left === 0 || (pos.left < 1 && pos.left > -1)) {
// 		this.setState({ inView: true });
// 		console.log("set url", this.props.name);
// 		window.pageComponent.active = this;
// 	} else {
// 		this.setState({ inView: false });
// 	}
// };
