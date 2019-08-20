import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Field, reduxForm } from 'redux-form';
// Import custom component
import renderText from './renderText';
import { Button } from '@material-ui/core';

class IpScanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: '192.168.1.x',
            port: '80',
            prefix: 'http://root:password',
            suffix: 'onvif',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
  
    render() {
        const { handleSubmit, onSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        label="IP Address"
                        type="text"
                        name="ip"
                        placeholder="192.168.1.x"
                        component={renderText}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <Field
                        label="Ports to Scan"
                        type="text"
                        name="port"
                        placeholder="e.g. 80,81,8080,80 - 8080"
                        component={renderText}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <Field
                        label="URL Prefix"
                        type="text"
                        name="prefix"
                        placeholder="http://root:password"
                        component={renderText}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <Field
                        label="URL Suffix"
                        type="text"
                        name="suffix"
                        placeholder="onvif1"
                        component={renderText}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <br />
                    <Typography variant="subtitle2">
                    Example URL: {this.state.prefix+'@'+this.state.ip+':'+this.state.port+'/'+this.state.suffix}
                    </Typography>
                    <Button variant="contained" color="primary" type="submit">
                        Scan
                    </Button>
                </form>                
            </div>
        );
    }
};

const validateKeyIn = values => {
    const errors = {}

    const requireFields = [
        'ip', 'port', 'prefix', 'suffix'
    ]

    requireFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This field is required.'
        }
    })

    if (!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(values.ip)) {
        errors['ip'] = 'Invalid IP address'    
    }

    

    return errors
}

IpScanForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'IpScanForm',
    validate: validateKeyIn
})(IpScanForm);