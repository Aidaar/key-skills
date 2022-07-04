import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Notfound } from './pages/Notfound/Notfound'
import Business from './pages/Business/Business'
import { Home } from './pages/Home/Home'
// import Excursion from './pages/Excursion/Excursion'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='business' element={<Business />} />
				{/* <Route path='excursion' element={<Excursion />} /> */}
				<Route path='*' element={<Notfound />} />
			</Route>
		</Routes>
	)
}

export default App
