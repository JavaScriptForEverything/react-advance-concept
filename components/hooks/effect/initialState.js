import axios from 'axios'
import { useEffect, useState, useMemo } from 'react'

const AfterRender = () => {
	const [ user, setUser ] = useState(null)
	const [ userId, setUserId ] = useState(0)

	// console.log({ userId })

	const getUserById = async (userId) => {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)

		return data
	}


	useEffect(() => {
		if (userId && userId <= 10) getUserById(userId).then( logedInUser => {
			setUser(logedInUser)
		})
	}, [userId ])

	return (
		<>
			<button onClick={() => setUserId(userId + 1)}>userId: {userId}</button>
			<pre>
				{JSON.stringify(user, null, 2)}
			</pre>
		</>
	)
}
export default AfterRender
