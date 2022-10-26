import { useState } from 'react'

const Count = ({ children }) => {
	const [ count, setCount ] = useState(0)

	const incrementCount = () => setCount(count + 1) 

	return (
		<>
			{children(count, incrementCount)}	
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
			<Count>
				{(count, incrementCount) => <CountOne count={count} incrementCount={incrementCount} /> }
			</Count>
			
			<Count>
				{(count, incrementCount) => <CountTwo count={count} incrementCount={incrementCount} /> }
			</Count>
			
		</>
	)
}
