import React, { Component } from 'react';

class Demo extends Component {
	constructor(props) {
		super();
		this.state = { color: 'yellow'}
	}
	render() {
		return <h1>{this.state.color}</h1>;
	}
}

export default Demo;
