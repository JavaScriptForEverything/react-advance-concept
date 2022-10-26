import axios from 'axios'
import { createContext, useContext, useReducer, useState } from 'react'

const initialState = {
	loading: false,
	error: '',
	user: null
}

const USER = {
	REQUESTED: 'USER_REQUESTED',
	SUCCEED: 'USER_SUCCEED',
	FAILED: 'USER_FAILED'
}

// dispatch({ type: 'requested', payload: user })
const reducer = (state, action) => {
	switch(action.type) {
		case USER.REQUESTED: return {
			...state,
			loading: true,
		}
		case USER.SUCCEED: return {
			...state,
			loading: false,
			user: action.payload
		}

		case USER.FAILED: return {
			...state,
			loading: false,
			error: action.payload
		}

		default: return state
	}
}

const UserContext = createContext()

export const ContextWithReducer = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState)

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			<Component />
		</UserContext.Provider>
	)
}

const Component = () => {
	const { state, dispatch } = useContext( UserContext )
	const [ userId, setUserId ] = useState(0)

	const handleGetUser = async (id) => {
		const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

		dispatch({
			type: USER.SUCCEED,
			payload: user
		})
	}

	const generateRandomUserId = () => {
		const randomId = Math.floor( Math.random() * 10 ) + 1 		// Generate 1 - 10
		setUserId(randomId)
	}

	return (
		<>
			<h2>Hi UserContext</h2>

			<button onClick={generateRandomUserId}>Generate Random userId: {userId}</button>
			<button onClick={() => handleGetUser(userId)}>Get User</button>

			<pre>
				{JSON.stringify(state, null ,2 )}
			</pre>
		</>
	)
}