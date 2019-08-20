import React from 'react';
import { AppBar, withStyles } from '@material-ui/core';
import logo from './lauretta-logo.png';
import styles from '../styles/styles';

const style = {
    appbar: styles.appbar,
    logo: styles.logo
};

class Header extends React.Component {
    render() {
        const { classes } = this.props;

        return(
            <div>
                <AppBar className={classes.appbar} color="inherit" position="static">
                    <img className={classes.logo} src={logo} alt='logo' />
                    <h2>Lauretta</h2>
                </AppBar>
            </div>
        )
    }
};

export default withStyles(style)(Header);