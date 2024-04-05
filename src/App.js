import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Admin from "./Admin";
import Create from "./Create";
import FbConfig from "./FbConfig";
import AdminPage from "./AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
	<BrowserRouter>
		<NavBar/>
		<Routes>
			<Route path="/admin" element={<Admin/>} />
			<Route path="/create" element={<Create/>} />
		</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
