import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

const propTypes = {
    edit: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

const FieldToolbar = ({edit, onEdit, onCancel, onDelete}) => {
    const button = edit
        ? <Button onClick={onCancel}>
            <i className="fa fa-ban"></i> cancel
        </Button>
        : <Button onClick={onEdit}>
            <i className="fa fa-pencil"></i> edit
        </Button>;

    return (
        <ButtonToolbar>
            <ButtonGroup className="btn-group-sm pull-right">
                {button}
                <Button onClick={onDelete}>
                    <i className="fa fa-trash"></i> delete
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
};

FieldToolbar.propTypes = propTypes;

export default FieldToolbar;