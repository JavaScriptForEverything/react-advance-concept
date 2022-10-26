import { forwardRef, useRef } from 'react'

// const Input = (props) => <input {...props} />
// const Input = forwardRef((props, ref) =>  <input {...props} ref={ref} />)

//=> Warning: missing display name, add name function instead nameless function
const Input = forwardRef( function Input (props, ref) {
	return <input {...props} ref={ref} />
})



export const CustomInput = () => {
	const inputRef = useRef()

	return (
		<>
			<Input ref={inputRef} />

			<button onClick={() => console.log(inputRef.current.value)}>Login</button>
		</>
	)
}
