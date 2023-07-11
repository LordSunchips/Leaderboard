import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

export default function Profiles({ Leaderboard }) {
    return (
        <div id='profile'>
            {Item(Leaderboard)}
        </div>
    );
}


function Item(data) {  
  return (
        <>
            {
                data.map((profile, index) => (
                    <div className='flex' key={profile.id}>
                        <div className='item'>
                            <img id="image" src={"https://avatars.githubusercontent.com/" + profile.discord} alt=''/>
                            <div className='name'>
                                { index === 0 ? (
                                    <h2 className="name text-dark">{(index + 1) + ". " + profile.discord + " 🥇"}</h2>
                                ) : (
                                    index === 1 ? ( <h2 className="name text-dark">{(index + 1) + ". " + profile.discord + " 🥈"}</h2> ) : (
                                        index === 2 ? ( <h2 className="name text-dark">{(index + 1) + ". " + profile.discord + " 🥉"}</h2> ) : (
                                            <h2 className="name text-dark">{(index + 1) + ". " + profile.discord}</h2>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                        <div className='score'>
                            <span>{profile.points}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}