import React, { useEffect, useState } from "react";
import authBanner from "../assets/img/auth-banner.jpg";
import logo from "../assets/img/logo.png";
import Button from "../components/utils/Button";
import { useNavigate } from "react-router-dom";
import {
  checkUserExists,
  loginCheck,
  register,
} from "../components/utils/Constants";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function AuthPage({ handleLogin }) {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [passwordConfirmRegister, setPasswordConfirmRegister] = useState("");
  const [firstNameRegister, setFirstNameRegister] = useState("");
  const [lastNameRegister, setLastNameRegister] = useState("");
  const [loginForm, setLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
        setErrorMessage(""); // Clear the error message after hiding the alert
        setSuccessMessage("");
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showAlert]);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginCheck(emailLogin, passwordLogin);
      handleLogin(data);

      console.log("success");
      setSuccessMessage("Login berhasil!");
      setShowAlert(true);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setErrorMessage("");
      // custom error message by status code
      if (error.response?.status === 401 || error.response?.status === 400) {
        setErrorMessage("Email atau Password tidak sesuai.");
      } else if (error.response?.status === 404) {
        setErrorMessage("Akun tidak ditemukan.");
      } else if (error.response?.status === 500) {
        setErrorMessage("Kesalahan server.");
      } else {
        setErrorMessage("Terjadi kesalahan.");
      }
      // setErrorMessage(error.response?.data?.message || "An error occurred.");
      setShowAlert(true);
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    // check if password and confirm password match
    if (passwordRegister !== passwordConfirmRegister) {
      setErrorMessage("Password dan Konfirmasi Password tidak sesuai.");
      setShowAlert(true);
      return;
    }

    try {
      const data = await register(
        emailRegister,
        firstNameRegister,
        lastNameRegister,
        passwordRegister
      );
      // handleLogin(data);
      console.log("success");

      // go to home page
      setSuccessMessage("Registrasi berhasil. Silahkan login.");
      setShowAlert(true);
      setLoginForm(true);
    } catch (error) {
      console.error(error);
      setErrorMessage("");
      // custom error message by status code
      if (error.response?.status === 500) {
        setErrorMessage("Kesalahan server.");
      } else {
        setErrorMessage("Terjadi kesalahan.");
      }
      // setErrorMessage(error.response?.data?.message || "An error occurred.");
      setShowAlert(true);
    }
  };

  const banner = {
    // backgroundImage: `url(${bg})`,
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent), url(${authBanner}) center/cover no-repeat`,
    borderRadius: "30px",
  };
  return (
    <>
      {showAlert && (
        <div
          class={`alert alert-${
            errorMessage ? "danger" : "success"
          } alert-dismissible fade show`}
          role="alert"
        >
          {errorMessage || successMessage}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="container ">
        <div className="row vh-100 d-flex justify-content-center align-items-center">
          <div
            className="col col-12 col-md-6 position-relative auth-banner"
            style={banner}
          >
            <div
              className="position-absolute text-start w-100 text-white"
              style={{
                bottom: "32px",
              }}
            >
              <h1 style={{ fontFamily: "Outfit" }}>
                <strong>MITGLOS EDU</strong>
              </h1>
              <h5>International Based Course Uni-Eropa</h5>
            </div>
          </div>
          <div className="col col-12 col-md-6 d-flex align-items-center justify-content-center flex-column">
            <img src={logo} alt="" width={100} />
            <div className="button-group-container mt-3">
              <Button
                text="Login"
                isOutline={loginForm ? false : true}
                onClick={() => {
                  setLoginForm(true);
                }}
              />
              <Button
                text="Register"
                isOutline={loginForm ? true : false}
                onClick={() => {
                  setLoginForm(false);
                }}
              />
            </div>

            {loginForm ? (
              <>
                {/* <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    const decode = jwtDecode(credentialResponse.credential);
                    console.log(decode);
                    const userExists = await checkUserExists(decode?.email);
                    console.log(userExists);
                    if (userExists?.response?.status === 404) {
                      setErrorMessage("Akun tidak ditemukan.");
                    }
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                /> */}
                <form className="w-75 mt-5">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control rounded-pill"
                      id="email"
                      aria-describedby="emailHelp"
                      onChange={(e) => setEmailLogin(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control rounded-pill"
                      id="password"
                      onChange={(e) => setPasswordLogin(e.target.value)}
                    />
                  </div>
                  <div className="float-end">
                    <Button text="Login" onClick={handleSubmitLogin} />
                  </div>
                </form>
              </>
            ) : (
              <form className="w-75 mt-5">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control rounded-pill"
                    id="email"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmailRegister(e.target.value)}
                  />
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <label for="firstname" class="form-label">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      class="form-control rounded-pill"
                      placeholder="Nama Depan"
                      aria-label="Nama Depan"
                      id="firstname"
                      onChange={(e) => setFirstNameRegister(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label for="lastname" class="form-label">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      class="form-control rounded-pill"
                      placeholder="Nama Belakang"
                      aria-label="Nama Belakang"
                      id="lastname"
                      onChange={(e) => setLastNameRegister(e.target.value)}
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control rounded-pill"
                      placeholder="Password"
                      aria-label="Password"
                      onChange={(e) => setPasswordRegister(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label for="passwordConfirm" class="form-label">
                      Konfirmasi Password
                    </label>
                    <input
                      type="password"
                      class="form-control rounded-pill"
                      placeholder="Konfirmasi passoword"
                      aria-label="Konfirmasi passoword"
                      id="passwordConfirm"
                      onChange={(e) =>
                        setPasswordConfirmRegister(e.target.value)
                      }
                    />
                  </div>
                </div>

                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Menyetujui{" "}
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      S&K
                    </a>{" "}
                    yang berlaku
                  </label>
                </div>
                <div className="float-end">
                  <Button text="Register" onClick={handleSubmitRegister} />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
