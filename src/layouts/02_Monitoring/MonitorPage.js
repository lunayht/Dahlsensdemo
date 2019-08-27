import React from 'react';
import { getinfo } from '../../utils/httpUtil';
import { Button, Menu, MenuItem } from '@material-ui/core';
import graph from './image.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crudAction from '../../actions/crudAction';

class MonitorPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            img64: <div></div>,
            title: [],
            menu: false,
            anchorEl: null
        };
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
    };

    handleOpenMenu(e) {
        this.setState({ 
            menu: true,
            anchorEl: e.currentTarget
        })
    };

    handleCloseMenu() {
        this.setState({ 
            menu: false,
            anchorEl: null 
        })
    };

    componentDidMount() {
        getinfo()
        .then((data) => {
            this.setState({ title: data.data.data })
        })
        if (this.props.state.activity.status === 'REDIRECT_TO_MONITOR') {
            this.setState({
                img64: <div>
                    <img className='Display-img' src={`data:image/jpg;base64,${this.props.state.activity.imgnow}`} alt='thumbnail' />
                    <h4 className='Small-title'>{this.props.state.activity.titlenow}</h4>
                </div>
            })
        } else if (this.props.state.activity.imgnow !== '') {
            this.setState({
                img64: <div>
                    <img className='Display-img' src={`data:image/jpg;base64,${this.props.state.activity.imgnow}`} alt='thumbnail' />
                    <h4 className='Small-title'>{this.props.state.activity.titlenow}</h4>
                </div>
            })
        }
    };

    render() {
        const { anchorEl } = this.state;

        return(
            <div>
                <h2 className='Addcam-Title'>Monitor</h2>
                <div className='Div2'>
                    <div className='Display1'>
                        <Button style={{marginBottom: 10}} onClick={this.handleOpenMenu} color='inherit' variant='outlined'>Choose Camera</Button>
                        <Menu
                        anchorEl={anchorEl}
                        open={this.state.menu} onClose={this.handleCloseMenu}>
                        {this.state.title.map(el =>
                            <MenuItem key={el.b64img} onClick={() => {
                                this.setState({img64: 
                                    <div>
                                        <img className='Display-img' src={`data:image/jpg;base64,${el.b64img}`} alt='thumbnail' />
                                        <h4 className='Small-title'>{el.title}</h4>
                                    </div>,
                                    menu: false
                                })
                                this.props.actions.displayimg(el.b64img, el.title)
                            }}>
                            {el.title}
                            </MenuItem>
                            )}
                        </Menu>
                        {this.state.img64}
                    </div>
                    <img className='Graph' src={graph} alt='Graph'/>
                </div>
                <table id='station'>
                    <tbody>
                        <tr>
                            <th>Time</th>
                            <th>Station Name</th>
                            <th>Personnel</th>
                            <th>SKU</th>
                        </tr>
                        <tr>
                            <td>3:01 pm</td>
                            <td>Nog Nailer</td>
                            <td>Scott N.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3:01 pm</td>
                            <td>Nog Nailer</td>
                            <td>James Y.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3:02 pm</td>
                            <td>Nog Nailer</td>
                            <td>Scott N.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3:03 pm</td>
                            <td>Nog Nailer</td>
                            <td>James Y.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3:07 pm</td>
                            <td>Nog Nailer</td>
                            <td>Tim C.</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(MonitorPage);