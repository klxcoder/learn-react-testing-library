import React from 'react';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

function Fetch() {
    const [users, setUsers] = React.useState([]);
    const [error, setError] = React.useState(null);

    const handleFetch = async (event) => {
        let result;

        try {
            result = await axios.get(URL);
            setUsers(result.data);
        } catch (error) {
            setError(error);
        }
    }

	return (
		<div className='border'>
			<button onClick={handleFetch}>Fetch Stories</button>

            {error && <span>Something went wrong ...</span>}

            <ul>
                {users.map(({id, name, username, email}) => (
                    <li key={id}>
                        {id} - {name} - {username} - {email}
                    </li>
                ))}
            </ul>
		</div>
	);
}

export default Fetch;
