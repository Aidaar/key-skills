import React from 'react'
import sanjar from '../../assets/about/sanjar.jpeg'
import './About.scss'

const About = () => {
	return (
		<div className='about' id='about'>
			<div className='container'>
				<div className='col-2'>
					<img src={sanjar} alt='john' className='about__img' />
				</div>
				<div className='col-2'>
					<h2>О нас</h2>
					<span className='line'></span>
					<p>
						Key Skills - опытная, динамично развивающаяся компания. Специалисты
						нашей компании, используя свой более чем 10-летний опыт, постоянно
						внедряют новые инструменты и методы, позволяющие совершенствовать
						рабочий процесс и дающие возможность получения качественного и
						быстрого результата с соблюдением принципов конфиденциальности и
						справедливости.
					</p>
					<p>
						Я Санжар Абакиров , сооснователь и генеральный директор компании Key
						Skills, имея собственную основательную базу данных по рынку
						промышленных предприятий, готов дать Вам необходимую консультацию о
						тенденциях его изменения.
					</p>
					{/* <button className='button'>Explore More</button> */}
				</div>
			</div>
		</div>
	)
}

export default About
