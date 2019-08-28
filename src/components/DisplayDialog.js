import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, Button, DialogTitle, TextField, Typography, withStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../actions/crudAction';
import '../styles/Dialog.css';
import styles from '../styles/styles';

const style = {
    displayDes: styles.displayDes,
    dialog: styles.dialog
}

function handleRedirect(imgsrc, title) {
    crudAction.redirecttomonitor(imgsrc, title)
};

class DisplayDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            editbtn: 'EDIT'
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        this.setState({
            edit: !this.state.edit,
        })
        if (!this.state.edit) {
            this.setState({
                editbtn: 'SAVE'
            })
        } else {
            this.setState({
                editbtn: 'EDIT'
            })
        }
    }

    handleClose() {
        this.props.onClose()
    }

    render() {
        const { imgsrc, Title, Notes, Url, classes, onClose, ...other} = this.props

        return(
            <div>
                <Dialog className={classes.dialog} onClose={this.handleClose} {...other}>
                    <DialogTitle>
                        {(this.state.edit) ? <TextField defaultValue={Title.toUpperCase()} /> : <Typography variant='inherit'>{Title.toUpperCase()}</Typography>}
                    </DialogTitle>
                    <img className='Img' src={`data:image/jpg;base64,${imgsrc}`} alt='test ip cam' />
                    {(this.state.edit) ? <TextField className={classes.displayDes} defaultValue={Url} /> : <Typography className={classes.displayDes} variant='inherit'>{Url}</Typography>}
                    {(this.state.edit) ? <TextField className={classes.displayDes} defaultValue={Notes} /> : <Typography className={classes.displayDes} variant='inherit'>{Notes}</Typography>}
                    {(this.state.edit) ? <TextField className={classes.displayDes} defaultValue='Py file here' /> : <Typography className={classes.displayDes} variant='inherit'>'py file'</Typography>}
                    <DialogActions>
                        <Button color='primary'>Configure</Button>
                        <Button color='primary' onClick={() => {
                            handleRedirect(imgsrc, Title)
                        }}>Monitor</Button>
                        <Button color='primary' onClick={this.handleEdit}>{this.state.editbtn}</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(DisplayDialog));