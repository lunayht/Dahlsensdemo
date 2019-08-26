import React from 'react';
import '../../styles/AnalysisPage.css'
import { Button } from '@material-ui/core';

class AnalysisPage extends React.Component {
    render() {
        return(
            <div>
                <h2 className='Addcam-Title'>Station Analysis</h2>
                <div className='Buttons'>
                    <h3 className='Info'>Date Range: </h3>
                    <Button color='inherit'>
                        <h3 className='btntext'>19 - 23 Aug 2019</h3>
                    </Button>
                    <h3 className='Info'>Time: </h3>
                    <Button color='inherit'>
                        <h3 className='btntext'>10am - 5pm</h3>
                    </Button>
                </div>
                <table id='station'>
                    <tbody>
                        <tr>
                            <th>Station ID</th>
                            <th>Station Name</th>
                            <th>Time Used</th>
                            <th>Peak Utilisation</th>
                            <th>Average Utilisation (%)</th>
                            <th>Peak Usage (person)</th>
                        </tr>
                        <tr>
                            <td>001</td>
                            <td>Nog Nailer</td>
                            <td>6h 32m</td>
                            <td>12pm - 2pm</td>
                            <td>38.1</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Bandsaw</td>
                            <td>5h 31m</td>
                            <td>2pm - 4pm</td>
                            <td>68.4</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Frame Stack</td>
                            <td>4h 15m</td>
                            <td>10am - 12pm</td>
                            <td>59.3</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};

export default AnalysisPage;