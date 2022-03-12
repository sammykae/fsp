import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./app.scss";
import Invest from "./components/Invest";
import Home from "./components/Home";
import Withdraw from "./components/Withdraw";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<ToastContainer position="top-center" />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="dashboard" element={<Dashboard />}>
						<Route index element={<Home />} />
						<Route path="invest" element={<Invest />} />
						<Route path="withdraw" element={<Withdraw />} />
					</Route>
					<Route path="signup" element={<Signup />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
