

// export const TableCell = () => (
// 	<>
// 		<td>One</td>
// 		<td>Two</td>
// 	</>
// )

export const TableCell = ({ children }) => (
	<td>
		{children}
	</td>
)

export const TableRow = ({ children }) => ( 
	<tr>
		{children}
	</tr>
)


export const TableBody = ({ children }) => (
	<tbody>
		{children}
	</tbody>
)


export const Table = ({ children }) => (
	<table>
		{children}
	</table>
)

export const App = () => {
	return (
		<Table>
			<TableBody>
				<TableRow>
					<TableCell>One</TableCell>
					<TableCell>Two</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
