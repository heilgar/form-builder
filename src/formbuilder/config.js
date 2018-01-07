export default {
    fieldList: [
        {
            id: "text",
            icon: "font",
            label: "Short text",
            jsonSchema: {
                type: "string",
                title: "Edit me",
                default: ""
            },
            uiSchema: {
                editSchema: {
                    type: "object",
                    properties: {
                        title: {type: "string", title: "Label"},
                        required: {type: "boolean"},
                    }
                },
            },
            formData: {}
        },
        {
            id: "multilinetext",
            icon: "align-left",
            label: "Long text",
            jsonSchema: {
                type: "string",
                title: "Edit me",
                default: ""
            },
            uiSchema: {
                "ui:widget": "textarea",
                editSchema: {
                    type: "object",
                    properties: {
                        title: {type: "string", title: "Label"},
                        required: {type: "boolean"},
                    }
                },
            },
            formData: {}
        },
        {
            id: "checkbox",
            icon: "check-square-o",
            label: "Checkbox",
            jsonSchema: {
                type: "boolean",
                title: "Edit me",
                default: false,
            },
            uiSchema: {
                editSchema: {
                    type: "object",
                    properties: {
                        title: {type: "string", title: "Label"},
                        required: {type: "boolean"},
                    }
                },
            },
            formData: {}
        },
        {
            id: "multiple-checkbox",
            icon: "check-square",
            label: "Multiple choices",
            jsonSchema: {
                type: "array",
                title: "A multiple choices list",
                items: {
                    type: "string",
                    enum: ["choice 1", "choice 2", "choice 3"],
                },
                uniqueItems: true,
            },
            uiSchema: {
                "ui:widget": "checkboxes",
                editSchema: {
                    type: "object",
                    properties: {
                        title: {type: "string", title: "Label"},
                        required: {type: "boolean"},
                        items: {
                            type: "object",
                            title: "Choices",
                            properties: {
                                enum: {
                                    title: null,
                                    type: "array",
                                    items: {
                                        type: "string"
                                    },
                                    default: ["choice 1", "choice 2", "choice 3"],
                                }
                            }
                        }
                    }
                },
            },
            formData: {}
        },
        {
            id: "radiobuttonlist",
            icon: "list",
            label: "Choice list",
            jsonSchema: {
                type: "string",
                title: "Edit me",
                enum: ["option 1", "option 2", "option 3"],
            },
            uiSchema: {
                "ui:widget": "radio",
                editSchema: {
                    type: "object",
                    properties: {
                        title: {type: "string", title: "Label"},
                        required: {type: "boolean"},
                        enum: {
                            type: "array",
                            title: "Options",
                            items: {
                                type: "string"
                            }
                        }
                    }
                },
            },
            formData: {}
        },
        {
            id: "select",
            icon: "chevron-circle-down",
            label: "Select List",
            jsonSchema: {
                type: "string",
                format: "string",
                title: "Edit me",
                enum: ["option 1", "option 2", "option 3"],
            },
            uiSchema: {
                "ui:widget": "select",
                editSchema: {
                    type: "object",
                    properties: {
                        title: {type: "string", title: "Label"},
                        required: {type: "boolean"},
                        enum: {
                            type: "array",
                            title: "Options",
                            items: {
                                type: "string"
                            }
                        }
                    }
                },
            },
            formData: {}
        },
        {
            id: "date",
            icon: "calendar",
            label: "Date",
            jsonSchema: {
                type: "string",
                format: "date",
                title: "Edit me",
            },
            uiSchema: {
                "ui:widget": "alt-date",
                editSchema: {
                    type: "object",
                    properties: {
                        title: {type: "string", title: "Label"},
                        required: {type: "boolean"}
                    }
                },
            },
            formData: {}
        },
    ],
};