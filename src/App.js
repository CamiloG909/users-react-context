import React, { Fragment } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import Profile from "./components/Profile";
import UserState from "./context/User/UserState";

const App = () => {
	return (
		<Fragment>
			<Header />
			<main className="container">
				<UserState>
					<UserList />
					<Profile />
				</UserState>
			</main>
		</Fragment>
	);
};

export default App;
