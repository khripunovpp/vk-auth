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
        if(query.length) {
            const results = this.props.friends.filter(friend => {
                const name = friend['first_name'].toLowerCase();
                return name.includes(query)
            });
            this.setState({
                ...this.state,
                results
            })
        } else {
            this.setState({
                searchQuery: '',
                results: []
            })
        }
    }
    render() {
        return(
            <div className="friends">
                <p className="friends__title">Friends <strong>{this.props.friends.length}</strong></p>
                <div className="friends__inner">
                    <p className="friends__subtitle">Try to find somebody of them</p>
                    <input className="friends__search field" id="search" type="text" value={this.state.searchQuery} onChange={this.findHandler} />
                    {this.state.results.length > 0 
                        ? <Fragment><p className="friends__resultsSign">You find {this.state.results.length} friends</p><FriendsList friends={this.state.results} /></Fragment> 
                        : (this.state.searchQuery.length > 0) && <p className="friends__noresultSign">No results</p>
                    }
                </div>
            </div>
        )
    }
}
export default FriendsListContainer