import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './DropMenu.scss'

const DropMenu = () => {
	const [click, setClick] = useState(false)
	const closeDrop = () => setClick(!click)
	
	return (
		<div className='dropdown__menu'>
			<a className='drop__btn' onClick={closeDrop}>
				Услуги
			</a>

			<ul className={click ? 'dropdown active' : 'dropdown'}>
				<li className='drop__menu-item'>
					<Link to='business'>Бизнес план </Link>
				</li>
				<li className='drop__menu-item'>
					<Link to='warehouse'>Свободный склад</Link>
				</li>
				<li className='drop__menu-item'>
					<Link to='excursion'>Экскурсии</Link>
				</li>
				<li className='drop__menu-item'>
					<Link to='recruiting'>Рекрутинг</Link>
				</li>
			</ul>
		</div>
	)
}

export default DropMenu