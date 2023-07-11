import React from 'react';
import Profiles from './profiles.js';
import Leaderboard from './database.js';

export default function Board() {
    return (
        <div className='board'>
            <h1 className='leaderboard'>Leaderboard</h1>
            <Profiles Leaderboard={ Leaderboard() }/>
        </div>
    );
}