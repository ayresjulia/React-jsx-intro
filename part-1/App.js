const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="Julia" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
