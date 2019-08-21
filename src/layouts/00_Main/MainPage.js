import React from 'react';
import { Fab, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../styles/styles';
import history from '../../utils/history';
import CamCard from '../../components/CamCard';
import img from './example-img.jpg';
import '../../styles/MainPage.css';

const style = {
    fab: styles.fab,
}

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        history.push('/addcam')
    }

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

export default withStyles(style)(MainPage);