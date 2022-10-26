const items = [
	'item1',
	'item2',
	'item3',
]

export const List = () => {

	return (
		<>
			<h2>List Example</h2>
			<ul>
				{items.map( (item, index) => (
					<li key={index}> {index} {item} </li>
				))}
			</ul>
		</>
	)
}
