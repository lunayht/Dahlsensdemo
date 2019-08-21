import React from 'react';
import { Card, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import styles from '../styles/styles';

const style = {
    camcard: styles.camcard
};

class CamCard extends React.Component {
    render() {
        const { children, custom, classes, className } = this.props;

        return(
            <div>
                <Card className={classNames(classes.camcard, className)}
                {...custom}>
                    {children}
                </Card>
            </div>
        )
    }
};

export default withStyles(style)(CamCard);