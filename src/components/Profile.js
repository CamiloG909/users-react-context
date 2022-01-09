import React, { useContext, Fragment } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
	const { selectedUser } = useContext(UserContext);
	return (
		<Fragment>
			{selectedUser ? (
				<article className="profile-card">
					<img
						src={selectedUser.avatar}
						alt={`image-profile-${selectedUser.id}`}
					/>
					<p>
						{selectedUser.first_name} {selectedUser.last_name}
					</p>
					<p>Email: {selectedUser.email}</p>
				</article>
			) : (
				<p className="text-profile">No user selected</p>
			)}
		</Fragment>
	);
};

export default Profile;
