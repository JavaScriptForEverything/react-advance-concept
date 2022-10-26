import { useState } from 'react'


const withCount = ( OriginalComponent, incrementNumber = 1 ) => {
	
	const NewComponent = (props) => {
		const [ count, setCount ] = useState(0)

		const handleIncress = () => {
			setCount(count + incrementNumber )
		}

		return <OriginalComponent 
			count={count} 
			handleIncress={handleIncress} 
			{...props}
		/>
	}

	return NewComponent
}
export default withCount