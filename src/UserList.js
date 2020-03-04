import React from 'react';


function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList() {

    const users = [
        {
            id: 1,
            username: 'brian',
            email: 'public.sejoon@gmail.com'
        },
        {
            id: 2,
            username: 'max',
            email: 'public.max@gmail.com'
        },
        {
            id: 3,
            username: 'jaeyi',
            email: 'public.jaeyi@gmail.com'
        }
    ];

    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    );
}

export default UserList;