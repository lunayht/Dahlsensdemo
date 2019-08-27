import React from 'react';
import { AppBar, withStyles, Button } from '@material-ui/core';
import logo from './lauretta-logo.png';
import styles from '../styles/styles';
import history from '../utils/history';
import store from '../store/store';
import { monitor, setup } from '../actions/commonAction';

const style = {
    appbar: styles.appbar,
    logo: styles.logo,
    flexGrow: styles.flexGrow,
    headerbtn: styles.headerbtn
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleAnalysis = this.handleAnalysis.bind(this);
        this.handleMonitor = this.handleMonitor.bind(this);
        this.handleSetup = this.handleSetup.bind(this);
    };

    handleAnalysis() {
        history.push('/analysis')
    };

    handleMonitor() {
        history.push('/monitor')
        store.dispatch(monitor())
    };

    handleSetup() {
        history.push('/')
        store.dispatch(setup())
    }

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.flexGrow}>
                <AppBar className={classes.appbar} color="inherit" position="static">
                    <img className={classes.logo} src={logo} alt='logo' />
                    <Button className={classes.headerbtn} onClick={this.handleAnalysis} color='inherit'>Analysis</Button>
                    <Button className={classes.headerbtn} onClick={this.handleMonitor} color='inherit'>Monitor</Button>
                    <Button className={classes.headerbtn} onClick={this.handleSetup} color='inherit'>Setup</Button>
                </AppBar>
            </div>
        )
    }
};

export default withStyles(style)(Header);