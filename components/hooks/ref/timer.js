import { useEffect, useRef, useState, useCallback } from 'react'

const NonStopTimer = () => {
	const [ count, setCount ] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => setCount(count + 1), 1000)

		return () => clearInterval(interval)
	}, [count])

	return (
		<>
			<h2>Count: {count}</h2>
		</>
	)
}



const StopedTimer = () => {
	const [ count, setCount ] = useState(0)
	const interval = useRef()

	useEffect(() => {
		interval.current = setInterval(() => setCount(count + 1), 1000)

		return () => clearInterval(interval.current)
	}, [count])

	return (
		<>
			<h2>Count: {count}</h2>
			<button onClick={() => clearInterval(interval.current)}>Stop Timer</button>
		</>
	)
}



const ToggleTimer = () => {
	const [ count, setCount ] = useState(0)
	const interval = useRef()

	const tick = useCallback(() => {
		setCount(count + 1)
	}, [count]) 


	useEffect(() => {
		interval.current = setInterval(tick, 1000)

		return () => clearInterval(interval.current)
	}, [tick])

	return (
		<>
			<h2>Count: {count}</h2>
			<button onClick={() => tick()}>Start Timer</button>
			<button onClick={() => clearInterval(interval.current)}>Stop Timer</button>
		</>
	)
}


export const Timer = () => {

	return (
		<>
			{/* <NonStopTimer /> */}
			{/* <StopedTimer /> */}
			<ToggleTimer />
		</>
	)
}
