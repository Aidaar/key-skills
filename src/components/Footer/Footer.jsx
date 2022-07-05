import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

import email from '../../assets/footer/email.svg'
import teleg from '../../assets/footer/telegram.svg'
import whats from '../../assets/footer/whatsApp.svg'
import inst from '../../assets/footer/instagram.svg'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='container'>
				<ul>
					<li className='nav-item'>
						<Link to='/'>Главная</Link>
					</li>
					<li className='nav-item'>
						<a
							href='https://web.whatsapp.com/'
							className='footer-desc'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img className='footer__logo' src={whats} alt='' />
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='https://desktop.telegram.org/'
							className='footer-desc'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img className='footer__logo' src={teleg} alt='' />
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='https://www.instagram.com/'
							className='footer-desc'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img className='footer__logo' src={inst} alt='' />
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='https://www.google.com/intl/ru/gmail/about/'
							className='footer-desc'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img className='footer__logo' src={email} alt='' />
						</a>
					</li>
				</ul>
				<div className='bottom'>
					<span className='line'></span>
					<p>2022 Execute, Key Skills</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
