import React from 'react';
import { getinfo } from '../../utils/httpUtil';
import { Button, Menu, MenuItem } from '@material-ui/core';
import graph from './image.png';

class MonitorPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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

export default MonitorPage;