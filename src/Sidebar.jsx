export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="wrapper">
				<a href="/" className="sticky top-0">
					<h1>🧪 AP Chemistry 🧪</h1>
				</a>

				<h2>Units</h2>

				<a href="/unit-1">Unit 1 | Atomic Structure</a>
				<a href="/unit-2">Unit 2 | Molecular Structure</a>
				<a href="/unit-3">Unit 3 | Stoichiometry</a>
				<a href="/unit-4">Unit 4 | Thermodynamics</a>
				<a href="/unit-5">Unit 5 | Kinetics</a>
				<a href="/unit-6">Unit 6 | Equilibrium</a>
				<a href="/unit-7">Unit 7 | Acids and Bases</a>
				<a href="/unit-8">Unit 8 | Redox Reactions</a>
			</div>
		</div>
	);
}
