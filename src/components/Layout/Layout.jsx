import {  Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'

// import './Layout.scss'

const Layout = () => {
	return (
		<>
			<Navbar />
			<main className='main	'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export { Layout }
