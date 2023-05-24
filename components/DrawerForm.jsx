import React from 'react'

const DrawerForm = ({ isOpen, setIsOpen }) => {

	return (
		<div>
			<div className={`drawer-container ${isOpen ? 'open' : ''}`}>
				<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm px-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setIsOpen(false)} >
					X
				</button>
				<div className="mt-6 mx-auto w-2/3 flex-col items-center justify-center">
					<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">Device Code</label>
					<input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">User</label>
					<input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
					<input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">Computer Name</label>
					<input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">Serial No.</label>
					<input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
					<select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
						<option>Laptop</option>
						<option>Server</option>
						<option>Mobile</option>
						<option>Accessories</option>
					</select>
				</div>
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
					<select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
						<option>In Used</option>
						<option>Not Use</option>
						<option>Broken</option>
					</select>
				</div>
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">Specs</label>
					<input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<label className="block mb-1 ml-2 text-sm font-medium text-gray-900 dark:text-white">Purchase date</label>
					<input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>
				<div className="mt-4 mx-auto w-2/3 flex-col items-center justify-center">
					<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-800" type="button" onClick={() => setIsOpen(true)}>
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
