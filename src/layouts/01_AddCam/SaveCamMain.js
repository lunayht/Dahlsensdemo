import React from 'react';
import { Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../../actions/crudAction';

class SaveCamMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleBack = this.handleBack.bind(this);
    };

    handleCancel() {
        this.props.actions.normal()
    };

    handleBack() {
        this.props.actions.back()
    };

    render() {
        return(
            <div>
                Save Camera page. Need to show details:
                <h4>Camera screenshot</h4>
                <h4>Camera Title</h4>
                <h4>URL : {this.props.state.activity.finalurl}</h4>
                <h4>Notes</h4>
                <Button variant='contained' onClick={this.handleBack}>back</Button>
                <Button variant='contained'>confirm and save</Button>
                <Button variant='contained' color='secondary' onClick={this.handleCancel}>cancel</Button>
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

export default (connect(mapStateToProps, mapDispatchToProps))(SaveCamMain);