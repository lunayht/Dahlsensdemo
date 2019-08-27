import React from 'react';
import { Card, withStyles, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core';
import classNames from 'classnames';
import styles from '../styles/styles';
import { checkcard } from '../utils/httpUtil';
import DisplayDialog from './DisplayDialog';

const style = {
    camcard: styles.camcard,
    cardimg: styles.cardimg,
};

class CamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: false,
            img: '',
            title: '',
            url: '',
            notes: ''
        };
        this.handleClose = this.handleClose.bind(this);
    };

    handleClose() {
        this.setState({
            dialog: false,
            img: '',
            title: '',
            url: '',
            notes: ''
        })
    };

    render() {
        const { children, custom, classes, className, img, Title, Description } = this.props;

        return(
            <div> 
                <Card className={classNames(classes.camcard, className)}
                {...custom}>
                    <CardActionArea 
                    onClick={() => {
                        var imgstring = img.split(',');
                        checkcard({b64img: imgstring[1]}).then((resData) => {
                            // console.log(resData.data.data.notes)
                            this.setState({ 
                                dialog: true,
                                img: resData.data.data.b64img,
                                title: resData.data.data.title,
                                url: resData.data.data.url,
                                notes: resData.data.data.notes
                            })
                        });
                        }}
                    >
                        <CardMedia className={classes.cardimg} image={img} />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                {Title}
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                {Description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {children}
                </Card>
                <DisplayDialog open={this.state.dialog} imgsrc={this.state.img} Title={this.state.title} 
                Notes={this.state.notes} Url={this.state.url} onClose={this.handleClose} />
            </div>
        )
    }
};

export default withStyles(style)(CamCard);