import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        // set default values
        name: '',
        nickname: '',
    });

    const nameInput =useRef();

    // use destructuring assignment to extract values
    const { name, nickname } = inputs;

    // const [text, setText] = useState('');

    const onChange = (e) => {
        // use destructuring assignment to exract values from e.target
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        })


        // const nextInputs = {
        //     ...inputs,
        //     [name]: value,
        // };

        //setInputs(nextInputs);
        

        // console.log(e.target.name);
        // console.log(e.target.value);
        // setText(e.target.value);
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();

        // setText('');
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder="name" 
                onChange={onChange} 
                value={name}
                ref={nameInput}

            />
            <input 
                name="nickname" 
                placeholder="nickname" 
                onChange={onChange} 
                value={nickname}
            />
            {/* <input onChange={onChange} value={text} /> */}
            <button onClick={onReset}>Initialize</button>
            <div>
                <b>value: </b>
                {name} ({nickname})
                {/* {text} */}
            </div>
        </div>
    );
}

export default InputSample;