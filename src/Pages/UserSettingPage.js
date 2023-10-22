import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { StyledProfile, StyledWatchlist, GroupButton, StyledDetail, StyledBackground } from '../Assets/Styles/styled';
import imgProfile from '../Assets/Images/noprofile.png'

const UserSettingPage = () => {
    const [fullname, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    return (
        <StyledBackground>
            <StyledProfile>
                <StyledDetail>
                    <img src={imgProfile} alt='profilepage' />
                    <p>Username :</p>
                    <p>email :</p>
                    <Link to='/' ><GroupButton outline color='secondary'>Back</GroupButton></Link>
                </StyledDetail>
                <StyledWatchlist>
                <h1 style={{fontWeight:'600'}}>Profile</h1>
                <form>
                <div className="form-group">
                  <input noValidate 
                    type="name"
                    name="name"
                    value={fullname}
                    placeholder='Full Name'
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input noValidate 
                    type="username"
                    name="username"
                    value={username}
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input noValidate 
                    type="email"
                    name="email"
                    value={email}
                    placeholder='E-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input noValidate 
                    type="password"
                    name="password"
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="image">Profile Picture</label>
                  <input noValidate 
                    type="file"
                    name="image"
                    value={image}
                    placeholder='Profile Picture'
                    onChange={(e) => setImage(e.target.value)}
                    className="form-control"
                  />
                </div>
                <GroupButton outline color='primary'>Update</GroupButton>
            </form>
                </StyledWatchlist>
            </StyledProfile>
        </StyledBackground>
    )
}

export default UserSettingPage;