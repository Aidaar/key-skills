import React from 'react'
import About from './About/About'
import Hero from './Hero/Hero'
import Partners from './Partners/Partners'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Testimonials />
			<Partners />
		</>
	)
}

export { Home }
