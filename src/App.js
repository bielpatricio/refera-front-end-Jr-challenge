import './App.css';
import UserList from './ListarUsers/UserList';
import RegisterUser from './Register/RegisterUser';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="newUser" element={<RegisterUser />} />
      </Routes>
    </div>
  );
}

export default App;
