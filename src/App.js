import React, { useRef, useState } from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
//import Counter from './Counter';

import './App.css';
//import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  // useState with objects
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  // manage with useState
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'brian',
        email: 'public.sejoon@gmail.com',
        active: true,
    },
    {
        id: 2,
        username: 'max',
        email: 'public.max@gmail.com',
        active: false,
    },
    {
        id: 3,
        username: 'jaeyi',
        email: 'public.jaeyi@gmail.com',
        active: false,
    }
  ]);


  // nextId is managed by useRef()
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    //setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  };


  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active } // make a new object, copy original, then adjust
        : user
    ));
  }

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
    

    //<InputSample />

    // <Counter />

    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial />
    //   <Hello  color="pink" />
    // </Wrapper>

    
  );
}

export default App;
