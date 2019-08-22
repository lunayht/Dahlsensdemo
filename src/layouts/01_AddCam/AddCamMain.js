import React from 'react';
import '../../styles/AddCamMain.css';
import IpScanForm from '../../components/IpScanForm';
import * as crudAction from '../../actions/crudAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from '@material-ui/core';
import TestDialog from '../../components/TestDialog';
import store from '../../store/store';
import { testsuccess, testfailure } from '../../actions/commonAction';

class AddCamMain extends React.Component {
    constructor(props) {
		super(props);
		this.state ={
            localip: null,
            loading: false,
            success: false,
            test: false,
            scanresult: '',
            warning: ''
        };
        this.submitForm = this.submitForm.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    // componentDidMount() {
	// 	this.props.actions.checkclientlocalip()
	// 		.then(res => {
	// 			this.setState({
	// 				localip: res.data.localip
	// 			})
	// 		})
	// };

    handleClose() {
        this.setState({
            test: false
        })
    };
    
    submitForm(formProps) {
        if (this.props.state.activity.status === 'TESTURL') {
            this.props.actions.testurl(this.props.state.activity.testurl).then(data => {
                if (data.data.testsuccess) {
                    this.setState({
                        test: true,
                        warning: ''
                    })
                    store.dispatch(testsuccess(data.data.url))
                } else {
                    this.setState({
                        warning: data.data.url + ' is an invalid URL. Please try again.'
                    })
                    store.dispatch(testfailure(data.data.url))
                }
            })
        } else if (this.props.state.activity.status === 'SCANIP') {
            this.setState({
                success: false,
                loading: true,
                scanresult: ''
            });
            this.props.actions.clickscan(formProps).then(data => {
                this.setState({
                    loading: false,
                    success: true,
                    scanresult: 'Scan Results: ' + JSON.stringify(data.data.response, null, 4)
                })
            });
        }
    };

    render() {
        const { loading } = this.state;

        return(
            <div className='Page'>
                <h1 className='Addcam-Title'>Add IP Camera</h1>
                {/* <p>Your local IP address is {this.state.localip}</p> */}
                <h3 className='Addcam-Title'>Please enter your camera details: </h3>
                <div className='Addcam-Form'>
                    <IpScanForm onSubmit={this.submitForm}/>
                    {loading && <CircularProgress style={{margin: 20}} size={24} />}
                </div>
                <h4 className='Scan-result'>{this.state.scanresult}</h4>
                <h2 className='Test-result'>{this.state.warning}</h2>
                <TestDialog ipcamsrc={this.props.state.activity.validurl} open={this.state.test} onClose={this.handleClose} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCamMain);