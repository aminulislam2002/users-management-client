import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then(data => console.log(data))
  });

  return (
    <>
      <h1>Users Management Client {user.length}</h1>
    </>
  );
}

export default App;
