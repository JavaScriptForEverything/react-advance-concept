import axios from 'axios'
import { createContext, useContext, useReducer, useState } from 'react'

const USER = {
	REQUESTED: 'USER_REQUESTED',
	SUCCEED: 'USER_SUCCEED',
	FAILED: 'USER_FAILED',
}
const PRODUCT = {
	REQUESTED: 'PRODUCT_REQUESTED',
	SUCCEED: 'PRODUCT_SUCCEED',
	FAILED: 'PRODUCT_FAILED',
}

// handle product reducer
const productInititialState = {
	loading: false,
	error: '',
	product: null
}
const productReducer = (state, action) => {
	switch(action.type) {
		case PRODUCT.REQUESTED: return { ...state, loading: true }
		case PRODUCT.SUCCEED: return { ...state, loading: false, product: action.payload }
		case PRODUCT.FAILED: return { ...state, loading: false, product: action.payload }

		default: return state
	}
}

// handle user reducer
const userInitialState = {
	loading: false,
	error: '',
	user: null
}
const userReducer = (state, action) => {
	switch(action.type) {
		case USER.REQUESTED: return { ...state, loading: true }
		case USER.SUCCEED: return { ...state, loading: false, user: action.payload }
		case USER.FAILED: return { ...state, loading: false, user: action.payload }

		default: return state
	}
}

const ProductContext = createContext()
const UserContext = createContext()

export const MultiContext = () => {
	const [ product, productDispatch ] = useReducer(productReducer, productInititialState)
	const [ user, userDispatch ] = useReducer(userReducer, userInitialState)

	return (
		<ProductContext.Provider value={{ product, productDispatch }}>
			<UserContext.Provider value={{ user, userDispatch }}>
				<Component />
			</UserContext.Provider>
		</ProductContext.Provider>
	)
}

const Component = () => {
	const { product, productDispatch } = useContext(ProductContext)
	const { user, userDispatch } = useContext(UserContext)

	const [ productId, setProductId ] = useState(0)
	const [ userId, setUserId ] = useState(0)

	const handleRandomProduct = () => {
		const randomProductId = Math.floor( Math.random() * 100 ) + 1
		setProductId( randomProductId )
	}
	const handleGetProduct = async(id) => {
		if(!id) return productDispatch({ type: PRODUCT.FAILED, payload: 'No productId' })

		const { data: product } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)

		productDispatch({ type: PRODUCT.SUCCEED, payload: product })
		setUserId( product.userId )
	}

	const handleGetUser = async(id) => {
		if(!id) return userDispatch({ type: USER.FAILED, payload: 'No userId' })

		const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
		userDispatch({ type: USER.SUCCEED, payload: user })
	}

	const handleReset = () => {
		productDispatch({ type: PRODUCT.SUCCEED, payload: null })
		setProductId(0)

		userDispatch({ type: USER.SUCCEED, payload: null })
		setUserId(0)
	}


	return (
		<>
			<h2>Multi-Context: User + product</h2>

		<div>
			<button onClick={handleRandomProduct}>Generate Random Product: {productId}</button>
			<button onClick={handleReset}>Reset User + Product</button>
		</div>

		<div>
			<button onClick={() => handleGetProduct(productId)}>Get Product</button>
			<button onClick={() => handleGetUser(userId)}>Get User</button>
		</div>

		<pre>
			{JSON.stringify(product, null, 2)}
		</pre>

		<pre>
			{JSON.stringify(user, null, 2)}
		</pre>

		</>
	)
}
export default MultiContext
