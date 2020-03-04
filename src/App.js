import React, { useRef, useState, useMemo, useCallback, useReducer, createContext } from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
//import Counter from './Counter';

import './App.css';
//import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users) {
  console.log('counting active users...');
  return users.filter(user => user.active).length;
}

const initialState = {
  // inputs: {
  //   username: '',
  //   email: '',
  // },
  users: [
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
  ]
}

function reducer(state, action) {
  switch (action.type) {
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id
          ? { ...user, active: !user.active}
          : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const { username, email } = form;
  const nextId = useRef(4);
  const { users } = state;
  //const { username, email } = state.inputs;

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name, 
  //     value
  //   })
  // }, [])

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   });
  // }, []);

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id
  //   });
  // }, [])

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        // username={username}
        // email={email}
        // onChange={onChange}
        // onCreate={onCreate}
      />
      <UserList 
        users={users} 
        // onToggle={onToggle}
        // onRemove={onRemove}
        />
      {/* <UserList users={users} onRemove={onRemove} onToggle={onToggle}/> */}
      <div>Active users: {count}</div>
      {/* <div>Active users: {count}</div> */}
    </UserDispatch.Provider>
    

    //<InputSample />

    // <Counter />

    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial />
    //   <Hello  color="pink" />
    // </Wrapper>

    
  );
}

export default App;


// // useState with objects
// const [inputs, setInputs] = useState({
//   username: '',
//   email: '',
// });
// const { username, email } = inputs;
// const onChange = useCallback(e => {
//   const { name, value } = e.target;
//   setInputs({
//     ...inputs,
//     [name]: value
//   });
// }, [inputs]);
// // manage with useState
// const [users, setUsers] = useState([
//   {
//       id: 1,
//       username: 'brian',
//       email: 'public.sejoon@gmail.com',
//       active: true,
//   },
//   {
//       id: 2,
//       username: 'max',
//       email: 'public.max@gmail.com',
//       active: false,
//   },
//   {
//       id: 3,
//       username: 'jaeyi',
//       email: 'public.jaeyi@gmail.com',
//       active: false,
//   }
// ]);


// // nextId is managed by useRef()
// const nextId = useRef(4);

// const onCreate = useCallback(() => {
//   const user = {
//     id: nextId.current,
//     username,
//     email,
//   };
//   //setUsers([...users, user]);
//   setUsers(users => users.concat(user));

//   setInputs({
//     username: '',
//     email: ''
//   });

//   nextId.current += 1;
// }, [username, email]);


// const onRemove = useCallback(id => {
//   setUsers(user => users.filter(user => user.id !== id));
// }, []);


// const onToggle = useCallback(id => {
//   setUsers(users => users.map(
//     user => user.id === id
//       ? { ...user, active: !user.active } // make a new object, copy original, then adjust
//       : user
//   ));
// }, []);

// const count = useMemo(() => countActiveUsers(users), [users]);