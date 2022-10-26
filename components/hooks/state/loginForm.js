import { useState } from 'react'

const inputItems = [
	{ name: 'email', label: 'Email: ', placeholder: 'abc@gmail.com' },
	{ name: 'password', label: 'Password: ', placeholder: '********' },
]

export const Login = () => {
	const [ fields, setFields ] = useState({
		email: '',
		password: '' 
	})

	const handleChange = (name) => (evt) => {
		setFields({ ...fields, [name]: evt.target.value })
	}

	const handleSubmit = (evt) => {
		evt.preventDefault()

		console.log(fields)
	}

	return (
		<form onSubmit={handleSubmit}>
			{inputItems.map( ({ name, label, placeholder }) => (
				<div key={name}>
					<label htmlFor={name}>{label}</label>
					<input 
						id={name}

						placeholder={placeholder}
						value={fields[name]}
						name={name}
						onChange={handleChange(name)}
					/>
				</div>
			))}

			<button type='submit'>Login</button>
		</form>
	)
}