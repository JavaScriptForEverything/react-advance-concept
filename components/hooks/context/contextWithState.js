import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

const userContextValue = {
	name: 'riajul',
	email: 'riajul@gmail'
}

export const ContextWithState = () => {
	const [ user, setUser ] = useState(null)

	// add default data to userContext
	useEffect(() => {
		setUser(userContextValue)
	}, [])

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<Component />
			</UserContext.Provider>
		</>
	)
}


const Component = () => {
	const [ userId, setUserId ] = useState(0)
	const { user, setUser } = useContext( UserContext )

	const handleAddUser = async (userId) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
		setUser(data)
	}
	const generateRandomId = () => {
		const randomId = Math.floor( Math.random() * 10 ) + 1
		setUserId( randomId )
	}


	return (
		<>
			<h2>Hi UserContext</h2>

			<button onClick={generateRandomId}>Generate Random ID: {userId}</button>
			<button onClick={() => handleAddUser(userId)}>Get User Data</button>
			<pre>
				{JSON.stringify(user, null, 2)}
			</pre>
		</>
	)
}
