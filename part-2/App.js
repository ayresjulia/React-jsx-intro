const App = () => {
	return (
		<div>
			<Tweet username="user1" name="Bobby" date="05-08-2020" msg="First Tweet!" />
			<Tweet username="user2" name="Mike" date="09-06-2020" msg="Hello" />
			<Tweet username="user3" name="Elizabeth" date="01-02-2020" msg="Joke of the day" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
