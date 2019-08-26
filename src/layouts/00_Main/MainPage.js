import React from 'react';
import { Fab, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../styles/styles';
import CamCard from '../../components/CamCard';
import '../../styles/MainPage.css';
import * as crudAction from '../../actions/crudAction';
import store from '../../store/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { normal } from '../../actions/commonAction';
import { getinfo } from '../../utils/httpUtil';

const style = {
    fab: styles.fab,
}

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
        this.handleAdd = this.handleAdd.bind(this);
    };

    componentDidMount() {
        store.dispatch(normal())
        getinfo()
        .then((data) => {
            var cardsArr = data.data.data
            this.setState({ cards: cardsArr })
        })
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
                        {this.state.cards.map(el =>
                            <div key={el.id} className="col-3 col-s-12">
                                <CamCard img={`data:image/jpg;base64,${el.b64img}`} Title={el.title} Description={el.notes}/>
                            </div>
                            )}
                    </div>
                </div>
                <Fab onClick={this.handleAdd} className={classes.fab} color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(MainPage));