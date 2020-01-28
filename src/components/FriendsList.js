import React from 'react';

export default function({friends}) {
    return(
        <ol>
            {friends.map(friend=><li key={friend.id}>{friend['first_name']} {friend['last_name']}</li>)}
        </ol>
    )
}