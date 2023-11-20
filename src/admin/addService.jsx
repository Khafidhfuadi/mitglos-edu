import React from "react";
import { withAuthAdmin } from "../auth/RouteAccess";

const AddService = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1>Add Service</h1>
      <div class="card">
        <div class="card-body">
          <form
            class="form-container"
            method="POST"
            enctype="multipart/form-data"
          >
            <div class="container px-4">
              {/* <?php if ($error != '') { ?>
                                        <div class="alert alert-danger" role="alert"><?= $error; ?></div>
                                    <?php } ?> */}

              <div class="row gx-5">
                <div class="col">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="namaProduk"
                      name="namaProduk"
                      placeholder="Nama Produk"
                    />
                    <label for="namaProduk">Judul Produk</label>
                    <div id="emailHelp" class="form-text">
                      cth penamaan : Digital Marketing
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      {" "}
                      <div class="form-floating ">
                        <select
                          name="cat_id"
                          class="form-select"
                          aria-label="KategoriP"
                        >
                          <option selected>-</option>
                          <option value="webinar">Webinar</option>
                          <option value="course">Course</option>
                        </select>

                        <label for="kategoriP">Kategori Produk</label>
                      </div>
                    </div>
                    <div className="col">
                      {" "}
                      <div class="form-floating ">
                        <input
                          type="number"
                          class="form-control"
                          id="stok"
                          name="stok"
                          placeholder="Harga"
                        />
                        <label for="stok">Kuota Pendaftar</label>
                        {/* <?php if ($validate != '') { ?>
                                                    <p class="text-danger"><?= $validate; ?></p>
                                                <?php } ?> */}
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="datetime-local"
                          class="form-control"
                          id="tanggal"
                          name="tanggal"
                          placeholder="Tanggal Pelaksanaan"
                        />
                        <label for="tanggal">Periode</label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-floating mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="pertemuan"
                          name="pertemuan"
                          placeholder="pertemuan"
                        />
                        <label for="pertemuan">Jumlah Pertemuan</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="form-floating mt-3 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="tempat"
                          name="tempat"
                          placeholder="tempat Pelaksanaan"
                        />
                        <label for="tempat">Tempat Pelaksanaan </label>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-floating mt-3 mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="harga"
                          name="harga"
                          placeholder="harga Pelaksanaan"
                        />
                        <label for="harga">Harga</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="ringkasan"
                      name="ringkasan"
                      placeholder="Ringkasan"
                    />
                    <label for="ringkasan">Ringkasan</label>
                  </div>

                  <div class="mt-3 mb-3">
                    <label for="gambarProduk">Gambar Thumbnail Produk</label>
                    <div class="text-secondary fw-light">
                      <p>Ketentuan : </p>
                      <ul>
                        <li>Format file : PNG, JPG, JPEG</li>
                        <li>Ukuran file maksimal : 1MB</li>
                      </ul>
                    </div>
                    <input
                      type="file"
                      class="form-control"
                      id="gambarProduk"
                      name="gambarProduk"
                      accept=".png, .jpg, .jpeg"
                    />
                  </div>
                  <div id="previewContainer" class="mb-3 mt-3">
                    <p>Preview Gambar : </p>
                    <img id="previewImage" src="#" alt="Preview" />
                  </div>
                </div>

                <div class="d-flex justify-content-end">
                  <button
                    type="submit"
                    name="submit"
                    class="btn btn-primary btn-block mt-3"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withAuthAdmin(AddService);
