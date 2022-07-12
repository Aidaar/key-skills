import React from 'react'
import AboutWarehouse from './about/About'
import Hero from './Hero/Hero'
import Services from './Services/Services'

import './Warehouse.scss'

const Warehouse = () => {
	return (
		<section className='warehouse'>
			<Hero />
			<Services />
			<AboutWarehouse />
		</section>
	)
}

export { Warehouse }