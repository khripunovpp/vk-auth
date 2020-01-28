import React from 'react';

export default function({sign, onClick}) {
    return(
        <button onClick={onClick} className="btn">{sign}</button>
    )
}