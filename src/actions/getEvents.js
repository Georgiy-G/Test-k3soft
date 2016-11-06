import { GET_SUCCESS_EVENTS, GET_ERROR_EVENTS } from '../constants/Events'

export function getEvents() {

	return (dispatch) => {
		fetch('http://api.itboost.org:88/app_dev.php/api/events')
			.then(r => r.json())
			.then(data => {
				dispatch({
					type: GET_SUCCESS_EVENTS,
					payload: data.response

				})
			})
			.catch(error => {
				dispatch({
					type: GET_ERROR_EVENTS,
					payload: error
				})
			})
	}
}
