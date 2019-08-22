import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../actions/crudAction';

class TestDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleSaveImage = this.handleSaveImage.bind(this);
    }

    handleClose() {
        this.props.onClose()
    }

    handleSaveImage() {
        this.props.actions.saveimage(this.props.state.activity.testurl)
    }

    render() {
        const { ipcamsrc, onClose, ...other} = this.props

        return(
            <div>
                <Dialog onClose={this.handleClose} {...other}>
                    <img src={ipcamsrc} alt='test ip cam' />
                    <DialogActions>
                        <Button onClick={this.handleSaveImage}>Save Image</Button>
                        <Button color='secondary' onClick={this.handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
};

TestDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    // onSave: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return { state }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TestDialog);