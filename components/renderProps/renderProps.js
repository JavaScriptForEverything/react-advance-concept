import { useState } from 'react'

const Count = ({ render = f=>f }) => {
	const [ count, setCount ] = useState(0)

	const incrementCount = () => setCount(count + 1) 

	return (
		<>
			{render(count, incrementCount)}
		</>
	)
}


const CountOne = ({ count, incrementCount}) => {
	return (
		<>
			<h2>CountOne: {count}</h2>
			<button onClick={incrementCount}>incress</button>
		</>
	)
}

const CountTwo = ({ count, incrementCount}) => {
	return (
		<>
			<h2 onMouseOver={incrementCount}>Incress Count on Hover: {count}</h2>
		</>
	)
}



export const App = () => {

	return (
		<>
			<Count render={(count, incrementCount) => (
				<CountOne count={count} incrementCount={incrementCount} />
			)} />

			<Count render={(count, incrementCount) => (
				<CountTwo count={count} incrementCount={incrementCount} />
			)} />

		</>
	)
}

