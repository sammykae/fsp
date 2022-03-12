import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyATM473PXUS4ynZ-FKlF2r1jbphntWnHZc",
	authDomain: "fsplagos.firebaseapp.com",
	databaseURL: "https://fsplagos-default-rtdb.firebaseio.com",
	projectId: "fsplagos",
	storageBucket: "fsplagos.appspot.com",
	messagingSenderId: "778401776777",
	appId: "1:778401776777:web:ed8ec3d53ed3064716b258",
	measurementId: "G-1BBNVVHVXZ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
