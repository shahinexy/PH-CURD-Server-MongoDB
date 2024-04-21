import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const user = useLoaderData()
    return (
        <div>
            <h2>this is user</h2>
            <Link to={'/'}><button>Go to User</button></Link>
            <br /><br />
            <p>All User: {user.length}</p>
            {
                user.map(user => <div key={user._id}>
                <p>Name: {user.name}. => Email: {user.email}</p>
                </div>)
            }
        </div>
    );
};

export default User;