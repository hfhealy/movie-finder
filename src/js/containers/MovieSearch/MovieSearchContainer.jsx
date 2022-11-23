import React from 'react';

import {
	updateSearch,
	getMovie
  } from './searchActions';

//class MovieSearchContainer extends React.Component 
export default class MovieSearchContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Movie Search Container</h1>
			</div>
		)
	}
}

//export default MovieSearchContainer;