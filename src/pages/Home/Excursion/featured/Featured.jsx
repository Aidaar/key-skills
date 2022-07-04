import React from 'react'

import './Featured.scss'

import House1 from '../../../assets/excursion/img.jpeg'
import Bed1 from '../../../assets/excursion/img2.jpeg'
import Bed2 from '../../../assets/excursion/img3.jpeg'
import Kitchen from '../../../assets/excursion/img4.jpeg'
import Bathroom from '../../../assets/excursion/img5.jpeg'

import House2 from '../../../assets/excursion/img6.jpeg'
import Bed3 from '../../../assets/excursion/img7.jpeg'
import Bed4 from '../../../assets/excursion/img8.jpeg'
import Bathroom2 from '../../../assets/excursion/img9.jpeg'
import LivingRoom from '../../../assets/excursion/img.jpeg'

const Featured = () => {
	return (
		<div className='featured'>
			<h1 className='featured-text'>Возможности в кыргызстане</h1>
			<p className='featured-text'>
				Показываем какие возможности есть у нас для бизнеса и для карьеры
			</p>
			<div className='container'>
				<img className='span-3 image-grid-row-2' src={House1} alt='' />
				<img src={Bed1} alt='' />
				<img src={Bed2} alt='' />
				<img src={Kitchen} alt='' />
				<img src={Bathroom} alt='' />
				{/* <div className='span-3 img-details'>
					<div className='top'>
						<h2>123 Acme St. Dallas, TX</h2>
						<p>House for Sale</p>
						<p className='price'>$2,677,000</p>
					</div>
					<div className='info-grid'>
						<div>
							<div className='info'>
								<p className='bold'>Bedrooms:</p>
								<p>5</p>
							</div>
							<div className='info'>
								<p className='bold'>Bathrooms:</p>
								<p>7</p>
							</div>
						</div>
						<div>
							<div className='info'>
								<p className='bold'>Square Feet:</p>
								<p>8,138</p>
							</div>
							<div className='info'>
								<p className='bold'>Est Payment:</p>
								<p>$14,797/mo</p>
							</div>
						</div>
					</div>
				</div> */}
				<div className='span-2 right-img-details'>
					<p>
						{/* A beautiful modern day home in the city with a full-size pool.
						Spacious and luxurious home located in Texas. Including media room,
						workout facility, and built-in sauna.{' '} */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint quidem, et dolorum quisquam id culpa provident nobis accusamus! Vero labore cupiditate similique tempore repellat facere voluptatem sit hic, blanditiis eveniet mollitia veniam at fugiat laboriosam saepe provident nemo accusamus aperiam? Voluptates aliquid possimus repellendus voluptatibus quis officiis quidem voluptate?
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam provident beatae eum molestiae eos architecto doloribus. Quibusdam nihil quisquam voluptatum unde voluptatibus nulla commodi eligendi nostrum, atque corporis minus delectus impedit blanditiis nisi id cupiditate accusamus quia odit aspernatur ipsum quasi. Maiores suscipit fuga doloribus ipsam praesentium! Assumenda fuga excepturi ipsa eius neque cumque eaque! Numquam dolor hic aspernatur est, minima fugit sunt doloribus nemo cum suscipit aperiam dolorum veritatis aut perferendis quibusdam quasi ut ad impedit iste facilis odit! Possimus repellendus commodi ipsum consequuntur dolor distinctio, a nisi beatae? Sit autem dicta aut corrupti eum repudiandae minima natus adipisci alias enim voluptatibus similique expedita libero quidem accusamus, veritatis quam pariatur laudantium cupiditate unde sequi accusantium voluptatum doloremque. Rerum praesentium earum voluptates, sapiente delectus veritatis omnis quae placeat aperiam reprehenderit, temporibus harum quasi corrupti perspiciatis sit. Eum ipsam hic temporibus sunt voluptatem. Nihil porro saepe, omnis quo perspiciatis hic aperiam!
					</p>
					{/* <button className='btn'>View Listing</button> */}
				</div>
			</div>

			{/* Section section */}
			<div className='container'>
				<img className='order-2' src={Bed3} alt='' />
				<img className='order-3' src={Bed4} alt='' />

				<img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />

				<img className='order-4' src={Bathroom2} alt='' />
				<img className='order-5' src={LivingRoom} alt='' />

				<div className='span-2 right-img-details order-7'>
					<p>
						{/* A beautiful modern day home in the city with a full-size pool.
						Spacious and luxurious home located in Texas. Including media room,
						workout facility, and built-in sauna.{' '} */}
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, sint aperiam dolore quia incidunt debitis quos est mollitia quod explicabo assumenda eligendi maiores, quasi iure unde obcaecati corrupti adipisci fuga dolor recusandae laborum quas! Distinctio, rem? Tempore saepe esse porro labore doloremque beatae in vel unde dolore vitae, recusandae corporis.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea necessitatibus voluptatum magnam natus, temporibus nisi nam minus sapiente rem perferendis id sequi in soluta excepturi alias. Odio excepturi voluptatibus dolore eveniet recusandae, deleniti illum pariatur autem a molestiae vero, aspernatur praesentium eligendi veniam voluptatum deserunt iure quam amet error repellendus. Aspernatur impedit facere architecto ad mollitia accusantium nesciunt! Dicta numquam, quia laudantium eum tenetur expedita consequuntur excepturi, a officiis maxime, cum iure reprehenderit! Labore aliquid pariatur assumenda cupiditate. Optio architecto tempore ducimus iste deserunt, voluptas dolores perspiciatis, facere quibusdam animi autem ut veritatis expedita magnam voluptatibus! Quibusdam debitis quos quis aperiam, esse corporis tempora consequatur quod! Reprehenderit iure cum exercitationem nam beatae, consectetur quos quisquam quis itaque incidunt autem, necessitatibus ducimus delectus vel earum dolor laudantium error aliquam suscipit! Tempora odit, nisi esse reprehenderit autem possimus hic debitis commodi praesentium libero soluta est rerum veritatis molestiae sequi officia nulla deserunt?
					</p>
					{/* <button className='btn'>View Listing</button> */}
				</div>

				{/* <div className='span-3 img-details order-6'>
					<div className='top'>
						<h2>123 Acme St. Dallas, TX</h2>
						<p>House for Sale</p>
						<p className='price'>$2,677,000</p>
					</div>
					<div className='info-grid'>
						<div>
							<div className='info'>
								<p className='bold'>Bedrooms:</p>
								<p>5</p>
							</div>
							<div className='info'>
								<p className='bold'>Bathrooms:</p>
								<p>7</p>
							</div>
						</div>
						<div>
							<div className='info'>
								<p className='bold'>Square Feet:</p>
								<p>8,138</p>
							</div>
							<div className='info'>
								<p className='bold'>Est Payment:</p>
								<p>$14,797/mo</p>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default Featured
