export const headers = [
	"Device Code",
	"Computer Name",
	"Category",
	"Users",
	"Department",
	"Serial Number",
	"Status",
	"Specs",
	"Purchase Date",
	"Action"
]

export const formTitles = [
	{
		item: {
			title: "Device Code",
			name: "device_code",
			type: "text",
		}
	},
	{
		item: {
			title: "User",
			name: "user",
			type: "text",
		}
	},
	{
		item: {
			title: "Department",
			name: "department",
			type: "text",
		}
	},
	{
		item: {
			title: "Computer Name",
			name: "computer_name",
			type: "text",
		}
	},
	{
		item: {
			title: "Serial No.",
			name: "serial_number",
			type: "text",
		}
	},
	{
		item: {
			title: "Category",
			name: "category",
			type: "select",
			selectOptions: [
				"<--select-->",
				"Laptop",
				"Server",
				"Mobile",
				"Accessories"
			]
		}
	},
	{
		item: {
			title: "Status",
			name: "status",
			type: "select",
			selectOptions: [
				"<--select-->",
				"In Used",
				"Not Use",
				"Broken"
			]
		}
	},
	{
		item: {
			title: "Specs",
			name: "specs",
			type: "text",
		}
	},
	{
		item: {
			title: "Purchase Date",
			name: "purchase_date",
			type: "date",
		}
	},
]

