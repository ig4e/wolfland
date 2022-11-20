import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function LayoutNoContainer({ children }: any) {
	return (
		<>
			<Navbar></Navbar>
			<div className="">{children}</div>
			<Footer></Footer>
		</>
	);
}

export default LayoutNoContainer;
