const lo_name = 'assesment_df'
const lo_data = new Array()

lo_data[1]={type: 'beat', cc:111}

function fSyncData() {
	localStorage.setItem(lo_name, JSON.stringify(lo_data))
	createDataTable(lo_data)
}

fSyncData()

function createDataTable(items) {
	const data_elements = items.map((item, id) => {
		const tdId = document.createElement('td')
		tdId.innerHTML = id

		const tdType = document.createElement('td')
		tdType.innerHTML = item.type

		const tdCc = document.createElement('td')
		tdCc.innerHTML = item.cc

		const tdAct = document.createElement('td')
		tdAct.innerHTML = `
			<button id="edit_${id}">
				Edit
			</button>
			<button id="delete_${id}">
				Edit
			</button>			
		`

		const tr = document.createElement('tr')
		tr.appendChild(tdId)
		tr.appendChild(tdType)
		tr.appendChild(tdCc)
		tr.appendChild(tdAct)

 		return tr
	})

	const tbody = document.getElementById('items')
	// tbody.innerHTML = ""

	data_elements.forEach(data => tbody.appendChild(data))
}