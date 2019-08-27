import React from 'react';
import { Fab, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../styles/styles';
import CamCard from '../../components/CamCard';
import '../../styles/SetupPage.css';
import * as crudAction from '../../actions/crudAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getinfo } from '../../utils/httpUtil';

const style = {
    fab: styles.fab,
}

class SetupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
        this.handleAdd = this.handleAdd.bind(this);
    };

    componentDidMount() {
        this.props.actions.setup()
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
                <h2 className='Addcam-Title'>Setup Cameras</h2>
                <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(SetupPage));