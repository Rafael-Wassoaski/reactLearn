import React, { Component } from 'react';
import './estilo.css';

class CreationForm extends Component {
	
	constructor(props) {
		super(props);
		this.title = '';
		this.text = '';
		this.category = 'No category';
	}
	
	_handleTitleChance(event) {
		event.stopPropagation();
		this.title = event.target.value;
	}
	
	_handleTextChange(event) {
		event.stopPropagation();
		this.text = event.target.value;
	}
	
	_handleCategoryChange(event) {
		event.stopPropagation();
		this.category = event.target.value;
	}
	
	_createNote(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.createNote(this.title, this.text, this.category);
	}
	
	render() {
		return (
			<form className="form-cadastro"
						onSubmit={ this._createNote.bind(this) }
			>
				<select className="form-cadastro_input"
								onChange={ this._handleCategoryChange.bind(this) }>
					<option>No category</option>
					{ this.props.categories.map((category, index) => {
						return (
							<option key={ index }>
								{ category }
							</option>
						);
					}) }
				</select>
				<input type="text"
							 placeholder="Título"
							 className="form-cadastro_input"
							 onChange={ this._handleTitleChance.bind(this) }
				/>
				
				<textarea placeholder="Escreva sua nota"
									rows={ 15 }
									className="form-cadastro_input"
									onChange={ this._handleTextChange.bind(this) }
				/>
				
				<button
					className="form-cadastro_input form-cadastro_submit"
				>Criar nota
				</button>
			</form>
		);
	}
}

export default CreationForm;