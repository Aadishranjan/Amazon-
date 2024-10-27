import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Nevbar from './nevbar.jsx';
import Logout from './Logout.jsx';

function Profile() {
  
  const [userinfo, setUserinfo] = useState([]);
 
  const getuserInfo = async () => {
    const token = localStorage.getItem('token');
    const response = await Axios.get('http://localhost:3000/profile', {
      headers: {
        'authorization': token
        }
      });
    setUserinfo(response.data)
    }

  useEffect(() => {
    getuserInfo();
  }, []);

  return (
    <div className="profileMain">
    <Nevbar/>
    <div className="profilecontainer">
    <div className="profileInfoHeader"><h1>Welcome, {userinfo.fullname}</h1></div>
    <div className="profileinfobigcontainer">
    <div className="profileinfo1">
    <img className="profileinfoPic" src="./defaultImage/defaultProfileIcon.png" alt="profile pic"/>
    <h3 id="profileName">{userinfo.fullname}</h3>
    <p id="profileEmail">{userinfo.email}</p>
    <Logout />
    </div>
    <div className="profileinfo2">
    <h1>Personal Information</h1>
    <p id="profileP2"> Manage your personal information, including your contact details.</p>
    <div id="profilecards">
    <div id="profilecards1"><h3 className="profilecards1h3">Name</h3><p className="profilecards1p">{userinfo.fullname}</p></div>
    <div id="profilecards1"><h3 className="profilecards1h3">Email</h3><p className="profilecards1p">{userinfo.email}</p></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Profile