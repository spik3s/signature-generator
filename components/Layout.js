import React from "react";
import Head from "next/head";
import Header from "./Header";

const Layout = props => (
	<React.Fragment>
		<Head>
			<title>My page title</title>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
				integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
				crossOrigin="anonymous"
			/>
		</Head>
		<div className="container">
			<Header />
			{props.children}
		</div>
	</React.Fragment>
);

export default Layout;
