import { useState } from 'react'

const CountOne = () => {
	const [ count, setCount ] = useState(0)

	const incrementCount = () => setCount(count + 1) 

	return (
		<>
			<h2>CountOne: {count}</h2>
			<button onClick={incrementCount}>incress</button>
		</>
	)
}


// import { useState } from 'react'
const CountTwo = () => {
	const [ count, setCount ] = useState(0)

	const incrementCount = () => setCount(count + 1) 
	return (
		<>
			<h2 onMouseOver={incrementCount}>Incress Count on Hover: {count}</h2>
		</>
	)
}



export const App = () => {

	return (
		<>
			<CountOne />
			<CountTwo />
		</>
	)
}

