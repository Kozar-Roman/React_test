import React from 'react';
import PropTypes from 'prop-types';

import Element from './Element';

function EditList(props) {
    return (
        <section className="element-list">
            {props.elements.map(element =>
                <Element
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    cart={element.cart}
                    onDelete={props.onDelete}
                    onToggle={props.onToggle}
                />)
            }
        </section>
    );
}

EditList.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cart: PropTypes.bool.isRequired
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default EditList;
