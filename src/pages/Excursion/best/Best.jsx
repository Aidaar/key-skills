import React from 'react'
import art1 from '../../../assets/excursion/img.jpeg'
import art2 from '../../../assets/excursion/img1.jpg'
import art3 from '../../../assets/excursion/img2.jpeg'

import './Best.scss'

const Best = () => {
	return (
		<div className='best' id='best'>
			<div className='container'>
				<h2>Рассказываем о корпоративной культуре</h2>
				<span className='line'></span>
				<div className='content'>
					<div className='card'>
						<img src={art1} alt='apt1' />
					</div>
					<div className='card'>
						<img src={art2} alt='art2' />
					</div>
					<div className='card'>
						<img src={art3} alt='art3' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Best
