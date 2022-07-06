import React from 'react'
import sanjar from '../../../assets/business/business-about.jpg'
import './About.scss'

const About = () => {
	return (
		<div className='about__business' id='about__business '>
			<div className='container'>
				<div className='col-2'>
					<img src={sanjar} alt='john' className='about__img' />
				</div>
				<div className='col-2'>
					<h2>Почему нам доверяют разработку бизнес-планов:</h2>
					<span className='line'></span>
							<p>Более 90% бизнес проектов успешно получили финансирование</p>
							<p>Богатый опыт бизнес-планирования в различных отраслях</p>
							<p>Высокая оценка проектов инвесторами</p>
							<p>Строгая конфиденциальность</p>
							<p>Бесплатные консультации после передачи проекта</p>
				</div>
			</div>
		</div>
	)
}

export default About
