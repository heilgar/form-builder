import React from 'react';
import PropTypes from 'prop-types';
import {RIEInput} from 'riek';

const style = {
    marginBottom: '1.5rem',
    backgroundColor: 'white'
};

const CustomDescriptionField = (props) => {
    const {id, description="", updateFormDescription} = props;

    return (
        <div id={id} style={style}>
            <RIEInput
                className="edit-in-place"
                classEditing="edit-in-place-active"
                propName="description"
                value={description}
                change={updateFormDescription}
                submit={(e) => e.preventDefault()}
            />
        </div>
    );
};


CustomDescriptionField.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    updateFormDescription: PropTypes.func.isRequired,
};

export default CustomDescriptionField;