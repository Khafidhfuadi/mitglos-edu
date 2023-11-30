import React, { useEffect } from "react";
import { withAuthAdmin } from "../auth/RouteAccess";
import Button from "../components/utils/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchMentors,
  fetchServices,
  fetchTransactions,
  formatRupiah,
} from "../components/utils/Constants";
import { ToastContainer } from "react-toastify";

const AdminDashboard = ({ user, handleLogout, randomGreetings }) => {
  let navigate = useNavigate();
  const goToAddService = () => {
    let path = `/add-service`;
    navigate(path);
  };
  // go to add mentor
  const goToAddMentor = () => {
    let path = `/add-mentor`;
    navigate(path);
  };

  const [services, setServices] = React.useState([]);
  const [mentors, setMentors] = React.useState([]);
  const [greeting, setGreeting] = React.useState("");
  const [transaction, setTransaction] = React.useState([]);
  const greet = sessionStorage.getItem("greeting");

  //fetch greeting from session storage

  const fetchData = async () => {
    try {
      const response = await fetchServices();
      setServices(response?.products);
      const responseMentor = await fetchMentors();
      setMentors(responseMentor);
      const responseTransaction = await fetchTransactions();
      setTransaction(responseTransaction);
      // setGreeting(greet);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Dashboard";
    fetchData();
  });

  return (
    <>
      <ToastContainer position="bottom-right" />

      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h1>Dashboard Admin</h1>
            {/* <p>
              Gimana harimu, MinGlos <b>{user?.name}</b>?
            </p> */}
            <p dangerouslySetInnerHTML={{ __html: greet }}></p>
          </div>
        </div>

        <div className="mt-5 mb-2 d-flex justify-content-between">
          <h1>
            Daftar Transaksi <i class="fa-solid fa-shopping-cart"></i>
          </h1>
          <Button text="Tambah Layanan" onClick={goToAddService} />
        </div>

        <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Pendaftar</th>
              <th scope="col">Nama Layanan</th>
              <th scope="col">Kategori</th>
              <th scope="col">Aksi</th>
            </tr>
            {transaction ? (
              transaction.length > 0 ? (
                transaction.map((transaction, index) => (
                  <tr key={transaction.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{transaction.user?.nama_depan}</td>
                    <td>{transaction.product.judul}</td>
                    <td>
                      <span
                        className={`badge ${
                          transaction.product.kategori?.name === "Webinar"
                            ? "bg-primary"
                            : "bg-success"
                        }`}
                      >
                        {transaction.product.kategori?.name}
                      </span>
                    </td>
                    <td className="text-center">
                      <Link
                        type="button"
                        className="btn btn-outline-primary btn-sm  outfit"
                        to={""}
                      >
                        <i class="fa-solid fa-circle-info"></i> Detail
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    Transaksi belum tersedia.
                  </td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Loading...
                </td>
              </tr>
            )}
          </thead>
        </table>

        <div className="mt-5 mb-2 d-flex justify-content-between">
          <h1>
            Daftar Layanan Aktif <i class="fa-solid fa-layer-group"></i>
          </h1>
          <Button text="Tambah Layanan" onClick={goToAddService} />
        </div>
        {/* <form action="index.php" method="get">
          <div className="row justify-content-end">
            <h5>Cari : </h5>
            <div className="col form">
              <select
                name="search-type"
                className="form-select"
                aria-label="KategoriP"
              >
                <option value="all" selected>
                  Semua Kolom
                </option>
                <option value="nama_produk">Nama Produk</option>
              </select>
            </div>
            <div className="col-4">
              <div className="input-group d-flex align-items-center">
                <input
                  className="form-control border-end-0 border rounded-pill"
                  placeholder="Cari Produk..."
                  type="text"
                  name="cari"
                  id="example-search-input"
                />
                <span className="input-group-append ms-2">
                  <button
                    className="btn btn-outline-secondary bg-white text-dark border-start-0 border rounded-pill ms-n3"
                    type="submit"
                    value="cari"
                  >
                    Cari
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form> */}

        <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Layanan</th>
              <th scope="col">Kuota Pendaftar</th>
              <th scope="col">Harga</th>
              <th scope="col">Kategori</th>
              <th scope="col" className="text-center">
                Aksi
              </th>
            </tr>
            {services ? (
              services.map((service, index) => (
                <tr key={service.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{service.judul}</td>
                  <td>{service.kuota}</td>
                  <td>Rp.{formatRupiah(service.harga)}</td>
                  <td>
                    <span
                      className={`badge ${
                        service.kategori?.name === "Webinar"
                          ? "bg-primary"
                          : "bg-success"
                      }`}
                    >
                      {service.kategori?.name}
                    </span>
                  </td>
                  <td className="text-center">
                    <Link
                      type="button"
                      className="btn btn-outline-primary btn-sm  outfit"
                      to={`/service/${service.id}`}
                    >
                      <i class="fa-solid fa-circle-info"></i> Detail
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Loading...
                </td>
              </tr>
            )}
          </thead>
        </table>

        <div className="mt-5 mb-2 d-flex justify-content-between">
          <h1>
            Daftar Mentor <i class="fa-solid fa-chalkboard-user"></i>
          </h1>
          <Button text="Tambah Mentor" onClick={goToAddMentor} />
        </div>

        <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Lengkap</th>
              <th scope="col">Posisi</th>
              <th scope="col">LinkedIn</th>
              <th scope="col" className="text-center">
                Aksi
              </th>
            </tr>

            {mentors ? (
              mentors.length > 0 ? (
                mentors.map((mentor, index) => (
                  <tr key={mentor.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{mentor.nama_lengkap}</td>
                    <td>{mentor.position}</td>
                    <td>
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {mentor.linkedin}
                      </a>
                    </td>
                    <td className="text-center">
                      <Link
                        type="button"
                        className="btn btn-outline-primary btn-sm me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="fa-solid fa-circle-info"></i> Detail
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-success btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i class="fa-solid fa-circle-edit"></i> Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    Mentor belum tersedia. Silahkan tambahkan mentor terlebih
                    dahulu.
                  </td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            )}
          </thead>
        </table>
      </div>
    </>
  );
};

export default withAuthAdmin(AdminDashboard);
