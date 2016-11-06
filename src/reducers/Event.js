import {GET_SUCCESS_EVENTID,  GET_FAILURE_EVENTID} from '../constants/Events'

const initialState = {
	event: {},
	error: ''
}

export default function event(state = initialState, action) {

	switch (action.type) {

    case GET_SUCCESS_EVENTID:
      return { ...state, event: action.payload }

    case GET_FAILURE_EVENTID:
      return { ...state, error: action.payload } 

    default:
      return state;
  }
}