import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleAddUser = async(event) => {
    event.preventDefault();
    const form  = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {name, email};
    console.log(user)

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId) {
          alert("Register user successfully")
          form.reset()  
        }
      })
  }

  return (
    <>
      <Link to="/users"><button>Users List</button></Link>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </>
  )
}

export default App
