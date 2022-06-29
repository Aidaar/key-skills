// import React from 'react'
// import './Partners.scss'
// import Carousel from 'react-elastic-carousel'

// export default function Partners() {
// 	const breakPoints = [{ width: 1200, itemsToShow: 8 }]
// 	return (
// 		<div className='Partners'>
// 			<div>
// 				<span>Slider that slides one card at a time</span>
// 				<Carousel breakPoints={breakPoints}>
// 					<Item>1</Item>
// 					<Item>2</Item>
// 					<Item>3</Item>
// 					<Item>4</Item>
// 					<Item>5</Item>
// 					<Item>6</Item>
// 					<Item>7</Item>
// 					<Item>8</Item>
// 				</Carousel>
// 			</div>
// 		</div>
// 	)
// }


import React from 'react'
import ReactDOM from 'react-dom'

class Dropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: 'coconut' }

		// this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	//   handleChange(event) {
	//     this.setState({ value: event.target.value });
	//   }

	handleSubmit(event) {
		alert('Your favorite flavor is: ' + this.state.value)
		event.preventDefault()
	}

	handleChange = event => {
		this.setState({ value: event.target.value })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<select value={this.state.value} onChange={this.handleChange}>
						<option value='grapefruit'>Grapefruit</option>
						<option value='lime'>Lime</option>
						<option value='coconut'>Coconut</option>
						<option value='mango'>Mango</option>
					</select>
				</label>
			</form>
		)
	}
}

export default Dropdown