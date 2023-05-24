import ItemsTable from '@components/ItemsTable'
import SideMenu from '@components/SideMenu'
import React from 'react'

const Home = () => {
	return (
		<div className='grid ml-2 mt-10'>

			<div className='bg-blue-950 h-full w-[200px] absolute left-0 top-0'>
				<SideMenu />
			</div>
			<div className='ml-[200px] overflow-x-auto overflow-hidden'>
				<ItemsTable />
			</div>
		</div>

	)
}

export default Home
