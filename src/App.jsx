import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(name, email, user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = [...users, data]
        setUsers(newUsers)
        form.rest();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Users Management Client {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} : {user.name} : {user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
