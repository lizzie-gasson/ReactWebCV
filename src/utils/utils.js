import ReactDOM from "react-dom";

// Navigation
export const goToPage = (id) => {
	const pageList = document.getElementsByClassName("page");
	for (let i = 0; i < pageList.length; i++) {
		const element = pageList[i];
		if (element.classList.contains(`index-${id}`)) element.scrollIntoView();
	}
};

export const goHome = () => goToPage(0);
export const getDomElement = (i) =>
	document.getElementsByClassName(`index-${i}`)[0];
