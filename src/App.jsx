import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import EditComponent from './components/EditComponent';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: this.props.initialData
        };

        this._nextId = this.state.elements.length;

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    nextId() {
        return this._nextId += 1;
    }

    handleAdd(title) {
        const element = {
            id: this.nextId(),
            title,
            cart: false
        };

        const elements = [...this.state.elements, element];

        this.setState({ elements });
    }

    handleDelete(id) {
        const index = this.state.elements.findIndex(element => element.id === id);
        const elements = [
            ...this.state.elements.slice(0, index),
            ...this.state.elements.slice(index + 1)
        ];

        this.setState({ elements });
    }

    handleToggle(id) {
        const elements = this.state.elements.map(element => {
            if (element.id !== id) {
                return element;
            }

            return Object.assign({}, element, {
                cart: !element.cart
            });
        });

        this.setState({ elements });
    }

    render() {
        const elements = this.state.elements;

        return (
            <main>
                <HashRouter>
                  <div>
                    <Route exact path="/" render={()=><HomeComponent elements={elements} onToggle={this.handleToggle} />}/>
                    <Route path="/edit" render={()=><EditComponent elements={elements} onDelete={this.handleDelete} onToggle={this.handleToggle} onAdd={this.handleAdd}/>}/>
                  </div>
                </HashRouter>
            </main>
        );
    }
}

App.propTypes = {
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cart: PropTypes.bool.isRequired
    })).isRequired
};

export default App;
