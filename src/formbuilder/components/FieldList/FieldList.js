import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const propTypes = {
    addField: PropTypes.func.isRequired,
    fieldList: PropTypes.array.isRequired,
};

class FieldList extends PureComponent{
    state = {
        dropdownOpen: false
    };

    toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });

    handleClick = (field, index) => {
        if (typeof this.props.fieldList[index] !== 'undefined') {
            this.props.addField(field);
        }
    };

    render() {
        return (
            <ButtonDropdown role="group" isOpen={this.state.dropdownOpen} toggle={this.toggle} className="btn-group-sm btn-group" dropup>
                <DropdownToggle caret>
                    Add field
                </DropdownToggle>
                <DropdownMenu>
                    {this.props.fieldList.map((field, index) => {
                        return <DropdownItem key={index} onClick={() => this.handleClick(field, index)}>
                                <i className={"fa fa-" + field.icon} aria-hidden="true"></i>  {field.label}
                            </DropdownItem>
                        ;
                    })}
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

FieldList.propTypes = propTypes;

export default FieldList;