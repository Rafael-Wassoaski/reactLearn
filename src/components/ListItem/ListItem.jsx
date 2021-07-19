import React, { Component } from 'react';
import './estilo.css';
import { ReactComponent as DeleteSvg } from '../../assets/images/delete_black_24dp.svg';

class ListItem extends Component {
	
	constructor(props) {
		super(props);
	}
	
	apagarNota() {
		this.props.apagarNota(this.props.index);
	}
	
	
	render() {
		return (
			<section className="listItem">
				<header className="listItemHeader">
					<h3 className="listItemTitle">{ this.props.title }</h3>
					<DeleteSvg onClick={ this.apagarNota.bind(this) }/>
					<h4>{ this.props.category }</h4>
				</header>
				<p className="listItemText">{ this.props.text }</p>
			</section>
		);
	}
}

export default ListItem;