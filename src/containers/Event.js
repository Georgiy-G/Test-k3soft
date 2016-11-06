import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'
import { getEvent } from '../actions/getEvent'
import Events from '../containers/Events'
import EventFull from '../components/EventFull'


class Event extends Component {
	componentDidMount() {
		this.props.actions.getEvent(this.props.params.id)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.params.id !== this.props.params.id) {
			this.props.actions.getEvent(nextProps.params.id)
		}
	}

	render() {
		const { event } = this.props.event
		return (
			<div>
				<Events />
				<EventFull event={event} />
				
			</div>
		)
	}
}

Event.propTypes = {
  event: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    event: state.event
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({getEvent}, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Event))