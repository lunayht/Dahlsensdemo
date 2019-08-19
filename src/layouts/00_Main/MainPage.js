import React from 'react';
import '../../css/MainPage.css'
import IpScanForm from '../../components/IpScanForm';
import * as crudAction from '../../actions/crudAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
            console.log(data)
        });
    }

    render() {
        return(
            <div className='App'>
                <h1>Your local IP address is {this.state.localip}</h1>
                <IpScanForm onSubmit={this.submitForm}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
})

export default connect(null, mapDispatchToProps)(MainPage);