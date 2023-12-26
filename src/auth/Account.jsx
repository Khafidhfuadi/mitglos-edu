import React, { useEffect, useState } from "react";
import { withAuthUser } from "./RouteAccess";
import {
  API_URL,
  fetchDetailUser,
  fetchTransactionByUserId,
  formatDateWithDays,
  updateEmail,
  updateEvent,
  updateUserName,
} from "../components/utils/Constants";
import Swal from "sweetalert2";
import Button from "../components/utils/Button";

const Account = ({ user, handleLogout, handleSetUser }) => {
  const [userData, setUserData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetchDetailUser(user?.id);
      setUserData(response);
    } catch (error) {
      console.error(error);
    }
  };

  // handleSubmitEditProfile
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const handleSubmitEditProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await updateUserName(user.id, firstName, lastName);

      Swal.fire("Berhasil!", "Berhasil mengubah profile!", "success");
      // replace session storage user with new data
      handleSetUser(response);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  // handleSubmitEditEmail

  const handleSubmitEditEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await updateEmail(user.id, email);

      Swal.fire(
        "Berhasil!",
        "Cek Mail Box Kamu untuk mengkonfirmasi Email!",
        "success"
      );
      // replace session storage user with new data
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Dashboard | MITGLOS EDU";

    fetchData();
  }, []);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setPasswordConfirmVisible((prevVisible) => !prevVisible);
  };
  return (
    <section className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1>Kelola Akun</h1>
              <p>Kamu dapat mengubah informasi akun kamu disini.</p>
            </div>
            <div className="col-12 col-md-6 outfit">
              <h5 className="fw-bold">Informasi Akun</h5>
              <div className="row">
                <div className="col-12 col-md-6">
                  <p className="fw-bold m-0">Nama Lengkap : </p>
                  <span>
                    {userData?.nama_depan + " " + userData?.nama_belakang}
                  </span>
                </div>
                <div className="col-12 col-md-6">
                  <p className="fw-bold m-0">Email : </p>
                  <span>{userData?.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-body">
          <h3 className="card-title outfit">Perbarui Biodata </h3>
          <h6 className="card-subtitle mb-2 text-muted">
            Anda dapat mengubah informasi akun anda disini.
          </h6>
          <form className=" mt-3">
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
                  defaultValue={userData?.nama_depan}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  defaultValue={userData?.nama_belakang}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="float-end">
              <Button text="Ubah Biodata" onClick={handleSubmitEditProfile} />
            </div>
          </form>
        </div>
      </div>

      <div className="card mt-5">
        <div className="card-body">
          <h3 className="card-title outfit">Perbarui Email </h3>
          <h6 className="card-subtitle mb-2 text-muted">
            Anda dapat mengubah email anda disini.
          </h6>
          <form className=" mt-3">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control rounded-pill"
                id="email"
                aria-describedby="emailHelp"
                defaultValue={userData?.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* notes */}
              <div id="emailHelp" class="form-text">
                Kamu harus mengkonfirmasi email ulang kamu kemudian.
              </div>
            </div>

            <div className="float-end">
              <Button text="Ubah Profil" onClick={handleSubmitEditEmail} />
            </div>
          </form>
        </div>
      </div>

      {/* edit password */}

      <div className="card mt-5">
        <div className="card-body">
          <h3 className="card-title outfit">Ubah Password</h3>
          <h6 className="card-subtitle mb-2 text-muted">
            Anda dapat mengubah password anda disini.
          </h6>
          <form className=" mt-3">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Password Lama
              </label>
              <input
                type="password"
                class="form-control rounded-pill"
                id="email"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* notes */}
              <div id="emailHelp" class="form-text">
                Kamu harus mengkonfirmasi email ulang kamu kemudian.
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12 col-md-6">
                <label for="password" class="form-label">
                  Password Baru
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  class="form-control rounded-pill"
                  placeholder="Password"
                  aria-label="Password"
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
                  Konfirmasi Password Baru
                </label>
                <input
                  type={passwordConfirmVisible ? "text" : "password"}
                  class="form-control rounded-pill"
                  placeholder="Konfirmasi passoword"
                  aria-label="Konfirmasi passoword"
                  id="passwordConfirm"
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

            <div className="float-end">
              <Button text="Ubah Profil" onClick={handleSubmitEditProfile} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withAuthUser(Account);
