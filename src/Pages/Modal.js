import { useState } from "react";
import Modal from "react-modal";
import Images from "../Assets/Images/brand-logo.png";
import "../Assets/Styles/loginModal.css";
import "../Assets/Styles/Form.css";

const MODAL_SIGNUP = 1;
const MODAL_LOGIN = 2;

function SignIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="login"
        onClick={() => {
          setIsModalOpen(true);
          setWhichModal(MODAL_LOGIN);
        }}
      >
        Login
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(true)}
        className="modal__container"
        overlayClassName="modal__overlay--center"
        contentLabel="Learn Modal"
      >
        {rederWhichModal()}
      </Modal>
    </div>
  );

  function rederWhichModal() {
    if (whichModal === MODAL_LOGIN) {
      return (
        <>
          <div className='sign_box'>
            <button
              className="home__login__btn"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="home__login">
            <img src={Images} alt='login modal'/>
            <form className="home__form" onSubmit={handleLogin}>
              <div>Username</div>
              <input type="text" placeholder="" />
              <div>Password</div>
              <input type="password" placeholder="" />

              <button className="home__form__submit" type="submit">
                Login
              </button>
            </form>
            <h2 className="home__login__redirect">
              Don't have an account? {' '}
              <span
                className="redirect__signup"
                onClick={() => {
                  setIsModalOpen(true);
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
          <div className='sign_box'>
            <button
              className="home__login__btn"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="home__signup">
            <img src={Images} alt='signup modal'/>
            <form className="home__signup__form" onSubmit={handleLogin}>
              <div>Username</div>
              <input type="text" placeholder="" />

              <div>Email</div>
              <input type="email" placeholder="" />

              <div>Password</div>
              <input type="password" placeholder="" />

              <button className="home__form__submit" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </>
      );
    }
  }
}

export default SignIn;
