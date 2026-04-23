export default function TableOfContents({ headings = [] }) {
	return (
		<div className="toc">
			<span className="heading">Table of Contents</span>
			{headings.map((heading, index) => (
				<a
					key={index}
					className={`level-${heading.level}`}
					href={`#${heading.text.toLowerCase().replace(/\s+/g, "-").replace(".", "")}`}
				>
					{heading.text}
				</a>
			))}
		</div>
	);
}
