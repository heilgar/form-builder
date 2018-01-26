import { toIdSchema } from 'react-jsonschema-form/lib/utils';
import {slugify, clone, unique} from '../utils';

import {
    FIELD_ADD,
    FIELD_REMOVE,
    FIELD_UPDATE,
    FIELD_INSERT,
    FIELD_SWAP,
    FORM_RESET,
    FORM_FIELD_INPUT,
    FORM_UPDATE_TITLE,
    FORM_UPDATE_DESCRIPTION,
} from "../actions/form";

//TODO refactor

export const INITIAL_STATE = {
    error: null,
    schema: {
        type: "object",
        title: "Untitled form",
        description: "Enter some description for your form here",
        properties: {},
        required: [],
    },
    uiSchema: {
        "ui:order": []
    },
    formData: {},
    index: 0,
};

const addField = (state, field) => {
    state.index++;

    const name = `Field name ${state.index}`;
    const _slug = slugify(name);

    state.schema.properties[_slug] = {...field.jsonSchema, title: name};
    state.uiSchema[_slug] = field.uiSchema;
    state.uiSchema["ui:order"] = (state.uiSchema["ui:order"] || []).concat(_slug);

    state.idSchema = toIdSchema(state.schema, 'root');

    return state;
};

const insertField = (state, field, before) => {
    const insertedState = addField(state, field);
    const order = insertedState.uiSchema["ui:order"];
    const added = order[order.length - 1];
    const idxBefore = order.indexOf(before);

    insertedState.uiSchema["ui:order"] = [].concat(
        order.slice(0, idxBefore),
        added,
        order.slice(idxBefore, order.length - 1)
    );

    return {...insertedState, error: null};
};

const updateField = (state, data) => {
    const requiredFields = state.schema.required || [];

    const formData = data.formData;
    const name = formData.name;

    delete(formData.name);

    const existing = Object.keys(state.schema.properties);
    let newName = slugify(formData.title);

    state.schema.properties[name] = formData;

    if (formData.required) {
        // Ensure uniquely required field names
        state.schema.required = unique(requiredFields.concat(newName));
    } else {
        state.schema.required = requiredFields
            .filter(requiredFieldName => newName !== requiredFieldName);
    }

    if (name !== newName && existing.indexOf(newName) !== -1) {
        // Field name already exists, we can't update state
        const error = `Duplicate field name "${newName}", operation aborted.`;
        return {...state, error};
    }

    if (newName !== name) {
        return renameField(state, name, newName);
    }

    return {...state, error: null};
};

const removeField = (state, name) => {
    const requiredFields = state.schema.required || [];

    delete state.schema.properties[name];
    delete state.uiSchema[name];

    state.uiSchema["ui:order"] = state.uiSchema["ui:order"].filter(
        (field) => field !== name);

    state.schema.required = requiredFields
        .filter(requiredFieldName => name !== requiredFieldName);

    if (state.schema.required.length === 0) {
        delete state.schema.required;
    }

    return {...state, error: null};
};

const renameField = (state, name, newName) => {
    const schema = clone(state.schema.properties[name]);
    const uiSchema = clone(state.uiSchema[name]);
    const order = state.uiSchema["ui:order"];
    const required = state.schema.required;

    delete state.schema.properties[name];
    delete state.uiSchema[name];

    state.schema.properties[newName] = schema;
    state.schema.required = unique(required.map(fieldName => {
        return fieldName === name ? newName : fieldName;
    }));

    state.uiSchema[newName] = uiSchema;
    state.uiSchema["ui:order"] = order.map(fieldName => {
        return fieldName === name ? newName : fieldName;
    });

    return {...state, error: null};
};

const swapFields = (state, source, target) => {
    const order = state.uiSchema["ui:order"];
    const idxSource = order.indexOf(source);
    const idxTarget = order.indexOf(target);

    order[idxSource] = target;
    order[idxTarget] = source;

    return {...state, error: null};
};

const updateFormFieldData = (state, field) => {
    state.formData = Object.assign(state.formData, field);

    return {...state, error: null};
};

const updateFormTitle = (state, {title})  => {
    state.schema.title = title;

    return {...state, error: null};
};

const updateFormDescription = (state, {description}) => {
    state.schema.description = description;

    return {...state, error: null};
};

const resetForm = (state) => {
    state = {...INITIAL_STATE};

    return {...state};
};

export default function form(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FIELD_ADD:
            return addField(clone(state), action.field);
        case FIELD_INSERT:
            return insertField(clone(state), action.field, action.before);
        case FIELD_UPDATE:
            return updateField(clone(state), action.data);
        case FIELD_REMOVE:
            return removeField(clone(state), action.field);
        case FIELD_SWAP:
            return swapFields(clone(state), action.source, action.target);
        case FORM_FIELD_INPUT:
            return updateFormFieldData(clone(state), action.field);
        case FORM_RESET:
            return resetForm(state);
        case FORM_UPDATE_TITLE:
            return updateFormTitle(clone(state), action.title);
        case FORM_UPDATE_DESCRIPTION:
            return updateFormDescription(clone(state), action.description);
        default:
            return state;
    }
}
