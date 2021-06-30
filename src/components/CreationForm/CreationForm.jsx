import React, {Component} from "react";
import './estilo.css'

class CreationForm extends Component {
    render() {
        return (
            <form>
                <input type='text'
                       placeholder='Título'
                       className='form-cadastro_input'/>

                <textarea placeholder='Escreva sua nota'
                          rows={15}
                          className='form-cadastro_input'/>

                <button
                    className='form-cadastro_input form-cadastro_submit'
                >Criar nota</button>
            </form>
        )
    }
}

export default CreationForm;