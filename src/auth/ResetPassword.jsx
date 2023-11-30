import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to handle password reset
  };

  return (
    <section className="container justify-content-center ms-0 me-0">
      <h1 className="reset-password-title">Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="formEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="formEmail"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Reset Password
        </button>
      </form>
    </section>
  );
};

export default ResetPassword;
