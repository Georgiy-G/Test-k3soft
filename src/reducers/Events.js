import { GET_SUCCESS_EVENTS, GET_FAILURE_EVENTS } from '../constants/Events'

const initialState = {
	events: {}
}

export default function events(state = initialState, action) {
	switch(action.type) {
		case GET_SUCCESS_EVENTS:
			return {...state, events: action.payload}

		case GET_FAILURE_EVENTS:
			return {...state, events: action.payload}

		default:
			return state
	}
}