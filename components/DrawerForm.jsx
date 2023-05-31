"use client"
import { formTitles } from '@utils/utils'
import React, { useState } from 'react'

const DrawerForm = ({ isOpen, setIsOpen }) => {
	const [inputValue, setInputValue] = useState({})

	const handleChange = (e, data) => {
		const { name, value } = data || e.target

		setInputValue({
			...inputValue,
			[name]: value
		})

	}

	const handleSubmit = async (e) => {
		console.log(inputValue)
		e.preventDefault()
		await fetch('/api/devices/new', {
			method: 'POST',
			body: JSON.stringify(inputValue),
		})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<div>
			<div className={`drawer-container ${isOpen ? 'open' : ''}`}>
				<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm px-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setIsOpen(false)} >
					X
				</button>
				{formTitles.map((item, i) => {
					return (
						<div key={i} className="mt-6 mx-auto w-2/3 flex-col items-center justify-center">
							<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">
								{item.item.title}
							</label>
							{
								item.item.selectOptions ?
									<select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
										name={item.item.name}
										defaultValue={"<--select-->"}
										onChange={(e, data) => handleChange(e, data)}
									>
										{item.item.selectOptions?.map((option, i) => (
											<option
												key={i}
												disabled={option === "<--select-->"}
											>{option}</option>
										))}
									</select> :
									<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
										type={item.item.type}
										name={item.item.name}
										onChange={(e, data) => handleChange(e, data)}
										required />
							}
						</div>
					)
				}
				)}
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-800" type="button" onClick={(e) => handleSubmit(e)}>
						Submit
					</button>
				</div>
			</div>
			{isOpen ? <div className='bg-black opacity-50 w-full h-full fixed top-0 left-0' onClick={() => setIsOpen(false)}>
			</div> : <></>}
		</div>
	)
}

export default DrawerForm
