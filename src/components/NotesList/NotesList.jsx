import React, { Component } from 'react';
import ListItem from '../ListItem/';
import './estilo.css';


class NotesList extends Component {
	constructor(props) {
		super(props);
		this.state = {notes: []}
		this._newNote = this._newNote.bind(this);
	}

	componentDidMount() {
		this.props.notes.startObserve(this._newNote);
	}

	componentWillUnmount() {
		this.props.notes.stopObserve(this._newNote);
	}

	_newNote(notes){
		this.setState({...this.state, notes})
	}

	render() {
		return (
			<ul className="noteList">
				{
					this.state.notes.map((note, index) => {
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