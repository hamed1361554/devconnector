const validator = require('validator');
const lodash = require('lodash');

module.exports = function validateRegisterInputs(data) {
    let errors = {};

    data.name = !lodash.isEmpty(data.name) ? data.name : '';
    data.email = !lodash.isEmpty(data.email) ? data.email : '';
    data.password = !lodash.isEmpty(data.password) ? data.password : '';
    data.password2 = !lodash.isEmpty(data.password2) ? data.password2 : '';

    if (validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    if (validator.isEmpty(data.email)) {
        errors.email = "eMail field is required";
    }

    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }

    if (!validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = "Name must be between 2 and 30 characters";
    }

    if (!validator.isEmail(data.email)) {
        errors.email = "eMail field is invalid";
    }

    if (!validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must be at least 6 characters";
    }

    if (!validator.equals(data.password, data.password2)) {
        errors.password = "Passwords does not match";
    }

    return {
        errors,
        isValid: lodash.isEmpty(errors)
    };
};