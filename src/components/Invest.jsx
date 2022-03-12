import React from "react";

const Invest = () => {
	return (
		<div>
			<h2 className="subtitle">Investment</h2>
			<form className="form-container">
				<div>
					<input
						type="text"
						placeholder="Enter Investment Amount"
						className="form-control"
						required
					/>
				</div>
				<div className="btn">
					<input type="submit" value="PAY" />
				</div>
			</form>
		</div>
	);
};

export default Invest;
