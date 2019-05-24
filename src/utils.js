export function getGridArray(data, columnNumber = 3) {
	const rows = []

	for (let i = 0; i < data.length; i += columnNumber) {
		let column = []
		for (let j = i; j < i + columnNumber; j++) {
			if (j > data.length) {
				break
			}
			data[j] && column.push(data[j])
		}
		rows.push(column)
	}
	return rows
}

export function isMobile() {
	return window.innerWidth <= 768
}
