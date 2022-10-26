
import { useState } from 'react'
import { useCountOne } from './useCounterOne'

export const CounterOne = () => {
	const [ count ] = useState(0)
	const [ handleIncress, handleDecress, handleReset ] = useCountOne()

	return (
		<>
			<h2>Count: {count}</h2>

			<button onClick={handleIncress}>Incress</button>
			<button onClick={handleDecress}>Decress</button>
			<button onClick={handleReset}>Reset</button>
			
		</>
	)
}
