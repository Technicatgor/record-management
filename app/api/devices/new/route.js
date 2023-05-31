import { connection } from "@utils/db";

export const POST = async (req, res) => {

	const {
		device_code,
		status,
		user,
		purchase_date,
		serial_number,
		department,
		specs,
		computer_name,
		category,
	} = await req.json()
	try {
		const con = await connection()
		await con.execute('INSERT INTO `nc_devices` (`device_code`,`status`,`user`,`purchase_date`,`serial_number`,`department`,`specs`,`computer_name`,`category`) VALUES (?,?,?,?,?,?,?,?,?)', [device_code, status, user, purchase_date, serial_number, department, specs, computer_name, category],
		)
		return new Response("Record created!", { status: 201 })
	} catch (error) {
		console.log(error)

	}
}
