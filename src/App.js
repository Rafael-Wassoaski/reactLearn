import NotesList from "./components/NotesList";
import CreationForm from "./components/CreationForm";
import CategoryList from './components/CategoryList';
import "./assets/App.css";
import './assets/index.css';
import {Component} from "react";
import Category from './data/Category';
import NotesArrayList from './data/NotesList';

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
                    categories = {this.categories.categories}
                    createNote={this.notes.createNote}
                />
                <main className='conteudo-principal'>
                    <CategoryList
                        categories={this.categories.categories}
                        createCategory={this.categories.createCategory}
                    />
                    <NotesList
                        apagarNota={this.notes.deleteNote}
                        notes={this.notes.notes}
                    />
                </main>

            </section>
        );
    }
}

export default App;
