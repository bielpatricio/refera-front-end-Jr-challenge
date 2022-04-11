import './App.css';
import UserList from './ListarUsers/UserList';
import RegisterUSer from './Register/RegisterUser';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      {/* Verificar qual das paginas deve aparecer, que vai depender se 'newUser' eh true ou false */}

      
            {/* Listar todos os usuarios */}
      {/* {screen==='list-users' ? (
        <>
          <div className="div-userlist">
            <UserList setScreen={handleScreen}/>
          </div>
        </>
      ):(
          <div className="div-regiter">
            <RegisterUSer setScreen={printbatata} />
          </div>
      )} */}

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="newUser" element={<RegisterUSer />} />
      </Routes>
    </div>
  );
}

export default App;
