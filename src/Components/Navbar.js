import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { useDispatch } from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";

import imgProfile from "../Assets/Images/noprofile.png";
import { postSignUp, postSignIn, logout } from "../Redux/actions/UserActions";
import { getSearchValue } from "../Redux/actions/HomePage";
import { getValue } from "../Redux/types/HomePage";
import BrandLogo from "../Assets/Images/brand-logo.png";
import { StyledNavbar, StyledImg, StyledInput } from "../Assets/Styles/styled";
import "../Assets/Styles/loginModal.css";
import "../Assets/Styles/Form.css";
import Images from "../Assets/Images/brand-logo.png";


const MODAL_SIGNUP = 1;
const MODAL_LOGIN = 2;

const Navbar = ({ auth, value, getSearchValue }) => {

  //SEARCH
  const [search, setSearch] = useState(value)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getSearchValue(search)
  }

  //LOGIN & REGISTRATION
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(null);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [userSignin, setUserSignin] = useState({
    username: "",
    password: "",
    token: "",
  });

  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);


  return (
    <StyledNavbar>
      <Link to="/" className="img-logo">
        <StyledImg src={BrandLogo} alt="logo" />
      </Link>
      <li className="search">
        <Link to='/search-page'>
          <form action='' onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="Search movie" onChange={handleChange} />
          </form>
        </Link>
      </li>
      <li className="form">
        <div>
          {auth ? (
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret className="dropdowm">
                <img src={imgProfile} alt='profile' />
              </DropdownToggle>
              <DropdownMenu>
                <Link to="/user-profile-page">
                  <DropdownItem>Profile</DropdownItem>
                </Link>
                <Link to="/user-setting-page">
                  <DropdownItem>Settings</DropdownItem>
                </Link>
                <DropdownItem>Help</DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  toggle={toggle}
                  onClick={() => {
                    dispatch(logout()); window.open("/", "_self")
                  }}
                >
                  Sign Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (<div
            className="login"
            onClick={() => {
              setIsModalOpen(true);
              setWhichModal(MODAL_LOGIN);
            }}
          >
            Sign in
          </div>
            )}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(true)}
            className="modal-container"
            overlayClassName="modal-overlay--center"
            contentLabel="Learn Modal"
          >
            {rederWhichModal()}
          </Modal>
        </div>
      </li>
    </StyledNavbar>
  );

  function rederWhichModal() {
    const toggleModal = (e) => {
      e.preventDefault();
      setIsModalOpen(false);
    };

    const handleChange = (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSignIn = (e) => {
      setUserSignin({
        ...userSignin,
        [e.target.name]: e.target.value,
      });
    };

    const submitSignUp = (e) => {
      const body = {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      };
      dispatch(postSignUp(body));
      setIsModalOpen(false);
    };

    const submitSignIn = (e) => {
      const body = {
        username: userSignin.username,
        password: userSignin.password,
      };
      dispatch(postSignIn(body));
      setIsModalOpen(false)
    };

    if (whichModal === MODAL_LOGIN) {
      return (
        <>
          <div>
            <button
              className="home-login-btn"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="home-login">
            <img src={Images} alt='profile' />
            <form className="home-form" onSubmit={toggleModal}>
              <div>Username</div>
              <input type="text" placeholder="Username" name="username" onChange={(e) => handleSignIn(e)} />
              <div>Password</div>
              <input type="password" placeholder="Password" name="password" onChange={(e) => handleSignIn(e)} />
              <button
                className="home-form-submit"
                type="submit"
                onClick={submitSignIn}
              >
                Login
              </button>
            </form>
            <h2 className="home-login-redirect">
              Don't have an account?{" "}
              <span
                className="redirect-signup"
                onClick={() => {
                  setWhichModal(MODAL_SIGNUP);
                }}
              >
                Sign Up
              </span>
            </h2>
          </div>
        </>
      );
    } else if (whichModal === MODAL_SIGNUP) {
      return (
        <>
          <div>
            <button
              className="home-login-btn"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              X
            </button>
          </div>

          <div className="home-signup">
            <img src={Images} alt='profile' />
            <form className="home-signup-form">
              <div>Username</div>
              <input type="text" placeholder="Username" name="username" onChange={(e) => handleChange(e)} />
              <div>Email</div>
              <input type="email" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
              <div>Password</div>
              <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />

              <button
                className="home-form-submit"
                type="submit"
                onClick={submitSignUp}
              >
                Sign Up
              </button>
            </form>
          </div>
        </>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    value: state.homePage.value,
    auth: state.users.isAuthentificated,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getValue: (value) => dispatch(getValue(value)),
    getSearchValue: (value) => dispatch(getSearchValue(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
