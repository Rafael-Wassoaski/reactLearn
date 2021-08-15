export default class Category{
	constructor() {
		this.categories = [];
		this._observers = [];
	}
	
	createCategory(newCategory) {
		this.categories.push(newCategory);
		this.notify(this.categories);
	}
	
	startObserve(handler){
		this._observers.push(handler);
	}

	stopObserve(handler){
		this._observers = this._observers.filter(handle => handle !== handler);
	}
	
	notify(newData){
		for(const handler of this._observers){
			handler(newData);
		}
	}
}