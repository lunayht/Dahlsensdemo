import React from 'react';
import { Fab, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../styles/styles';
import CamCard from '../../components/CamCard';
import img from './example-img.jpg';
import '../../styles/MainPage.css';
import * as crudAction from '../../actions/crudAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const style = {
    fab: styles.fab,
}

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
    };

    handleAdd() {
        this.props.actions.addingcam()
    };

    render() {
        const { classes } = this.props;

        return(
            <div>
                <div className='content'>
                    <div className='row'>
                        <div className="col-3 col-s-12">
                            <CamCard img={img} Title='S70 SAW' Description='Description'/>
                        </div>
                        <div className="col-3 col-s-12">
                            <CamCard img={img} Title='S90 SAW' Description='Description'/>
                        </div>
                        <div className="col-3 col-s-12">
                            <CamCard img={img} Title='Forklift Zone 1' Description='Description'/>
                        </div>
                        <div className="col-3 col-s-12">
                            <CamCard img={img} Title='Forklift Zone 2' Description='Description'/>
                        </div>
                        <div className="col-3 col-s-12">
                            <CamCard img={img} Title='Racking Zone' Description='Description'/>
                        </div>
                        <div className="col-3 col-s-12">
                            <CamCard img={img} Title='Frame Stack Pro' Description='Description'/>
                        </div>
                        <div className="col-3 col-s-12">
                            <CamCard img={img} Title='LE SAW' Description='Description'/>
                        </div>
                    </div>
                </div>
                <Fab onClick={this.handleAdd} className={classes.fab} color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
})

export default connect(null, mapDispatchToProps)(withStyles(style)(MainPage));