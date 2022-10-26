import { createContext, useContext } from 'react'

const contextData = { 
	loading: false,
	user: {
		name: 'riajul',
		email: 'riajul@gmail.com'
	}
}

const userContext = createContext()

const UserProvider = userContext.Provider
const UserConsumer = userContext.Consumer



const ConsumerComponent = () => {
	const context = useContext( userContext )
	console.log(context)



	return (
		<>
			<h1> Hi Context </h1>
			<pre>
				{JSON.stringify(context, null, 2)}
			</pre>
		</>
	)

	return (
		<UserConsumer>
			{(state) => (
				<>
					<h1> Hi Context </h1>
					<pre>
						{JSON.stringify(state, null, 2)}
					</pre>
				</>
			)}
		</UserConsumer>
	)

}


export const App = () => {

	return (
		<UserProvider value={contextData}>
			<ConsumerComponent />
		</UserProvider>
	)
}
