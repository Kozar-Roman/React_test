import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

class Element extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movedRight: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const title = this.refs.title.value;

        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false });
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

 handleToggle() {
        this.setState({ movedRight: !this.state.movedRight });
        this.props.onToggle(this.props.id);
    }
    renderDisplay() {
        const { movedRight } = this.state;
        const className = `element${this.props.cart ? ' cart' : ''}${movedRight ? ' moved-right' : ''}`;

        return (
            <div className={className}>
                <Checkbox checked={this.props.cart} onChange={this.handleToggle} />

                <span className="element-title">{this.props.title}</span>

                {this.props.onDelete ? <Button className="delete icon" icon="delete" onClick={this.handleDelete} /> : ''}
            </div>
        );
    }

    render() {
        return this.renderDisplay();
    }
}

Element.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cart: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default Element;
