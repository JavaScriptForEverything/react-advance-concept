import axios from 'axios'
import { useState, useReducer, useEffect } from 'react'

const initialState = {
	loading: false,
	error: '',
	user: null
}

const USER = {
	requested: 'USER_REQUESTED',
	succeed: 'USER_SUCCEED',
	failed: 'USER_FAILED',
}

const reducer = ( state, action ) => {
	switch(action.type) {
		case USER.requested : return { 
			...state, 
			loading: true,
			error: ''
		}
		case USER.succeed : return { 
			...state, 
			loading: false,
			user: action.payload 
		}
		case USER.failed : return { 
			...state, 
			loading: false,
			user: null
		}

		default: return state
	}
}

export const ReducerCounter = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState)
	const [ userId, setUserId ] = useState(0)

	const handleClick = async(userId) => {
		dispatch({ type: USER.requested })

		const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
		dispatch({ type: USER.succeed, payload: user })
	}

	const handleRandomUserId = () => {
		const randomNumber = Math.floor( Math.random() * 10 ) + 1
		setUserId( randomNumber )
	}

	useEffect(() => {
		(async() => {
			await handleClick(3)
		})()
	}, [])

	return (
		<>
			<button onClick={handleRandomUserId}>Generate RandomId: {userId} </button>

			<button onClick={() => handleClick(userId)}>getUser</button>
			<pre>
				{JSON.stringify(state, null, 2)}
			</pre>
		</>
	)
}