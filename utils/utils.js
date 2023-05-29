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
			type: "text",
		}
	},
	{
		item: {
			title: "User",
			type: "text",
		}
	},
	{
		item: {
			title: "Department",
			type: "text",
		}
	},
	{
		item: {
			title: "Computer Name",
			type: "text",
		}
	},
	{
		item: {
			title: "Serial No.",
			type: "text",
		}
	},
	{
		item: {
			title: "Category",
			type: "select",
			selectOptions: [
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
			type: "select",
			selectOptions: [
				"In Used",
				"Not Use",
				"Broken"
			]
		}
	},
	{
		item: {
			title: "Specs",
			type: "text",
		}
	},
	{
		item: {
			title: "Purchase Date",
			type: "date",
		}
	},
]

