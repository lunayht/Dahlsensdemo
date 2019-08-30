import React from 'react';
import { Card, withStyles, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core';
import classNames from 'classnames';
import styles from '../styles/styles';
import { checkcard } from '../utils/httpUtil';
import DisplayDialog from './DisplayDialog';
import DoneIcon from '@material-ui/icons/Done';

const style = {
    camcard: styles.camcard,
    cardimg: styles.cardimg,
    doneicon: styles.doneicon
};

class CamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: false,
            config: false,
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
            config: false,
            img: '',
            title: '',
            url: '',
            notes: '',
            id: '',
        })
        window.location.reload() // Reload page to update assign status 
    };

    render() {
        const { children, custom, classes, className, Img, Title, Description, Config } = this.props;

        return(
            <div> 
                <Card className={classNames(classes.camcard, className)}
                {...custom}>
                    <CardActionArea 
                    onClick={() => {
                        var imgstring = Img.split(',');
                        checkcard({b64img: imgstring[1]}).then((resData) => {
                            this.setState({ 
                                dialog: true,
                                img: resData.data.data.b64img,
                                title: resData.data.data.title,
                                url: resData.data.data.url,
                                notes: resData.data.data.notes,
                                id: resData.data.data.id,
                                config: resData.data.data.assign
                            })
                        });
                        }}
                    >
                        <CardMedia className={classes.cardimg} image={Img} />
                        <CardContent>
                            <div className='Div2'>
                                <div className='Div-CamCard'>
                                <Typography gutterBottom variant='h5' component='h2'>
                                    {Title}
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    {Description}
                                </Typography>
                                </div>
                                {(this.state.config || Config) ? <DoneIcon className={classes.doneicon} /> : <div></div>}
                            </div>
                        </CardContent>
                    </CardActionArea>
                    {children}
                </Card>
                <DisplayDialog open={this.state.dialog} Imgsrc={this.state.img} Title={this.state.title} 
                Notes={this.state.notes} Url={this.state.url} Id={this.state.id} onClose={this.handleClose} />
            </div>
        )
    }
};

export default withStyles(style)(CamCard);