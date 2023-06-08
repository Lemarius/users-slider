const Users = ({ title, name, username, email, profileImage }) => {
	return (
		<>
			<img src={profileImage} alt='' />
			<h1>
				Name: {title} {name}
			</h1>
			<p>Username: {username}</p>
			<p>Email: {email}</p>
		</>
	);
};

export default Users;
