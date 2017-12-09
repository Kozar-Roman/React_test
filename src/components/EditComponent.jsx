import React from 'react';
import EditList from './EditList';
import Form from './Form';
import Header from './Header';

const EditComponent = (props) => (
  <div>
    <Header/>
    <EditList
        elements={props.elements}
        onDelete={props.onDelete}
        onToggle={props.onToggle}
    />
    <Form onAdd={props.onAdd} />
  </div>
);

export default EditComponent;
