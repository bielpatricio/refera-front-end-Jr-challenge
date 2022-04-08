import './UserList.css';
import React, { useEffect, useState } from "react";
import api from "../api/api";

const UserList = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
      api
        .get('/users')
        .then((response) => setUsers(response.data))
    }, []);
    console.log(users);

    return (
      <div className="container">
        <header className="header">
          <h2>User List</h2>
          <div className="lista">
              {users?.map((user) => (
                <div className="user" key={user.id}>
                  <h3>Name: {user.name}</h3>
                  <h3>Username: {user.username}</h3>
                  <h3>Email: {user.email}</h3>
                  <h3>Address: </h3>
                  <div className="address">
                    <h4>city: {user.address.city}</h4>
                    <h4>street: {user.address.street}</h4>
                    <h4>suite: {user.address.suite}</h4>
                    <h4>zipcode: {user.address.zipcode}</h4>
                  </div>
                </div>
              ))}
          </div>
        </header>
      </div>
    );
  }

  export default UserList;