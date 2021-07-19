import React, {Component} from "react";

class CategoryList extends Component {

    constructor(props) {
        super(props);
    }

    _createNewCategory(evento){
        if(evento.keyCode === 13){
            const title = evento.target.value;
            this.props.createCategory(title);
        }
    }

    render() {
        return (
            <section>
                <ul>
                    {this.props.categories.map((element, index)=>{
                        return(
                            <li>{element}</li>
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