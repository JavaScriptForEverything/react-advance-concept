export const useCountOne = () => {
	
	const handleIncress = () => {
		setCount(count => count + 1)
	}
	const handleDecress = () => {
		setCount(count => count - 1)
	}
	const handleReset = () => {
		setCount(0)
	}

	return [
		handleIncress,
		handleDecress,
		handleReset
	]
}