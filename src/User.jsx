import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const lodedUser = useLoaderData();
  const [user, setUser] = useState(lodedUser);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("User deleted success");
          const remaining = user.filter((user) => user._id !== id);
          setUser(remaining);
        }
      });
  };
  return (
    <div>
      <h2>this is user</h2>
      <Link to={"/"}>
        <button>Go to Home</button>
      </Link>
      <br />
      <br />
      <p>All User: {user.length}</p>
      {user.map((user) => (
        <div key={user._id}>
          <p>
            Name: {user.name}. || Email: {user.email}{" "}
            <Link to={`/updateUser/${user._id}`}>
              <button>Update User</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default User;
