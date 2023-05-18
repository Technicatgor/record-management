import mysql from 'mysql2/promise'

export const connection = async () => {
	return await mysql.createConnection({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		database: process.env.MYSQL_DATABASE,
		password: process.env.MYSQL_PASSWORD,
	})
};
