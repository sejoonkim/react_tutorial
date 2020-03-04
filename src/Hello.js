import React from 'react';

function Hello({ color, name }) {
    return <div style={{
        color
    }}>안녕하세요 {name}</div>;
}

// make default value
Hello.defaultProps = {
    name: 'noName'
};

export default Hello;