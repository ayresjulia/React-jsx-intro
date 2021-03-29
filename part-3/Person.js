const Person = ({ name, age, hobbies }) => {
	let result;
	if (age >= 18) {
		result = "Please, go vote!";
	} else {
		result = "You must be 18 to vote.";
	}

	return (
		<div>
			<p>Learn some information about {name.length > 8 ? name.slice(0, 6) : name}</p>
			<h3>{result}</h3>
			<p>Hobbies: </p>
			<ul>{hobbies.map((h) => <li>{h}</li>)}</ul>
		</div>
	);
};
