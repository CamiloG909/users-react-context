import React, { useEffect, useContext } from "react";
import UserContext from "../context/User/UserContext";

const UserList = () => {
	const { users, getUsers, getProfile } = useContext(UserContext);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<section className="users">
			{users.map((user) => (
				<article
					key={user.id}
					className="users__item"
					onClick={() => getProfile(user.id)}
				>
					<img src={user.avatar} alt={`image-profile-${user.id}`} />
					<p>
						{user.first_name} {user.last_name}
					</p>
				</article>
			))}
		</section>
	);
};

export default UserList;
