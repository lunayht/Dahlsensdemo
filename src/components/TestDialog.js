import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../actions/crudAction';
import '../styles/Dialog.css'

class TestDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleSaveImage = this.handleSaveImage.bind(this);
    }

    handleClose() {
        this.props.onClose()
    }

    handleSaveImage() {
        const imgwh = document.getElementById('target');
        var canvas = document.createElement("canvas");
        
        canvas.width = imgwh.width;
        canvas.height = imgwh.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(imgwh, 0, 0);

        const dataURL = canvas.toDataURL("image/png");
        const b64 = dataURL.split(',');
        this.props.actions.saveimage(b64[1]);
        this.setState({
            msg: 'Saved thumbnail to database.'
        })
    }

    render() {
        const { ipcamsrc, onClose, ...other} = this.props

        return(
            <div>
                <Dialog onClose={this.handleClose} {...other}>
                    <img id='target' src={ipcamsrc} alt='test ip cam' />
                    <h4 className='Msg'>{this.state.msg}</h4>
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
    onClose: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return { state }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TestDialog);