import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const lodedUser = useLoaderData();
    const [user, setUser] = useState(lodedUser)

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            alert('User deleted success')
            const remaining = user.filter(user => user._id !== id)
            setUser(remaining)
        }
    })
  };
  return (
    <div>
      <h2>this is user</h2>
      <Link to={"/"}>
        <button>Go to User</button>
      </Link>
      <br />
      <br />
      <p>All User: {user.length}</p>
      {user.map((user) => (
        <div key={user._id}>
          <p>
            Name: {user.name}. ||  Email: {user.email}{" "}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default User;
