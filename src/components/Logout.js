import React from 'react';
import logout from '../store/actions/logout.js';
import { connect } from 'react-redux';

const Logout = ({logout}) => {
    return(
        <button className="btn btn--link logout" onClick={logout}>Logout</button>
    )
}

const mapDispatchToProps = {
    logout
}

export default connect(null, mapDispatchToProps)(Logout)