import './RegisterUser.css';
import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    // Para salvar um novo usario, precisa colocar pelo menos um nome, se não, não salva!
    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    return (
      <div className="container">
        <header className="header">
          <h2>User Register</h2>

          <div className="lista">
            <Form 
              onSubmit={(event) => {
                // Salvando novo usuario
                  alert("Salvo com sucesso!");
                  navigate("/");
              }}
            >
                  <Form.Group
                   controlId="formName"
                   >
                     {/* Field obrigatoria para cadastrar novo usuario */}
                      <Form.Label>Nome Completo*</Form.Label>
                      <Form.Control type="name" placeholder="Enter name" value={name} onChange={handleNameChange} />
                  </Form.Group>

                  <Form.Group
                   controlId="formName"
                   >
                      <Form.Label>CPF</Form.Label>
                      <Form.Control type="cpf" placeholder="Enter CPF"/>
                  </Form.Group>

                  <Form.Group
                   controlId="formName"
                   >
                      <Form.Label>Idade do usuário</Form.Label>
                      <Form.Control type="number" placeholder="Enter usuário"/>
                  </Form.Group>

                  <Form.Group
                   controlId="formName"
                   >
                      <Form.Label>Endereço</Form.Label>
                      <Form.Control type="address" placeholder="Enter endereço"/>
                  </Form.Group>
                  <div className="buttons">
                    <button type="submit" className="button" disabled={!name}>
                      Save
                    </button>
                    {/* Ao apertar o button "cancel" automaticamente volta para a pagina inicial */}
                    <button className="button-cancel" onClick={() => navigate("/")}>
                      Cancel
                    </button>
                  </div>
            </Form>

          </div>
        </header>
      </div>
    );
  }

  export default RegisterUser;


