import { useState } from "react";
import axios from "axios";
import Nav from '../nav/Nav.jsx';
import "./RegisterForm.css";

function registerForm() {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");


  const Register = async (e) => {
    e.preventDefault();

    if (!email || !nama || !password) {
      alert("Mohon isi semua kolom.");
      return;
    }

    const data = { email, nama, password};

    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", data);
      alert(res.data.message || "Data berhasil dikirim ke server!");
    } catch (err) {
      console.error("Gagal kirim data:", err);
      alert("Gagal mengirim data ke server.");
    }
  };
  
  return (
    <div className="cont">
      <Nav />
      <div className="LogCont">
        <div className="ContChild">
          <h2>Register Form</h2>
          <form onSubmit={Register}>
            <input type="text" placeholder="Name" value={nama} onChange={(e) => setNama(e.target.value)} />
            <br />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit">Daftar</button>
          </form>
          <p>Sudah punya akun? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default registerForm