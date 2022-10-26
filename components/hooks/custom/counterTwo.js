import { useCountOne } from './useCounterOne'

export const CounterTwo = () => {
	const [ count, handleIncress, handleDecress, handleReset ] = useCountOne()

	return (
		<>
			<h2>Count: {count}</h2>

			<button onClick={handleIncress}>Incress</button>
			<button onClick={handleDecress}>Decress</button>
			<button onClick={handleReset}>Reset</button>
			
		</>
	)
}
