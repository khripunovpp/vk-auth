import React, {Component, Fragment} from "react";
import login from "../store/actions/login.js";
import checkSession from "../store/actions/checkSession.js";
import getUserData from "../store/actions/getUserData.js";
import { connect } from 'react-redux';

class WelcomePage extends Component {
    handleLogin = (e) => {
        e.preventDefault();
        this.props.login();
    }
    getUserData = () => {
        this.props.getUserData();
    }
    welcomeHTML =   <Fragment>
                        <h1 className="panel__title">Hi there, sigin to continue</h1>
                        <button onClick={this.handleLogin} className="btn">LogIn</button>
                    </Fragment>;
    profileHTML =   <h1 className="panel__title">Hi there, sigin to continue</h1>
    
    render() {
        const store = this.props.state;
        return(
            <div className="panel">
                {store.auth.login ? this.profileHTML : this.welcomeHTML}
            </div>
        )
    }
    componentDidMount() {
        this.props.checkSession().then(()=>this.getUserData());
    }
}
const mapStateToProps= state => ({
    state
})
const mapDispatchToProps = {
    login,
    checkSession,
    getUserData
}
export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)