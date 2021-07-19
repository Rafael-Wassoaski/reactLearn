import NotesList from "./components/NotesList";
import CreationForm from "./components/CreationForm";
import CategoryList from './components/CategoryList';
import "./assets/App.css";
import './assets/index.css';
import {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            categories: []
        }
    }

    apagarNota(index) {
        const array = this.state.notes;
        const splitedArray = array.shift(index, 1);
        this.setState({notes: splitedArray});
    }

    createCategory(categoryText) {
        const newCategoryArray = [...this.state.categories, categoryText];
        const novoEstado = {...this.state, categories: newCategoryArray}
        this.setState(novoEstado);
    }

    createNote(title, text, category) {
        const newNoteArray = [...this.state.notes, {title, text, category}]
        const novoEstado = {...this.state, notes: newNoteArray}
        this.setState(novoEstado);
    }

    render() {
        return (
            <section className="conteudo">
                <CreationForm
                    categories = {this.state.categories}
                    createNote={this.createNote.bind(this)}
                />
                <main className='conteudo-principal'>
                    <CategoryList
                        categories={this.state.categories}
                        createCategory={this.createCategory.bind(this)}
                    />
                    <NotesList
                        apagarNota={this.apagarNota.bind(this)}
                        notes={this.state.notes}
                    />
                </main>

            </section>
        );
    }
}

export default App;
