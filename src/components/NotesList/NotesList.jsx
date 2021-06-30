import React, {Component} from "react";
import ListItem from "../ListItem/";
import './estilo.css'


class NotesList extends Component {
    render() {
        return (
            <ul className='noteList'>
                {
                    Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria, index) =>{
                        return (
                            <li key={index}
                                className='noteList-notes'>

                                <div>{categoria}</div>
                                <ListItem/>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default NotesList;