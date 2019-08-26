import React from 'react';
import { Button, TextField, withStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../../actions/crudAction';
import '../../styles/SaveCamMain.css';
import styles from '../../styles/styles';

const style = {
    btnstyle: styles.nextbtn
}

class SaveCamMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            camTitle: '',
            camNotes: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleBack = this.handleBack.bind(this);
    };

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSave() {
        var data = {}
        data['Title'] = this.state.camTitle
        data['Notes'] = this.state.camNotes
        data['Url'] = this.props.state.activity.finalurl
        data['Img'] = this.props.state.activity.img
        this.props.actions.todatabase(data)
    };

    handleCancel() {
        this.props.actions.normal()
    };

    handleBack() {
        this.props.actions.back()
    };

    render() {
        const { classes } = this.props;

        return(
            <div className='Page'>
                <h1 className='Addcam-Title'>Confirm Details</h1>
                <div className='Div2'>
                    <img className='Thumbnail' src={`data:image/jpg;base64, ${this.props.state.activity.img}`} alt='Camera Thumbnail' />
                    <div className='Display1'>
                        <TextField
                            name='camTitle'
                            style={{minWidth: 350, margin: 2, marginBottom: 20}}
                            value={this.state.value}
                            variant='outlined'
                            label='Camera Title'
                            onChange={this.handleChange}
                        />
                        <TextField
                            name='camUrl'
                            style={{minWidth: 350, margin: 2, marginBottom: 20}}
                            value={this.props.state.activity.finalurl}
                            variant='outlined'
                            label='Camera URL'
                            InputProps={{ readOnly: true }}
                        />
                        <TextField
                            name='camNotes'
                            style={{minWidth: 350, margin: 2}}
                            value={this.state.value}
                            variant='outlined'
                            label='Notes'
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className='Buttons'>
                    <Button className={classes.btnstyle} variant='contained' color='primary' onClick={this.handleBack}>back</Button>
                    <Button className={classes.btnstyle} variant='contained' color='primary' onClick={this.handleSave}>confirm and save</Button>
                    <Button className={classes.btnstyle} variant='contained' color='secondary' onClick={this.handleCancel}>cancel</Button>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { state }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default (connect(mapStateToProps, mapDispatchToProps))(withStyles(style)(SaveCamMain));