const App = () => {
	return (
		<div>
			<Person name="Alexander" age={20} hobbies={[ "play guitar", "eat pizza" ]} />
			<Person name="Elena" age={15} hobbies={[ "walk dog", "solve puzzles" ]} />
			<Person name="Jack" age={45} hobbies={[ "go shopping", "travel" ]} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
