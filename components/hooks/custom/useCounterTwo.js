import { useState } from 'react'

export const useCountOne = () => {
	const [ count, setCount ] = useState(0)
	
	const handleIncress = () => {
		setCount(count + 1)
	}
	const handleDecress = () => {
		setCount(count - 1)
	}
	const handleReset = () => {
		setCount(0)
	}

	return [
		count,
		handleIncress,
		handleDecress,
		handleReset
	]
}