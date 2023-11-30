import React from "react";
import Button from "./utils/Button";
import { useNavigate } from "react-router-dom";

const SuccessEmailConfirm = () => {
  let navigate = useNavigate();
  const loginPage = () => {
    let path = `/auth`;
    navigate(path);
  };
  return (
    <section>
      <h1>Berhasil Terkonfirmasi!</h1>
      <p>
        Silahkan login dengan akun yang telah terkonfirmasi untuk melanjutkan.
      </p>
      <Button onClick={loginPage} text="Login" />
    </section>
  );
};

export default SuccessEmailConfirm;
