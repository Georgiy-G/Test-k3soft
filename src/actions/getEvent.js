import {GET_SUCCESS_EVENTID,  GET_FAILURE_EVENTID} from '../constants/Events'

export function getEvent(id) {

	return (dispatch) => {
		fetch('http://api.itboost.org:88/app_dev.php/api/event/' + id)
			.then(r => r.json())
			.then(data => {
				dispatch({
					type: GET_SUCCESS_EVENTID,
					payload: data.response
				})
			})
			.catch(error => {
				dispatch({
					type: GET_FAILURE_EVENTID,
					payload: error
				})
			})
	}
}