import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import app from "../components/fire";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
	const [isloading, setIsLoading] = useState(false);
	const auth = getAuth(app);
	const db = getDatabase();
	const navigate = useNavigate();

	const DataStore = async (e) => {
		await set(ref(db, "users/" + auth.currentUser.uid), {
			fullname: e.target.name.value,
			email: e.target.email.value,
			balance: 0,
			investment_bal: 0,
			transactions: [
				{
					id: 1,
					date: "03/01/2022",
					tid: "6776835432",
					type: "Withdrawal",
					amount: "200000",
					status: "Sucessful",
				},
				{
					id: 2,
					date: "31/09/1779",
					tid: "0987065432",
					type: "Investment",
					amount: "50000",
					status: "Pending",
				},
				{
					id: 3,
					date: "08/09/2021",
					tid: "9897865332",
					type: "Investment",
					amount: "10000",
					status: "Sucessful",
				},
				{
					id: 4,
					date: "16/02/2022",
					tid: "0987654321",
					type: "Withdrawal",
					amount: "5000",
					status: "Failed",
				},
			],
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		if (e.target.password.value === e.target.repassword.value) {
			await createUserWithEmailAndPassword(
				auth,
				e.target.email.value,
				e.target.password.value
			)
				.then((e) => {
					DataStore(e);
					navigate("/dashboard");
				})
				.catch((error) => {
					toast.error(error.code);
				});
		} else {
			setIsLoading(false);
			toast.error("Password Mismatch");
		}
	};

	return (
		<div className="auth-container">
			<form className="form-container" onSubmit={handleSubmit}>
				<div className="title">
					<h1>Sign Up Now!!!</h1>
					<p>Create An FSP Account Today</p>
				</div>
				<div className="input-container">
					<input
						type="text"
						name="name"
						className="form-control"
						placeholder="Enter your full name"
						required
					/>
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
				<div className="input-container">
					<input
						type="password"
						name="repassword"
						className="form-control"
						placeholder="Confirm your password"
						required
					/>
				</div>
				<div className="button">
					<button className="submit">
						SIGNUP{" "}
						{isloading ? <FontAwesomeIcon icon="fa-solid fa-spinner" /> : null}
					</button>
				</div>
				<div className="other">
					<Link to={"/"}>Already Have An Account? Login Here!</Link>
				</div>
			</form>
		</div>
	);
};

export default Signup;
