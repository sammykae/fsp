import React from "react";

const RecentItems = ({ sn, date, id, type, amount, status }) => {
	return (
		<div className="recent-item">
			<p>{sn}</p>
			<p>{date}</p>
			<p>{id}</p>
			<p>{type}</p>
			<p>#{amount}</p>
			<p>{status}</p>
		</div>
	);
};

export default RecentItems;
