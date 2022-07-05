import React from 'react'
import './Hero.scss'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='content'>
				<p>Позвоните нам</p>
					<a
						href='tel:+996995959595'
						className='hero__tel'
						target='_blank'
						rel='noopener noreferrer'
					>
						0553 513 515
					</a>
				<p>Key Skills</p>
				<p>Ключ к вашему успеху в наших руках!</p>
			</div>
		</div>
	)
}

export default Hero
