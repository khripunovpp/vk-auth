import React from 'react';

export default function({friends}) {
    return(
        <ol className="friends__list">
            {friends.map(friend=><li key={friend.id} className="friends__item">{friend['first_name']} {friend['last_name']}</li>)}
        </ol>
    )
}