import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout({ children }: any) {
	return (
		<>
			<Navbar></Navbar>
			<div className="container mx-auto">{children}</div>
			<Footer></Footer>
		</>
	);
}

export default Layout;
