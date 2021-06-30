import NotesList from "./components/NotesList";
import CreationForm from "./components/CreationForm";
import "./assets/App.css";
import './assets/index.css';
function App() {
    return (
        <section className="conteudo">
            <CreationForm/>
            <NotesList/>
        </section>
    );
}

export default App;
