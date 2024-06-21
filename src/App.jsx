import "./App.css";
import Card from "./componenets/Card";
import { users as initialUsers } from "../api/api.json";
import { useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState(initialUsers);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setUsers([]);
    } else {
      const filteredUsers = initialUsers.filter((user) =>
        user.id.toString().includes(searchQuery),
      );
      setUsers(filteredUsers);
    }
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <>
      <h1 className="title">Employee Dashboard</h1>
      <hr className="hr" />
      <div>
        <input
          type="text"
          className="search"
          placeholder="Enter the employee id"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="container">
        {users.map((user, index) => (
          <Card
            key={index}
            name={user.firstName}
            id={user.id}
            salary={user.salary}
            age={user.age}
            gender={user.gender}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default App;
