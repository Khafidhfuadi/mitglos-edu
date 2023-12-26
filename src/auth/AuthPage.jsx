import React, { useEffect, useState } from "react";
import authBanner from "../assets/img/auth-banner.jpg";
import logo from "../assets/img/logo.png";
import Button from "../components/utils/Button";
import { Link, useNavigate } from "react-router-dom";
import { loginCheck, register } from "../components/utils/Constants";
import { ToastContainer, toast } from "react-toastify";

function AuthPage({ handleLogin }) {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [passwordConfirmRegister, setPasswordConfirmRegister] = useState("");
  const [firstNameRegister, setFirstNameRegister] = useState("");
  const [lastNameRegister, setLastNameRegister] = useState("");
  const [loginForm, setLoginForm] = useState(true);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  //check if status is verified, show toast
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const status = queryParams.get("status");
    if (status === "verified") {
      setTimeout(() => {
        toast.success("Akun berhasil terverifikasi. Silahkan login.");
      }, 2000);
    }
  }, []);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoad(true);

    try {
      const data = await loginCheck(emailLogin, passwordLogin);
      handleLogin(data);
      setLoad(false);
      console.log("success");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setLoad(false);
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    setLoad(true);
    // check if password and confirm password match
    if (passwordRegister !== passwordConfirmRegister) {
      toast.warning("Password dan konfirmasi password tidak sesuai.");
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
      toast.success("Register berhasil!. Silahkan login untuk melanjutkan.");
      setLoad(false);
      setLoginForm(true);
    } catch (error) {
      console.error(error);
      setLoad(false);
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  const banner = {
    // backgroundImage: `url(${bg})`,
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent), url(${authBanner}) center/cover no-repeat`,
    borderRadius: "30px",
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setPasswordConfirmVisible((prevVisible) => !prevVisible);
  };
  return (
    <>
      <ToastContainer position="bottom-right" />

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
                  <div className="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">
                      Password
                    </label>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      class="form-control rounded-pill"
                      id="password"
                      onChange={(e) => setPasswordLogin(e.target.value)}
                    />
                    <i
                      className={`toggle-password me-3  ${
                        passwordVisible
                          ? "fa-solid fa-lock-open"
                          : "fa-solid fa-lock"
                      }`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                  {/* forget password? */}
                  <div className="text-end mb-3">
                    <Link to={"/reset-password"}>Lupa Password?</Link>
                  </div>
                  <div className="float-end">
                    <Button text="Login" onClick={handleSubmitLogin} />
                  </div>
                </form>
              </>
            ) : (
              //regist
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
                  <div class="col-12 col-md-6">
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
                  <div class="col-12 col-md-6 mt-3 mt-md-0">
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
                  <div class="col-12 col-md-6">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      class="form-control rounded-pill"
                      placeholder="Password"
                      aria-label="Password"
                      onChange={(e) => setPasswordRegister(e.target.value)}
                    />
                    <i
                      className={`toggle-password me-3  ${
                        passwordVisible
                          ? "fa-solid fa-lock-open"
                          : "fa-solid fa-lock"
                      }`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                  <div class="col-12 col-md-6 mt-3 mt-md-0">
                    <label for="passwordConfirm" class="form-label">
                      Konfirmasi Password
                    </label>
                    <input
                      type={passwordConfirmVisible ? "text" : "password"}
                      class="form-control rounded-pill"
                      placeholder="Konfirmasi passoword"
                      aria-label="Konfirmasi passoword"
                      id="passwordConfirm"
                      onChange={(e) =>
                        setPasswordConfirmRegister(e.target.value)
                      }
                    />
                    <i
                      className={`toggle-password me-3  ${
                        passwordConfirmVisible
                          ? "fa-solid fa-lock-open"
                          : "fa-solid fa-lock"
                      }`}
                      onClick={toggleConfirmPasswordVisibility}
                    ></i>
                  </div>
                </div>

                {/* <div class="mb-3 form-check">
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
                </div> */}
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
