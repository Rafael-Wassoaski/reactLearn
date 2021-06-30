import React, {Component} from "react";
import './estilo.css';

class ListItem extends Component {
    render() {
        return (
                <section className="listItem">
                    <header className="listItemHeader">
                        <h3 className="listItemTitle">Título</h3>
                    </header>
                    <p className="listItemText">Escreva sua nota</p>
                </section>
        );
    }
}

export default ListItem;