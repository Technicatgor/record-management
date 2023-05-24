"use client"
import React from 'react'

const SideMenu = () => {
	const menu_items = [
		{ name: "Home" },
		{ name: "Devices" },
		{ name: "Profile" },
		{ name: "Sign Out" },
	]
	return (
		<div className='py-6 flex-col flex-center'>
			<ul className='menu_list'>
				{menu_items.map((item, i) => (
					<li key={i} className='my-3'>{item.name}</li>
				))}
			</ul>
		</div>
	)
}

export default SideMenu
