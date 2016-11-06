import React from 'react'
import App from './components/App'
import Events from './containers/Events'
import Event from './containers/Event'

import { Route, IndexRoute } from 'react-router'

export const routes = (
	<div>
		<Route path='/' component={App}>
			<IndexRoute component={Events} />
			<Route path='/:id' component={Event} />
		</Route>
	</div>
)