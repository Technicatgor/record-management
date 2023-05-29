"use client"
import { headers } from '@utils/utils'
import React, { useEffect, useState } from 'react'
import DrawerForm from './DrawerForm'

const ItemsTable = () => {
	const [devices, setDevices] = useState([])
	const [isOpen, setIsOpen] = useState(false)

	useEffect(async () => {

		const fetchPosts = async () => {
			const response = await fetch('/api/devices')
			const data = await response.json()

			setDevices(data)
		}

		fetchPosts()

	}, [])
	return (
		<div >
			<div className="my-2">
				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-800" type="button" onClick={() => setIsOpen(true)}>
					Create Record
				</button>
			</div>
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						{headers.map((header, i) => (
							<th key={i} scope="col" className="px-6 py-3">
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{devices.map((device, i) => (
						<tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<td className="px-6 py-4 dark:text-white">
								{device.device_code}
							</td>
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								{device.computer_name}
							</th>
							<td className="px-6 py-4 ">
								{device.category}
							</td>
							<td className="px-6 py-4 dark:text-white">
								{device.user}
							</td>
							<td className="px-6 py-4 ">
								{device.department}
							</td>
							<td className="px-6 py-4 ">
								{device.serial_number}
							</td>
							<td className="px-6 whitespace-nowrap py-4 ">
								{device.status}
							</td>
							<td className="px-6 py-4 ">
								{JSON.stringify(device.specs)}
							</td>
							<td className="px-6 py-4 ">
								{device.purchase_date}
							</td>
							<td className="flex items-center px-6 py-4 space-x-3">
								<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
								<a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<DrawerForm isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}

export default ItemsTable
