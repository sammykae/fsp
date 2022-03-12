import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
	getAuth,
	setPersistence,
	signInWithEmailAndPassword,
	browserSessionPersistence,
} from "firebase/auth";
import app from "../components/fire";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Login = () => {
	const auth = getAuth(app);
	const navigate = useNavigate();
	const [isloading, setIsLoading] = useState(false);
	const handleLogin = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				return signInWithEmailAndPassword(
					auth,
					e.target.email.value,
					e.target.password.value
				).then(() => navigate("dashboard"));
			})
			.catch((error) => {
				setIsLoading(false);
				toast.error(error.code);
			});
	};

	return (
		<div className="auth-container">
			<form className="form-container" onSubmit={handleLogin}>
				<div className="title">
					<h1>LOGIN</h1>
					<p>Please Login to FSP</p>
				</div>
				<div className="input-container">
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="Enter your email address"
						required
					/>
				</div>
				<div className="input-container">
					<input
						type="password"
						name="password"
						className="form-control"
						placeholder="Enter your password"
						required
					/>
				</div>
				<div className="button">
					<button className="submit">
						LOGIN
						{isloading ? <FontAwesomeIcon icon="fa-solid fa-spinner" /> : null}
					</button>
				</div>
				<div className="other">
					<Link to={""}>Forgotten Password?</Link>
					<Link to={"signup"}>Not A Member? Signup Now!!!</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
