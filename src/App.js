import React, { useRef } from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
//import Counter from './Counter';

import './App.css';
//import InputSample from './InputSample';
import UserList from './UserList';

function App() {
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

  // nextId is managed by useRef()
  const nextId = useRef(4);

  const onCreate = () => {

    console.log(nextId.current)
    nextId.current += 1;
  }

  return (
    <UserList users={users}/>

    //<InputSample />

    // <Counter />

    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial />
    //   <Hello  color="pink" />
    // </Wrapper>

    
  );
}

export default App;
