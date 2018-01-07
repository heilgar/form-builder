import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import FormActions from './Actions';

import * as FormBuilderActions from '../../actions/form';

const mapStateToProps = (state) => {
    return {
        schema: state.schema,
    };
};

const mapDispatchToProps = (dispatch) => {
    let actionCreators = {
        ...FormBuilderActions,
    };

    return bindActionCreators(actionCreators, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormActions);