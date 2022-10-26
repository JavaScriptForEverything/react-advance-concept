import { useEffect, useRef } from 'react'

const Form = () => {
	const userNameRef = useRef()

	useEffect(() => {
		userNameRef.current.focus()
	}, [])

	const handleSubmit = (evt) => {
		evt.preventDefault()

		console.log({ userNameRef: userNameRef.current.value })
		userNameRef.current.value = ''
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='username'>Username</label>
				<input ref={userNameRef} type='text' id='username'  />
			</div>

			<button type='submit'>submit</button>
		</form>
	)
}
export default Form
