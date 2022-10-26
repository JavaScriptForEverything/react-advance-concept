const { useState } = require('react')

const withCount = ( Count, incrementBy = 1, initialCount = 0 ) => {

	const WithCount = (props) => {
		const [ count, setCount ] = useState(initialCount)
	
		return (
			<>
				<Count {...props}
					count={count}
					incrementCount={() => setCount(oldCount => oldCount + incrementBy)}
				/>
			</>
		)
	}

	return WithCount
}


let CountOne = ({ count, incrementCount}) => {
	return (
		<>
			<h2>CountOne: {count}</h2>
			<button onClick={incrementCount}>incress</button>
		</>
	)
}
CountOne = withCount(CountOne)
// export default withCount(CountOne)


const CountTwo = withCount( ({ count, incrementCount}) => {
	return (
		<>
			<h2 onMouseOver={incrementCount}>Incress Count on Hover: {count}</h2>
		</>
	)
})



export const App = () => {

	return (
		<>
			<CountOne />
			<CountTwo />
			
		</>
	)
}
