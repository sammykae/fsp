import React, { useEffect } from "react";
import RecentItems from "./RecentItems";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import app from "./fire";
const db = getDatabase();
const auth = getAuth(app);

const Home = () => {
	useEffect(() => {
		const id = auth.currentUser.uid;
		const starCountRef = ref(db, "users/" + id);
		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val();
			console.log(data);
		}).catch((error) => {
			console.error(error);
		});
	}, []);

	return (
		<div>
			<h2 className="subtitle">Overview</h2>
			<div className="overview">
				<div className="overview-card">
					<p className="tt">Balance</p>
					<p className="ss">#0.00</p>
				</div>
				<div className="overview-card">
					<p className="tt">Investment</p>
					<p className="ss">#0.00</p>
				</div>
			</div>
			<h2 className="subtitles">Recent Transactions</h2>
			<div className="recent">
				<div className="recent-item-head">
					<p>SN</p>
					<p>Date</p>
					<p>Transaction ID</p>
					<p>Transaction Type</p>
					<p>Amount</p>
					<p>Status</p>
				</div>
				<RecentItems
					sn="1"
					date="03/01/2022"
					id="6776835432"
					type="Withdrawal"
					amount="200000"
					status="Sucessful"
				/>
				<RecentItems
					sn="2"
					date="31/09/1779"
					id="0987065432"
					type="Investment"
					amount="50000"
					status="Pending"
				/>
				<RecentItems
					sn="3"
					date="08/09/2021"
					id="9897865332"
					type="Investment"
					amount="10000"
					status="Sucessful"
				/>
				<RecentItems
					sn="4"
					date="16/02/2022"
					id="0987654321"
					type="Withdrawal"
					amount="5000"
					status="Failed"
				/>
			</div>
		</div>
	);
};

export default Home;
