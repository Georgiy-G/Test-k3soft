import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getEvents } from '../actions/getEvents'
import EventsList from '../components/EventsList'


class Events extends React.Component {

	componentDidMount = () => {
		this.props.actions.getEvents()
	}

	render() {
			const {events} = this.props.events
		return (
			<div>
				<EventsList events= {events} />			
			</div>
		)
	}	
}

Events.propTypes = {
  events: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    events: state.events
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({getEvents}, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events))