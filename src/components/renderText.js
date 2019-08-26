import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const renderText = ({
    input, 
    label,
    placeholder, 
    type, 
    defaultValue,
    meta: {touched, error},
    ...custom
}) => (
    <TextField
        style={{minWidth: 450, margin: 2}}
        type={type}
        label={label}
        error={touched && error}
        helperText={touched && error}
        placeholder={placeholder}
        id="outlined-with-placeholder"
        margin="normal"
        variant="outlined"
        {...input}
        {...custom}
    />
);

renderText.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object
};

export default renderText;