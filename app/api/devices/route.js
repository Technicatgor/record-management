import { connection } from "@utils/db";

export const GET = async () => {
	try {
		const con = await connection()
		const [rows, fields] = await con.execute('SELECT * FROM nc_devices')

		return new Response(JSON.stringify(rows))

	} catch (error) {
		console.log(error)

	}
}

export const POST = async (req, res) => {
	try {
		const con = await connection()
		await con.execute('INSERT INTO `nc_devices` (`device_code`,`status`,`user`,`purchase_date`,`serial_number`,`department`,`specs`,`computer_name`,`category`) VALUES (?,?,?,?,?,?,?,?,?)', [req.device_code, req.status, req.users, req.purchase_date, req.serial_number, req.department, req.specs, req.computer_name, req.category], (error, results) => {
			if (error) return res.json({ error: error })
		})
	} catch (error) {
		console.log(error)

	}
}
