import { useState } from 'react'

const useCount = (initialCount=0) => {
	const [ count, setCount ] = useState(initialCount)

	const incrementCount = () => setCount(count + 1) 

	return [ count, incrementCount ]
}


const CountOne = () => {
	const [ count, incrementCount ] = useCount()

	return (
		<>
			<h2>CountOne: {count}</h2>
			<button onClick={incrementCount}>incress</button>
		</>
	)
}


// import { useState } from 'react'
const CountTwo = () => {
	const [ count, incrementCount ] = useCount()

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

