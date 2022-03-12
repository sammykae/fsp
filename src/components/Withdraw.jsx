import React from "react";

const Withdraw = () => {
	return (
		<div>
			<h2 className="subtitle">Withdrawal</h2>
			<div className="overview">
				<div className="overview-card">
					<p className="tt">Balance</p>
					<p className="ss">#0.00</p>
				</div>
			</div>
			<form className="form-container">
				<div>
					<input
						type="text"
						placeholder="Enter Amount To Withdraw"
						className="form-control"
						required
					/>
				</div>
				<div className="btn">
					<input type="submit" value="WITHDRAW" />
				</div>
			</form>
		</div>
	);
};

export default Withdraw;
