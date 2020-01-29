import React from 'react';
import logo from "../logo.jpg";
import { connect } from 'react-redux';
import { getAuthState } from '../store/selects.js';
import Logout from "./Logout.js"

const header = ({auth}) => {
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <img src={logo} alt="" className="header__logo logo" />
                    {auth.login && <Logout />}
                </div>
            </div>
        </header> 
    )
}

const mapStateToProps= state => ({
    auth: getAuthState(state)
})
export default connect(mapStateToProps)(header)