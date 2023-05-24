"use client";

import { useEffect, useState } from "react";



const Record = () => {

	const [devices, setDevices] = useState([]);
	const [keys, setKeys] = useState([])


	useEffect(() => {

		const fetchPosts = async () => {
			const response = await fetch('/api/devices')
			const data = await response.json()

			for (let i = 0; i < data.length; i++) {
				const obj = data[i]
				const keys = Object.keys(obj)
				setKeys(keys)
			}
			setDevices(data)
		}

		fetchPosts()
	}, [])
	return (
		<div>
			{keys.map(key => (
				<div>
					{key}
				</div>
			))}
		</div>
	)
}

export default Record
