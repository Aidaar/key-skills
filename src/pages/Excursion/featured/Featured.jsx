import React from 'react'
import './Featured.scss'

import img1 from '../../../assets/excursion/img2.jpeg'
import img2 from '../../../assets/excursion/img3.jpeg'
import img3 from '../../../assets/excursion/img4.jpeg'

const Featured = () => {
	return (
		<div className='featured' id='featured'>
			<h2 className='featured-text'>Возможности в кыргызстане</h2>
			<p className='featured-text'>
				Показываем какие возможности есть у нас для бизнеса и для карьеры
			</p>
			<div className='container'>
				<div className='content'>
					<div className='card'>
						<img src={img3} alt='apt1' />
					</div>
				</div>
				<div className='content-bottom'>
					<div className='card card-bottom'>
						<img src={img1} alt='apt1' />
					</div>
					<div className='card card-bottom'>
						<img src={img2} alt='apt1' />
					</div>
					<div className='card card-bottom'>
						<img src={img3} alt='apt1' />
					</div>
					<div className='card card-bottom'>
						<img src={img1} alt='apt1' />
					</div>
				</div>
				<div className='content-desc'>
					<div className='cart'>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Excepturi, sint aperiam dolore quia incidunt debitis quos est
							mollitia quod explicabo assumenda eligendi maiores, quasi iure
							unde obcaecati corrupti adipisci fuga dolor recusandae laborum
							quas! Distinctio, rem? Tempore saepe esse porro labore doloremque
							beatae in vel unde dolore vitae, recusandae corporis.Lorem ipsum
							dolor, sit amet consectetur adipisicing elit,ipsum dolor, sit amet
							consectetur adipisicing elit. Excepturi, sint aperiam dolore quia
							incidunt debitis quos est mollitia quod explicabo assumenda
							eligendi maiores, quasi iure unde obcaecati corrupti adipisci fuga
							dolor recusandae laborum quas! Distinctio, rem? Tempore saepe esse
							porro labore doloremque beatae in vel unde dolore vitae,
							recusandae corporis.Lorem ipsum dolor, sit amet consectetur
							adipisicing elit.
						</p>
					</div>
				</div>
				{/* <div className='col-2'>
					<div className='card'>
						<img src={img1} alt='apt1' />
					</div>
				</div>
				<div className='col-2 col-right'>
					<div className='card'>
						<img src={img2} alt='art2' />
					</div>
					<div className='card'>
						<img src={img3} alt='art3' />
					</div>
				</div> */}
				{/*  */}
			</div>
		</div>
	)
}

export default Featured

