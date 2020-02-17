import React from 'react';
import logout from '../store/actions/logout.js';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch();

    return (
        <button className="btn btn--link logout"onClick={() => dispatch(logout())}>Logout</button>
    )
}

export default Logout