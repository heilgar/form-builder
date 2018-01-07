import { connect } from 'react-redux';
import FieldList from "./FieldList";
import config from "../../config";

const mapStateToProps = (state) => {
    return {
        fieldList: config.fieldList,
    };
};

export default connect(
    mapStateToProps,
)(FieldList);