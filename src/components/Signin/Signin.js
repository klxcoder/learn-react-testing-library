import React from "react";

const getUser = async () => Promise.resolve({ id: '1', name: 'Robin' });

function Signin() {
    // const [search, setSearch] = React.useState('');
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            const user = await getUser();
            setUser(user);
        })();
    }, []);

    return (
        <div className="border">
            {user?<p>Signed in as {user.name}</p>:<p>Not sign in</p>}
            {/* <input value={search} onChange={(e) => setSearch(e.target.value)} /> */}
        </div>
    );
}

export default Signin;
