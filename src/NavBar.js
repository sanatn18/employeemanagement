import { Link } from "react-router-dom";

export default function NavBar() {
	return(
	<>
	<center>
	<div className="nav">
		<Link to="/admin"> Admin </Link>
		<Link to="/create"> Create </Link>
	</div>
	</center>
	</>
	);
}