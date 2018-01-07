import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

import SchemaField from "react-jsonschema-form/lib/components/fields/SchemaField";
import FieldPropertiesEditor from './FieldPropertiesEditor';
import FieldToolbar from './FieldToolbar';

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};

const propTypes = {
    name: PropTypes.string.isRequired,
    swapField: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired,
    removeField: PropTypes.func.isRequired,
};

const fieldSource = {
    beginDrag(props) {
        return props;
    }
};

const fieldTarget = {
    drop(props, monitor, component) {
        const source = monitor.getItem().name;
        const target = props.name;

        if (source !== target) {
            props.swapField(source, target);
        }
    }
};

class CustomSchemaField extends Component{
    state = {
        edit: false,
    };

    handleEdit = (event) => (this.setState({edit: true}));
    handleCancelEdit = (event) => (this.setState({edit: false}));

    handleSubmit = (formData) => {
        this.props.updateField(formData);
        this.setState({edit: false});
    };

    handleDelete = (event) => {
        event.preventDefault();

        if (window.confirm("Are you sure you want to delete this field?")) {
            this.props.removeField(this.props.name);
        }
    };

    render() {
        let component = this.state.edit
            ? <FieldPropertiesEditor {...this.props} handleSubmit={this.handleSubmit}/>
            : <SchemaField {...this.props}/>;

        const {isDragging, connectDragSource, connectDropTarget } = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(connectDropTarget(
            <div className="row" style={{...style, opacity}}>
                <div className="col-9">
                    {component}
                </div>
                <div className="col-3">
                    <FieldToolbar
                        edit={this.state.edit}
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete}
                        onCancel={this.handleCancelEdit}
                    />
                </div>
            </div>
        ));
    }
}

CustomSchemaField.propTypes = propTypes;

export default flow(
    DropTarget("FIELD", fieldTarget, connect => ({
        connectDropTarget: connect.dropTarget()
    })),
    DragSource("FIELD", fieldSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }))
)(CustomSchemaField);