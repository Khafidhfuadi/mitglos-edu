import React, { useEffect } from "react";
import { withAuthAdmin } from "../auth/RouteAccess";
import Button from "../components/utils/Button";
import { useNavigate } from "react-router-dom";
import { fetchMentors, fetchServices } from "../components/utils/Constants";
import { ToastContainer } from "react-toastify";

const AdminDashboard = ({ user, handleLogout }) => {
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

  const fetchData = async () => {
    try {
      const response = await fetchServices();
      setServices(response?.products);
      const responseMentor = await fetchMentors();
      setMentors(responseMentor);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Dashboard";
    fetchData();
  });

  // format rupiah
  const formatRupiah = (angka) => {
    let number_string = angka.toString().replace(/[^,\d]/g, ""),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return rupiah;
  };

  return (
    <>
      <ToastContainer />
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h1>Admin Dashboard</h1>
            <p>
              Welcome to the admin dashboard , <b>{user?.name}</b> !
            </p>
          </div>
        </div>

        <div className="mt-5 mb-2 d-flex justify-content-between">
          <h1>Daftar Layanan Aktif</h1>
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
            {services &&
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
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Detail
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </thead>
        </table>

        <div className="mt-5 mb-2 d-flex justify-content-between">
          <h1>Daftar Mentor</h1>
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
            {mentors &&
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
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Detail
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </thead>
        </table>
      </div>
    </>
  );
};

export default withAuthAdmin(AdminDashboard);
