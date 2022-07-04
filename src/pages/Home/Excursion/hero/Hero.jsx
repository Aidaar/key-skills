import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import './Hero.scss'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='content'>
				<h1>Кыргызстан — бесконечно уникален!</h1>
				<p className='search-text'>
					{' '}
					Промышленные туры и производственные экскурсии{' '}
				</p>
				{/* <form className='search'>
						<div>
							<input type='text' placeholder='Enter Keyword..' />
						</div>
						<div className='radio'>
							<input type='radio' checked />
							<label>Buy</label>
							<input type='radio' />
							<label>Rent</label>
							<button type='submit'><AiOutlineSearch className='icon'/></button>
						</div>
					</form> */}
			</div>
		</div>
	)
}

export default Hero
