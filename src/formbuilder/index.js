import React, {Component} from 'react';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Form from './components/Form';
import FormActions from './components/Actions';

class FormBuilder extends Component {
    render() {
        return (
            <div className="FormBuilder container">
                <div className="row">
                    <div className="card">
                        <div className="card-block">
                            <div className="card-body">
                                <Form/>
                            </div>
                            <div className="card-footer">
                                <FormActions/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(FormBuilder);