import React, { Component } from 'react'
import { Link } from 'react-router'

export default class EventsList extends Component {
	render() {

		let events = this.props.events

		return (
			<div>
				{Object.keys(events).length !== 0 ?
					<ol>
						{events.items.map((item)=>{
							return ( 
								<li key={item.id}>
									<Link to={`/${item.id}`}> {item.name}</Link>
								</li> 
							)
						})}
					</ol>:
					<p>Загрузка данных...</p>
				}
			</div>
		)
	}
}