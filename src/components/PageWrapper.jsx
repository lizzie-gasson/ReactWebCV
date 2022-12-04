import React from "react";

const PageWrapper = ({index, name, pageType, children}) => {
	return (
		<div className={`page page-${pageType} ${name} index-${index}`}>
			{children}
		</div>
	)
}

export default PageWrapper;
