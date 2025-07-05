import React, { useContext, useState} from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import "./Dashboard.css";
import Nav from '../nav/Nav.jsx';


const Dashboard = () => {

  const { user, setUser } = useContext(AuthContext);
  const [ file, setFile ] = useState(null);
  const [ preview, setPreview ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  if (!user) return <p>Loading...</p>;

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('profile', file);

    try {
      const res = await axios.post('http://localhost:3000/api/user/upload-profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setUser(res.data);
      setFile(null);
      setPreview(null);
    } catch (err) {
      console.error('Upload gagal', err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="contDash">
      <Nav />
      <div className="conta">
        <h2 className="das">Dashboard</h2>
        <p className="pdas">{user.nama}</p>

        <div className="imgCont">
          <img
          src={preview || user.profilepicture || '/default-avatar.png'}
          alt="Profile"
          width="150"
          height="150"
          style={{borderRadius: '50%', objectFit: 'cover'}}
          />
        </div>

        <div className="form">
          <input id="uploadInput" className="hiddenInput" type="file" accept="image/*" onChange={handleFileChange} />
          <label htmlFor="uploadInput" className="customFileButton">Pilih Foto</label>
          <button className="buttonDash" onClick={handleUpload} disabled={loading}>
            {loading ? 'Mengunggah...' : 'Ganti Foto Profil'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;