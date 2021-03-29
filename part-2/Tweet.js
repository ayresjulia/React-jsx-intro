const Tweet = ({ username, name, date, msg }) => {
	return (
		<ul>
			<li>
				<i>Username:</i> {username}
			</li>
			<li>
				<i>Name:</i> {name}
			</li>
			<li>
				<i>Date:</i> {date}
			</li>
			<li>
				<i>Tweet:</i> {msg}
			</li>
		</ul>
	);
};
