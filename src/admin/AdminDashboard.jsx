import React from "react";
import { withAuthAdmin } from "../auth/RouteAccess";
import Button from "../components/utils/Button";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ user }) => {
  let navigate = useNavigate();
  const goToAddService = () => {
    let path = `/add-service`;
    navigate(path);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h1>Admin Dashboard</h1>
            <p>
              Welcome to the admin dashboard , <b>{user?.name}</b> !
            </p>
          </div>
        </div>
        {/* <?php
                    if (isset($_SESSION['alert'])) {
                    ?>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <?php echo $_SESSION['alert'] ?>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    <?php
                    }
                    unset($_SESSION['alert']);

                    ?> */}
        <div className="mt-5 mb-2 d-flex justify-content-between">
          <h1>Daftar Layanan Aktif</h1>
          <Button text="Tambah Layanan" isSmall onClick={goToAddService} />
        </div>
        <form action="index.php" method="get">
          <div class="row justify-content-end">
            <h5>Cari : </h5>
            <div class="col form">
              <select
                name="search-type"
                class="form-select"
                aria-label="KategoriP"
              >
                <option value="all" selected>
                  Semua Kolom
                </option>
                <option value="nama_produk">Nama Produk</option>
              </select>
            </div>
            <div class="col-4">
              <div class="input-group d-flex align-items-center">
                <input
                  class="form-control border-end-0 border rounded-pill"
                  placeholder="Cari Produk..."
                  type="text"
                  name="cari"
                  id="example-search-input"
                />
                <span class="input-group-append ms-2">
                  <button
                    class="btn btn-outline-secondary bg-white text-dark border-start-0 border rounded-pill ms-n3"
                    type="submit"
                    value="cari"
                  >
                    Cari
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>

        <table class="table mt-3">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Produk</th>
              <th scope="col">Kuota Pendaftar</th>
              <th scope="col">Harga Produk</th>
              <th scope="col">Kategori</th>
              <th scope="col" class="text-center">
                Aksi
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default withAuthAdmin(AdminDashboard);
