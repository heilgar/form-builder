import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import FieldList from '../FieldList';

const propTypes = {
    resetForm: PropTypes.func.isRequired,
};

const FormActions = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <ButtonToolbar>
            <ButtonGroup className="btn-group-sm">
                <FieldList {...props}/>
                <Button
                    className="btn-sm btn-danger"
                    onClick={
                        () => window.confirm("This action will reset all unsaved changes, Are you sure?")
                            && props.resetForm()
                    }>
                    Clear
                </Button>
                <Button className="btn-sm btn-success" onClick={handleSubmit}>Submit</Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
};

FormActions.propTypes = propTypes;

export default FormActions;