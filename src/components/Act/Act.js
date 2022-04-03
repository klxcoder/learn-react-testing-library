import React from 'react';

function Act() {
    const [count, setCount] = React.useState(0);
    const handleClick = () => setCount(count => count + 1);

    return (
        <div className='border'>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default Act;
