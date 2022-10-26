import { useReducer } from 'react'

const initialState = 0


const reducer = ( state, action ) => {
	console.log({ state, action })

	return state + action
}

export const Counter = () => {
	const [ count, dispatch ] = useReducer(reducer, initialState)

	const handleClick = () => {
		dispatch(1)
	}

	return (
		<>
			<button onClick={handleClick}>Count: {count}</button>
		</>
	)
}