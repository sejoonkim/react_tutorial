import React, { useEffect } from 'react';


function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;

    useEffect(() => {
        console.log(user);

        return () => {

            console.log(user);
        }
    }, [user]); //called when changes done or called

    // useEffect(() => {
    //     console.log('components appear');
    //     // props -> state
    //     // REST API
    //     // D3 Video.js
    //     // setInterval, setTimeout
    //     return () => {
    //         // clearInterval, clearTimeout
    //         // delete library instance
    //         console.log('componenets disappear');
    //     }
    // }, [])
    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b> 
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>Delete</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

export default UserList;