import React from 'react'
import About from './About/About'
import Best from './best/Best'
import Hero from './Hero/Hero'

const Recruiting = () => {
	return (
		<section className='recruiting'>
			<Hero />
			<Best />
			<About />
		</section>
	)
}

export  { Recruiting }