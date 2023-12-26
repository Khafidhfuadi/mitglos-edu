import React, { useState } from "react";
import { resetPassword } from "../components/utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const NewPasswordReset = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password tidak sama");
      return;
    }

    try {
      const response = await resetPassword(token, password);
      navigate("/auth");
      setTimeout(() => {
        toast.success("Sukses Mengubah Password. Silahkan Login Kembali");
      }, 1);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
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
      <ToastContainer />
      <section className="container">
        <h1 className="reset-password-title">Lupa Password</h1>
        <form onSubmit={handleSubmit}>
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`toggle-password me-3  ${
                  passwordVisible ? "fa-solid fa-lock-open" : "fa-solid fa-lock"
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
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          <button className="btn btn-primary mt-3 outfit" type="submit">
            Kirim Permintaan
          </button>
        </form>
      </section>
    </>
  );
};

export default NewPasswordReset;
