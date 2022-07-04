import React, { useState, useRef } from 'react'

import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/header/keySkillsLogo.png'

import './Navbar.scss'
import DropMenu from './DropDown/DropMenu'
const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const closeMenu = () => setClick(false)
	return (
		<div className='header'>
			<nav className='navbar'>
				<a href='/' className='logo'>
					<img src={logo} alt='logo' />
				</a>
				<div className='hamburger' onClick={handleClick}>
					{click ? (
						<FaTimes size={30} style={{ color: '#ffffff' }} />
					) : (
						<FaBars size={30} style={{ color: '#ffffff' }} />
					)}
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link to='/' onClick={closeMenu}>
							Главное
						</Link>
					</li>
					<li>
						<DropMenu />
					</li>
					<li className='nav-item hamburger'>
						<a href=''>Бизнес план </a>
					</li>
					<li className='nav-item hamburger'>
						<a href=''>Свободный склад</a>
					</li>
					<li className='nav-item hamburger'>
						<a href=''>Экскурсии</a>
					</li>
					<li className='nav-item hamburger'>
						<a href=''>Рекрутинг</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
