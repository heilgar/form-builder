import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import { connect } from 'react-redux';


const mapStateToProps = state => ({...state.form});
const mapDispatchToProps = dispatch => ({...dispatch});

class FieldPropertiesEditor extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            editedSchema: props.schema,
        }
    }

    onChange({formData}) {
        this.setState({
            editedSchema: formData
        });
    }

    render() {
        const {
            name,
            required,
            registry,
            uiSchema,
            handleSubmit,
        } = this.props;

        const formData = {
            name,
            required,
            ...this.state.editedSchema,
        };

        return (
            <div className="row">
                <div className="card col-12">
                    <div className="card-block">
                        <h4 className="card-title">Edit field properties</h4>
                        <div className="card-text">
                            <Form
                                schema={uiSchema.editSchema}
                                registry={registry}
                                formData={formData}
                                onChange={this.onChange}
                                onSubmit={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FieldPropertiesEditor);