import React, { Component } from 'react';
import ListItem from '../ListItem/';
import './estilo.css';


class NotesList extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<ul className="noteList">
				{
					this.props.notes.map((note, index) => {
						return (
							<li key={ index }
									className="noteList-notes">
								
								<div>{ note.title }</div>
								<ListItem
									index={ index }
									apagarNota={ this.props.apagarNota }
									title={ note.title }
									text={ note.text }
									category={ note.category }
								/>
							</li>
						);
					})
				}
			</ul>
		);
	}
}

export default NotesList;