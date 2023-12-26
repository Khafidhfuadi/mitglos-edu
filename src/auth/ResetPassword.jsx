import React, { useState } from "react";
import { forgotPassword } from "../components/utils/Constants";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await forgotPassword(email);
      toast.success("Permintaan berhasil dikirim. Silahkan cek email Anda.");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="container">
        <h1 className="reset-password-title">Lupa Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="formEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="formEmail"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-3 outfit" type="submit">
            Kirim Permintaan
          </button>
        </form>
      </section>
    </>
  );
};

export default ResetPassword;
