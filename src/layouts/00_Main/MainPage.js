import React from 'react';
import { Fab, withStyles, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from '../../styles/styles';
import history from '../../utils/history';
import CamCard from '../../components/CamCard';
import img from './example-img.jpg';

const style = {
    fab: styles.fab,
    cardimg: styles.cardimg,
    cardcontent: styles.cardcontent,
    cardtext: styles.cardtext
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
                <CamCard>
                    {/* <CardActionArea> */}
                        <CardMedia className={classes.cardimg} image={img} title='Example Title' />
                        <CardContent className={classes.cardcontent}>
                            <h2 className={classes.cardtext}>Example</h2>
                            <p className={classes.cardtext}>blablabla</p>
                        </CardContent>
                    {/* </CardActionArea> */}
                </CamCard>
                <Fab onClick={this.handleAdd} className={classes.fab} color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

export default withStyles(style)(MainPage);