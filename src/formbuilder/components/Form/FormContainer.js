import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import * as FormBuilderActions from "../../actions/form";

import TitleField from '../fields/TitleField';
import DescriptionField from '../fields/DescriptionField';
import EditableField from '../fields/EditableField';
import Form from './Form';

const mapStateToProps = (state) => {
    return {
        error: state.error,
        schema: state.schema,
        uiSchema: state.uiSchema,
        formData: state.formData,
        idSchema: state.idSchema,
        index: state.index,
    };
};

const mapDispatchToProps = (dispatch) => {
    const actionCreators = {
        ...FormBuilderActions,
    };
    const actions = bindActionCreators(actionCreators, dispatch);

    //todo: move to the field/component registry
    //https://github.com/mozilla-services/react-jsonschema-form#the-registry-object
    TitleField.defaultProps = Object.assign(
        {}, TitleField.defaultProps || {}, actions
    );
    DescriptionField.defaultProps = Object.assign(
        {}, DescriptionField.defaultProps || {}, actions
    );
    EditableField.defaultProps = Object.assign(
        {}, EditableField.defaultProps || {}, actions
    );

    return actions;
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        TitleField,
        DescriptionField,
        EditableField,
        onChange: () => {},
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Form);