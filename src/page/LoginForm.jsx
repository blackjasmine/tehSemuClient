import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import axios from "axios";
import Nav from '../nav/Nav.jsx';
import "./LoginForm.css";

function loginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Mohon isi semua kolom.");
      return;
    }

    const data = { email, password};

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", data);
      const { token, user } = res.data;
      login(user, token);
      alert(res.data.message || "berhasil login!");
    } catch (err) {
      console.error("Gagal login!", err);
      alert("Gagal login ke server.");
    }
  }

  return (
    <div className="cont">
      <Nav />
      <div className="LogCont">
        <div className="ContChild">
          <h2>Login Form</h2>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit">Login</button>
          </form>
          <p>Tidak punya akun? <a href="/register">Daftar</a></p>
        </div>
      </div>
    </div>
  );
}

export default loginForm;