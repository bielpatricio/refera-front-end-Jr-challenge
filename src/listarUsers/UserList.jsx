import './UserList.css';
import React, { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState();
    const navigate = useNavigate();

    // Carrega os usuarios da API
    useEffect(() => {
      api
        .get('/users')
        .then((response) => setUsers(response.data))
    }, []);

    return (
      <div className="container">
          <div className="div-header">
            <h2>User List</h2>
            <div className="div-button">
              {/* Botao para mostrar a tela de cadastro de novo usuario */}
              <button className="button" onClick={() => navigate("/newUser")}>New User
              </button>
            </div>
          </div>
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
      </div>
    );
  }

  export default UserList;