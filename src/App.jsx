import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const neWuser = { name, email };
    console.log(neWuser);
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(neWuser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User added successfull");
          form.reset();
        }
      });
  };

  return (
    <>
      <h1>CURD Server</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" />
          <br />
          <input type="email" name="email" placeholder="mail" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Link to={"/user"}>
        <button>Go to User</button>
      </Link>
    </>
  );
}

export default App;
