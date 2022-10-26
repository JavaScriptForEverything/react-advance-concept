import { useState } from 'react'

//----------[ Regular Component ]----------
const BasicComponent = () => {
	const [ name, setName ] = useState('')

	const handleChange = (evt) => setName(evt.target.value)

	return (
		<>
			<h2>Name: {name}</h2>
			<div>
				<label>Name: </label>
				<input value={name} onChange={handleChange} />	
			</div>
		</>
	)
}



//----------[ Method-1: with customHook ]----------
const useInputHook = () => {
	const [ name, setName ] = useState('')

	const handleChange = (evt) => setName(evt.target.value)

	return [ name, handleChange ]
}

const InputWithHook = () => {
	const [ name, handleChange ] = useInputHook()

	return (
		<>
			<h2>Name: {name}</h2>
			<div>
				<label>Name: </label>
				<input value={name} onChange={handleChange} />	
			</div>
		</>
	)
}


//----------[ Method-2: Advance ]----------
const useInput = () => {
	const [ name, setName ] = useState('')


	const bind = {
		placeholder: 'riajul...',
		value: name,
		onChange: (evt) => setName(evt.target.value)
	}

	return [ name, bind ]
}

const InputComponent = () => {
	const [ name, bind ] = useInput()

	return (
		<>
			<h2>Name: {name}</h2>
			<div>
				<label>Name: </label>
				<input {...bind} />
			</div>
		</>
	)
}




export const Input = () => {

	return (
		<>
			{/* <BasicComponent /> */}
			{/* <InputWithHook /> */}
			<InputComponent />
		</>
	)
}
export default Input
