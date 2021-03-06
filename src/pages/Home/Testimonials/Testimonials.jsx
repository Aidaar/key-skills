import React from 'react'
// import user1 from '../../assets/cricket.png'
// import user2 from '../../assets/bugupress.png'
// import user3 from '../../assets/balastan.png'
// import user4 from '../../assets/FishToktogul.png'

import './Testimonials.scss'

const Testimonials = () => {
	return (
		<div className='testimonials' id='testimonials'>
			<div className='container'>
				<h2>Отзывы</h2>
				<span className='line'></span>
				<div className='content'>
					<div className='card'>
						{/* <img src={user1} alt='user1' /> */}
						<p>
							It is not every day that you come across a passionate and
							trustworthy financial advisor. John Doe is true professional who
							does his work really well. Thanks John!
						</p>
						<p>
							<span>Johnson.M.J.</span>
						</p>
						<p>Director of "Financial Times"</p>
					</div>
					<div className='card'>
						{/* <img src={user2} alt='user2' /> */}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
							neque voluptatibus autem nemo asperiores, voluptatum magni, sunt
							quis debitis minus ut quia fugiat. Libero, blanditiis?
						</p>
						<p>
							<span>Carol Harper</span>
						</p>
						<p>Director at Risktec Solutions Ltd</p>
					</div>
					<div className='card'>
						{/* <img src={user3} alt='user3' /> */}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
							neque voluptatibus autem nemo asperiores, voluptatum magni, sunt
							quis debitis minus ut quia fugiat. Libero, blanditiis?
						</p>
						<p>
							<span>Carol Harper</span>
						</p>
						<p>Director at Risktec Solutions Ltd</p>
					</div>
					<div className='card'>
						{/* <img src={user4} alt='user4' /> */}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
							neque voluptatibus autem nemo asperiores, voluptatum magni, sunt
							quis debitis minus ut quia fugiat. Libero, blanditiis?
						</p>
						<p>
							<span>Snow.J.R.</span>
						</p>
						<p>Managing Director of BPW Global</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
