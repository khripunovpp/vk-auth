import React, {Component, Fragment} from "react";
import FriendsList from './FriendsList.js';


class FriendsListContainer extends Component {
    state = {
        searchQuery: '',
        results: []
    }
    findHandler = (e) => {
        let value = e.target.value;
        this.setState(state=>({
            ...state,
            searchQuery: value
        }), this.searchFriends)
    }
    searchFriends = () => {
        const query = this.state.searchQuery.toLowerCase();
        if(query) {
            const results = this.props.friends.filter(friend => {
                const name = friend['first_name'].toLowerCase();
                return name.includes(query)
            });
            console.log(results)
            this.setState({
                ...this.state,
                results
            })
        }
    }
    render() {
        return(
            <div className="friends">
                <p>You have {this.props.friends.length} friends</p>
                <p>And you may try to find somebody of them</p>
                <input id="search" type="text" value={this.state.searchQuery} onChange={this.findHandler} />
                {this.state.results.length > 0
                    ? <Fragment><p>You find {this.state.results.length} friends</p><FriendsList friends={this.state.results} /></Fragment>
                    : <p>No results</p>}
            </div>
        )
    }
}
export default FriendsListContainer