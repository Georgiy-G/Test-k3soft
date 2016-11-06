import React, { Component } from 'react'
import moment from 'moment'

export default class EventFull extends Component {
	render() {

		let event = this.props.event

		return (
			<div>
				{(Object.keys(event).length !== 0) ?
					<ul>
						<li><img src={`http://api.itboost.org:88/${event.event.avatar.path}`} /></li>
						<li >{moment(event.event.created_at).format('LLL')}</li>
						<li dangerouslySetInnerHTML={{__html: event.event.description}}></li>
					</ul>:
					<p>Загрузка данных...</p>
				}
			</div>
		)
	}
}