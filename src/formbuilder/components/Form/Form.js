import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SchemaField from 'react-jsonschema-form/lib/components/fields/SchemaField';
import * as Widgets from 'react-jsonschema-form/lib/components/widgets';
import * as Fields from 'react-jsonschema-form/lib/components/fields';

const propTypes = {
    setFormData: PropTypes.func.isRequired,
    TitleField: PropTypes.func.isRequired,
    DescriptionField: PropTypes.func.isRequired,
    EditableField: PropTypes.func.isRequired,
};


class EditableForm extends Component {
    onChange = (field) => {
        this.props.setFormData(field);
    };

    render() {
        const {
            error,
            TitleField,
            DescriptionField,
            EditableField
        } = this.props;


        const registry = {
            fields: {
                ...Fields.default,
                TitleField: TitleField,
                DescriptionField: DescriptionField,
                SchemaField: EditableField,
            },
            widgets: {...Widgets.default},
            formContext: {},
            definitions: {},
        };

        return (
            <div className='Form container-fluid'>
                {error ? <div className="alert alert-danger">{error}</div> : null}
                <SchemaField {...this.props} registry={registry} onChange={this.onChange}/>
            </div>
        );
    }
}

EditableForm.propTypes = propTypes;

export default EditableForm;