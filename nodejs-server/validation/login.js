const validator = require('validator');
const lodash = require('lodash');

module.exports = function validateLoginInputs(data) {
    let errors = {};

    data.email = !lodash.isEmpty(data.email) ? data.email : '';
    data.password = !lodash.isEmpty(data.password) ? data.password : '';

    if (validator.isEmpty(data.email)) {
        errors.email = "eMail field is required";
    }

    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (!validator.isEmail(data.email)) {
        errors.email = "eMail field is invalid";
    }

    return {
        errors,
        isValid: lodash.isEmpty(errors)
    };
};