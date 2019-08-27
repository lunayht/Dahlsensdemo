import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, Button, DialogTitle } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../actions/crudAction';
import '../styles/Dialog.css';

function handleRedirect(imgsrc, title) {
    crudAction.redirecttomonitor(imgsrc, title)
};

class DisplayDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.onClose()
    }

    render() {
        const { imgsrc, Title, Notes, Url, classes, onClose, ...other} = this.props

        return(
            <div>
                <Dialog onClose={this.handleClose} {...other}>
                    <DialogTitle>{Title.toUpperCase()}</DialogTitle>
                    <img className='Img' src={`data:image/jpg;base64,${imgsrc}`} alt='test ip cam' />
                    <h4 className='displayDes'>{Url}</h4>
                    <h4 className='displayDes'>{Notes}</h4>
                    <DialogActions>
                        <Button color='primary' onClick={() => {
                            handleRedirect(imgsrc, Title)
                        }}>Monitor</Button>
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

function mapStateToProps(state) {
    return { state }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayDialog);