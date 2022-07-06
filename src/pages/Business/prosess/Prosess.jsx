import React from 'react'
// import user1 from '../../assets/cricket.png'
// import user2 from '../../assets/bugupress.png'
// import user3 from '../../assets/balastan.png'
// import user4 from '../../assets/FishToktogul.png'

import './Prosess.scss'

const Prosess = () => {
	return (
		<div className='prosess' id='prosess'>
			<div className='container'>
				<h2>Как мы работаем над бизнес-планами?</h2>
				<span className='line'></span>
				<div className='content'>
					<div className='card'>
						{/* <img src={user1} alt='user1' /> */}
						<p>
							<span>Сначала мы изучим ваш проект</span>
						</p>
						<p>
							Разработка бизнес-плана начинается с того, чтобы разобраться в
							проекте в достаточной степени, чтобы понять его, задать вам
							правильные вопросы и затем подготовить описание для третьих лиц.
						</p>
					</div>
					<div className='card'>
						{/* <img src={user2} alt='user2' /> */}
						<p>
							<span>Затем соберем исходные данные</span>
						</p>
						<p>
							Обычно у нас уже есть 50-80% необходимых данных для разработки
							вашего бизнес-плана. Совместными усилиями мы доведем их объем до
							100% и быстро закончим работу.
						</p>
					</div>
					<div className='card'>
						{/* <img src={user3} alt='user3' /> */}
						<p>
							<span>Проведем финансовые расчеты</span>
						</p>
						<p>
							Наши финансовые модели успешно выдерживают проверку в крупных
							государственных банках, фондах, особых экономических зонах и
							иностранных финансовых институтах.
						</p>
					</div>
					<div className='card'>
						{/* <img src={user4} alt='user4' /> */}
						<p>
							<span>
								Напишем текстовую часть бизнес-плана. Принцип: никакой воды
							</span>
						</p>
						<p>
							Мы пишем бизнес-планы "с 0" и включаем в них только ту информацию,
							которая требуется. И не засоряем их ненужными текстами, делающими
							бизнес-план толстым документом.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Prosess
