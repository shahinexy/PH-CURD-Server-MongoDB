
import './App.css'

function App() {

  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const neWuser = { name, email };
    console.log(neWuser);
  }

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

    </>
  )
}

export default App
