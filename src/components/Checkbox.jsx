import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    return (
        <button className="checkbox icon" onClick={props.onChange}>
            <i className="material-icons">
                {props.checked ? 'shopping_cart' : 'home'}
            </i>
        </button>
    );
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;
