import withCount from './withCount'

const CountOnHover = ({ age, count, handleIncress }) => {

	return (
		<>
			<h2 onMouseOver={handleIncress}>Age: {age} Hovers on: {count}</h2>
		</>
	)
}
export default withCount(CountOnHover, 10)
