import React, {Component} from "react";
import setToken from "../store/actions/setToken.js";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class WelcomePage extends Component {
    setToken() {
        this.props.setToken(this.props.location.hash.slice(1)).then(()=>window.location = "./")
    }
    render() {
        return(
            <div></div>
        )
    }
    componentDidMount() {
        this.setToken();
    }
}
const mapDispatchToProps = {
    setToken
}
export default connect(null, mapDispatchToProps)(WelcomePage)