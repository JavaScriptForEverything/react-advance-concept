import withCount from './withCount'

const CountByClick = ({ name, count, handleIncress }) => {

	return (
		<>
			<h2> name: {name}  Count: {count}</h2>

			<button onClick={handleIncress}>Incress</button>
		</>
	)
}
export default withCount( CountByClick )
