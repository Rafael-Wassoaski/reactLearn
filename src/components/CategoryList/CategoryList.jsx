import React, {Component} from "react";

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {categories : []}
        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount() {
        this.props.categories.startObserve(this._newCategories);
    }

    componentWillUnmount() {
        this.props.categories.stopObserve(this._newCategories);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories});
    }

    _createNewCategory(evento) {
        if (evento.keyCode === 13) {
            const title = evento.target.value;
            this.props.createCategory(title);
        }
    }

    render() {
        return (
            <section>
                <ul>
                    {this.state.categories.map((element, index) => {
                        return (
                            <li key={ index }>{element}</li>
                        )
                    })}
                </ul>
                <input type='text'
                       placeholder='Nova categoria'
                       onKeyUp={this._createNewCategory.bind(this)}
                />
            </section>

        )
    }
}

export default CategoryList;