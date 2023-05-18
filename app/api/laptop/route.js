import { connection } from "@utils/db";

export const GET = async () => {
	try {
		const con = await connection()
		const [rows, fields] = await con.execute('SELECT * FROM nc_z830___laptop')

		return new Response(JSON.stringify(rows))

	} catch (error) {
		console.log(error)

	}
}
