import React from 'react';
import { Dialog, DialogActions, Button } from '@material-ui/core';

class TestDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose() {
        this.props.onClose()
    }

    render() {
        const { ipcamsrc, onClose, ...other} = this.props

        return(
            <div>
                <Dialog onClose={this.handleClose} {...other}>
                    <img src={ipcamsrc} alt='test ip cam' />
                    <DialogActions>
                        <Button>SAVE IMAGE</Button>
                        <Button color='secondary' onClick={this.handleClose}>CLOSE</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
};

export default TestDialog;