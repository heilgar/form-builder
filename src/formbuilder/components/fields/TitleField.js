import React from 'react';
import PropTypes from 'prop-types';

import {RIEInput} from "riek";

const CustomTitleField = (props) => {
    const {id, title="", updateFormTitle} = props;

    return (
        <legend id={id}>
            <RIEInput
                className="edit-in-place"
                propName="title"
                value={title}
                change={updateFormTitle} />
            <hr/>
        </legend>
    );
};

CustomTitleField.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    updateFormTitle: PropTypes.func.isRequired,
};

export default CustomTitleField;