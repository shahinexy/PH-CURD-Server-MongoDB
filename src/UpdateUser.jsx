import { Link, useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const loaderUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);

    fetch(`http://localhost:4000/users/${loaderUser._id}`, {
        method: "PUT",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.modifiedCount > 0){
            alert('User updated succecc')
        }
    })
  };
  return (
    <div>
      <h2>User Name: {loaderUser.name}</h2>
      <Link to={"/user"}>
        <button>Back to User</button>
      </Link>
    <br /> <br />
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" name="name" defaultValue={loaderUser?.name} placeholder="name" />
          <br />
          <input type="email" name="email" defaultValue={loaderUser?.email} placeholder="mail" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
