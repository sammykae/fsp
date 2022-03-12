import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";

const meniItems = [
	{
		text: "Home",

		path: "/dashboard",
	},
	{
		text: "Invest",

		path: "/dashboard/invest",
	},
	{
		text: "Withdraw",

		path: "/dashboard/withdraw",
	},
];
const Dashboard = () => {
	const location = useLocation();

	return (
		<div className="dashboard-container">
			<div className="appbar">
				{meniItems.map((item) => (
					<Link
						key={item.text}
						className="link"
						id={location.pathname === item.path ? "active" : null}
						to={item.path}
					>
						{item.text}
					</Link>
				))}
			</div>
			<div className="main">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
