import React, { useState, useRef } from 'react'
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
					<a href=''>Бизнес план </a>
				</li>
				<li className='drop__menu-item'>
					<a href=''>Свободный склад</a>
				</li>
				<li className='drop__menu-item'>
					<a href=''>Экскурсии</a>
				</li>
				<li className='drop__menu-item'>
					<a href=''>Рекрутинг</a>
				</li>
			</ul>
		</div>
	)
}

export default DropMenu