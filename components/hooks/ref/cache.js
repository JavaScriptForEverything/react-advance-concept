import { useState, useRef, useMemo } from 'react'

export const CounterRef = () => {
	const [ incress, setIncress ] = useState(1)

	// const count = useMemo(() => ({ current: 0 }), []) 
	const count = useRef(0)
	count.current = count.current + 1

	console.log('Dom Rendered')
	return (
		<>
			<h2>CountRef: {count.current}</h2>
			<button onClick={() => setIncress(incress + 1)}>Incress: {incress} </button>
		</>
	)
}
