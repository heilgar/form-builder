export const FORM_RESET = "FORM_RESET";
export const FORM_FIELD_INPUT = "FORM_FIELD_INPUT";
export const FORM_UPDATE_TITLE = "FORM_UPDATE_TITLE";
export const FORM_UPDATE_DESCRIPTION = "FORM_UPDATE_DESCRIPTION";
export const FIELD_ADD = "FIELD_ADD";
export const FIELD_INSERT = "FIELD_INSERT";
export const FIELD_UPDATE = "FIELD_UPDATE";
export const FIELD_REMOVE = "FIELD_REMOVE";
export const FIELD_SWAP = "FIELD_SWAP";


export const addField = (field) => {
    return {type: FIELD_ADD, field};
};

export const insertField = (field, before) => {
    return {type: FIELD_INSERT, field, before};
};

export const updateField = (data) => {
    return {type: FIELD_UPDATE, data}
};

export const removeField = (field) => {
    return {type: FIELD_REMOVE, field};
};

export const swapField = (source, target) => {
    return {type: FIELD_SWAP, source, target};
};

export const setFormData = (field) => {
    return {type: FORM_FIELD_INPUT, field};
};

export const updateFormTitle = (title) => {
    return {type: FORM_UPDATE_TITLE, title};
};

export const updateFormDescription = (description) => {
    return {type: FORM_UPDATE_DESCRIPTION, description};
};

export const resetForm = (callback) => {
    return (dispatch, getState) => {
        dispatch({type: FORM_RESET});
        if (callback) {
            callback();
        }
    };
};
