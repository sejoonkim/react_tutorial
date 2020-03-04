import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';


const User = React.memo(function User({ user }) {
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch)
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
                onClick={() => dispatch({
                    type: 'TOGGLE_USER',
                    id
                })}
            >
                {username}
            </b> 
            &nbsp;
            <span>({email})</span>
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>Delete</button>
        </div>
    )
});

function UserList({ users }) {

    return (
        <div>
            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            // onRemove={onRemove}
                            // onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

export default React.memo(
    UserList, 
    (prevProps, nextProps) => nextProps.users === prevProps.users
);