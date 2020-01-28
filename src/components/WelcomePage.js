import React, {Component, Fragment} from "react";
import login from "../store/actions/login.js";
import checkSession from "../store/actions/checkSession.js";
import getProfileData from "../store/actions/getProfileData.js";
import getFriendsList from "../store/actions/getFriendsList.js";
import { connect } from 'react-redux';
import Panel from './Panel.js';
import Button from './Button.js';
import FriendsListContainer from './FriendsListContainer.js';

const WelcomePanel = ({loginHandle}) => (
    <Panel>
        <h1 className="panel__title">Hi there, signin to continue</h1>
        <Button onClick={loginHandle} sign="Login" />
    </Panel>  
)

const ProfilePanel = (props) => {
    const userData = props.user.profile;
    const friendsList = props.user.friends;
    return (
        <Panel>
            <img src={userData['photo_50']} className="ava" alt="" />
            <h1 className="panel__title">Hi {`${userData['first_name']} ${userData['last_name']}`}, glad to see you</h1>
            {friendsList.length > 0 && <FriendsListContainer friends={friendsList} />}
        </Panel>  
    )
}

class WelcomePage extends Component {
    handleLogin = (e) => {
        e.preventDefault();
        this.props.login();
    }
    getFriendsList = () => {
        this.props.getFriendsList();
    }
    getProfileData = () => {
        this.props.getProfileData();
    }
    
    render() {
        const store = this.props.state;
        console.log(store)
        return(
            <Fragment>
                {store.auth.login
                    ? store.user.profile
                        ? <ProfilePanel user={store.user} /> 
                        : <Panel>Loading...</Panel>
                    : <WelcomePanel loginHandle={this.handleLogin} />}
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.checkSession().then(()=>{
            this.getProfileData();
        }).then(()=> {
            
            this.getFriendsList();
        });
    }
}
const mapStateToProps= state => ({
    state
})
const mapDispatchToProps = {
    login,
    checkSession,
    getFriendsList,
    getProfileData
}
export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)