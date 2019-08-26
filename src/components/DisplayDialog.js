import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../actions/crudAction';
import '../styles/Dialog.css';

class DisplayDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.onClose()
    }

    render() {
        const { imgsrc, Title, Notes, Url, onClose, ...other} = this.props

        return(
            <div>
                <Dialog onClose={this.handleClose} {...other}>
                    <img className='Img' src={`data:image/jpg;base64,${imgsrc}`} alt='test ip cam' />
                    <h4>{Title}</h4>
                    <h4>{Url}</h4>
                    <h4>{Notes}</h4>
                    <DialogActions>
                        <Button color='secondary' onClick={this.handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
};

DisplayDialog.propTypes = {
    onClose: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(DisplayDialog);