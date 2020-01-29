import React, {Component, Fragment} from "react";
import setToken from "../store/actions/setToken.js";
import { connect } from 'react-redux';

class WelcomePage extends Component {
    state = {
        accessError: false
    }
    queryString = this.props.location.hash.slice(1);
    setToken = () => {
        this.props.setToken(this.queryString).then(()=>window.location = "./")
    }
    setError = () => {
        this.setState({
            accessError: true
        })
    }
    render() {
        return(
            <Fragment>
                {this.state.accessError && <h1>Error</h1>}
            </Fragment>
        )
    }
    componentDidMount() {
        this.queryString.includes('token') 
            ? this.setToken()
            : this.setError();
    }
}
const mapDispatchToProps = {
    setToken
}
export default connect(null, mapDispatchToProps)(WelcomePage)