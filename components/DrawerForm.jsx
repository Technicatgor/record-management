import React from 'react'

const DrawerForm = ({ isOpen, setIsOpen }) => {
	return (
		<div>
			<div className={`drawer-container ${isOpen ? 'open' : ''}`}>
				<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setIsOpen(false)} >
					X
				</button>
				<div class="mt-6 mx-auto w-2/3 flex-col items-center justify-center">
					<label for="" class="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">Device Code</label>
					<input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>

			</div>
			{isOpen ? <div className='bg-black opacity-50 w-full h-full fixed top-0 left-0' onClick={() => setIsOpen(false)}>
			</div> : <></>}
		</div>
	)
}

export default DrawerForm
