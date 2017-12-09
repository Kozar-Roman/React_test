import React from 'react';
import PropTypes from 'prop-types';

import Element from './Element';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: false
        };


        this.handleAddFilter = this.handleAddFilter.bind(this);
        this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
    }

    handleAddFilter() {
      this.setState({ filter: true });
    }

    handleRemoveFilter() {
      if(this.state.filter){
        this.setState({ filter: false });
      }
    }

    render() {
      return (
          <div>
            <section className="element-list">
                {this.state.filter ? this.props.elements.filter(element => element.cart).map(element =>
                    <Element
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        cart={element.cart}
                        onToggle={this.props.onToggle}
                    />)
                : this.props.elements.map(element =>
                    <Element
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        cart={element.cart}
                        onToggle={this.props.onToggle}
                    />)}
            </section>
            <div className="filter-wrap">
              <div className="element-filter">
                <a className={this.state.filter ? '' : 'is-active'} onClick={this.handleRemoveFilter}>
                  <i className="material-icons">list</i>
                </a>
                <a className={this.state.filter ? 'is-active' : ''} onClick={this.handleAddFilter}>
                  <i className="material-icons">shopping_cart</i>
                </a>
              </div>
            </div>
          </div>

      );
    }
}

List.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cart: PropTypes.bool.isRequired
    })).isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default List;
