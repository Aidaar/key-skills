import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import img1 from '../../../assets/partners/FishToktogul.png'
import img2 from '../../../assets/partners/MegaStroy.png'
import img3 from '../../../assets/partners/FishToktogul.png'
import img4 from '../../../assets/partners/cricket.png'
import img5 from '../../../assets/partners/bugupress.png'
import img6 from '../../../assets/partners/balastan.png'
import img7 from '../../../assets/partners/UniStellar.png'
import img8 from '../../../assets/partners/MegaStroy.png'

import './Partners.scss'

 const Partners = () => {
	return (
		<div className='partners'>
			<div className='container'>
				<h2>ПАРТНЕРЫ</h2>
				<OwlCarousel className='owl-theme' loop margin={10} items='5' autoplay>
					<div className='item'>
						<img src={img1} alt='img' />
					</div>
					<div className='item'>
						<img src={img2} alt='img' />
					</div>
					<div className='item'>
						<img src={img3} alt='img' />
					</div>
					<div className='item'>
						<img src={img4} alt='img' />
					</div>
					<div className='item'>
						<img src={img5} alt='img' />
					</div>
					<div className='item'>
						<img src={img6} alt='img' />
					</div>
					<div className='item'>
						<img src={img7} alt='img' />
					</div>
					<div className='item'>
						<img src={img8} alt='img' />
					</div>
				</OwlCarousel>
			</div>
		</div>
	)
};


export default Partners