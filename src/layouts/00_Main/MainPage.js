import React from 'react';
import '../../css/MainPage.css'
import IpScanForm from '../../components/IpScanForm';
import * as crudAction from '../../actions/crudAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from '@material-ui/core';

class MainPage extends React.Component {
    constructor(props) {
		super(props);
		this.state ={
            localip: null,
            loading: false,
            success: false,
            data: ''
        };
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
		this.props.actions.checkclientlocalip()
			.then(res => {
				this.setState({
					localip: res.data.localip
				})
			})
	}
    
    submitForm(formProps) {
        this.setState({
            success: false,
            loading: true,
        });
        this.props.actions.clickscan(formProps).then(data => {
            this.setState({
                loading: false,
                success: true,
                data: JSON.stringify(data.data.response, null, 4)
            })
        });
    }

    render() {
        const { loading } = this.state;

        return(
            <div className='App'>
                <h1>Your local IP address is {this.state.localip}</h1>
                <IpScanForm onSubmit={this.submitForm}/>
                {loading && <CircularProgress size={24} />}
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
})

export default connect(null, mapDispatchToProps)(MainPage);