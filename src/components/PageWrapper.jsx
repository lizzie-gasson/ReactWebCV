import React from "react";
import "./ArticleStyles.css";

const PageWrapper = ({index, name, pageType, children}) => {
	return (
		<div className={`page page-${pageType} ${name} index-${index}`}>
			{children}
		</div>
	)
}

export default PageWrapper;
