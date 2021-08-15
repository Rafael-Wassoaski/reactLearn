import NotesList from "./components/NotesList";
import CreationForm from "./components/CreationForm";
import CategoryList from './components/CategoryList';
import "./assets/App.css";
import './assets/index.css';
import {Component} from "react";
import Category from './data/Category';
import NotesArrayList from './data/NotesArrayList';

class App extends Component {

    constructor(props) {
        super(props);
        this.categories = new Category();
        this.notes = new NotesArrayList();
    }

    render() {
        return (
            <section className="conteudo">
                <CreationForm
                    categories = {this.categories}
                    createNote={this.notes.createNote.bind(this.notes)}
                />
                <main className='conteudo-principal'>
                    <CategoryList
                        categories={this.categories}
                        createCategory={this.categories.createCategory.bind(this.categories)}
                    />
                    <NotesList
                        apagarNota={this.notes.deleteNote.bind(this.notes)}
                        notes={this.notes}
                    />
                </main>

            </section>
        );
    }
}

export default App;
