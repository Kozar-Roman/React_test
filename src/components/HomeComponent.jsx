import React from 'react';
import List from './List';
import Header from './Header';

const HomeComponent = (props) => (
  <div>
    <Header/>
    <List
        elements={props.elements}
        onToggle={props.onToggle}
    />
  </div>
);

export default HomeComponent;
