import { useState } from 'react'

export const StateCounter = () => {
	const [ count, setCount ] = useState(0)

	const handleIncress = () => setCount(count + 1)
	const handleReset = () => setCount(0)

	const handleIncressFive = () => {

		for( let i = 1; i <= 5; i++ ) {
			// setCount( count + 1 ) 							// only one time by 1
			setCount( oldCount => oldCount + 1 ) 	// update every time by 1
		}
	}

	return (
		<>
			<h1>{count}</h1>
			<button onClick={handleIncress}>Incress</button>
			<button onClick={handleIncressFive}>Incress 5 </button>
			<button onClick={handleReset}>Reset</button>
		</>
	)
}
