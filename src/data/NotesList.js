export default class NotesArrayList{
	constructor() {
		this.notes = [];
		this._observers = [];
	}
	
	startObserve(handler){
		this._observers.push(handler);
	}
	
	notify(newData){
		for(const handler of this._observers){
			handler(newData);
		}
	}
	
	createNote(title, text, category){
		const newNote = new Note(title, text, category);
		this.notes.push(newNote);
		this.notify(this.notes);
	}
	
	deleteNote(index){
		this.notes.splice(index, 1);
	}
}

class Note{
	constructor(title, text, category) {
		this.text = text;
		this.title = title;
		this.category = category;
	}
}