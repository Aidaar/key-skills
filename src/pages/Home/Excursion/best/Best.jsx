import React, { Link } from 'react'

import Apt1 from '../../../assets/excursion/img.jpeg'
import Apt2 from '../../../assets/excursion/img1.jpg'
import Apt3 from '../../../assets/excursion/img2.jpeg'

import './Best.scss'

const Best = () => {
	return (
		<div className='best'>
			{/* <h1>Find Best Rated Properties</h1> */}
			<h1>Рассказываем о корпоративной культуре</h1>
			{/* <div>
				<p>
					<span className='bold'>All</span>
				</p>
				<p>Commercial</p>
				<p>Residential</p>  
				<p>Agricultural</p>
			</div> */}
			<div className='container'>
				<div className='best__img-block'>
					<img src={Apt1} alt='' />
					<img src={Apt2} alt='' />
					<img src={Apt3} alt='' />
				</div>
			</div>
			{/* <button className='btn'>View All</button> */}
		</div>
	)
}

export default Best
