import React, {Component} from "react";
import login from "../store/actions/login.js";
import { connect } from 'react-redux';

class WelcomePage extends Component {
    handleLogin = (e) => {
        e.preventDefault();
        this.props.login()
    }
    render() {
        console.log(this.props)
        return(
            <button onClick={this.handleLogin}>LogIn</button>
        )
    }
}
const mapStateToProps= state => ({
    state
})
const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)