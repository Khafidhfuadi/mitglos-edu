import React, { useEffect } from "react";
import { withAuthAdmin } from "../auth/RouteAccess";
import { addService } from "../components/utils/Constants";

const AddServicePage = () => {
  const [namaProduk, setNamaProduk] = React.useState("");
  const [cat_id, setCat_id] = React.useState("");
  const [kuota, setKuota] = React.useState("");
  const [periode, setPeriode] = React.useState("");
  const [pertemuan, setPertemuan] = React.useState("");
  const [tempat, setTempat] = React.useState("");
  const [harga, setHarga] = React.useState("");
  const [ringkasan, setRingkasan] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [thumbnail_img, setThumbnail_img] = React.useState("");

  const [previewImg, setPreviewImg] = React.useState();
  const [fileSizeError, setFileSizeError] = React.useState(false);

  function handlePreview(e) {
    const file = e.target.files[0];

    // Check if the file size is greater than 1MB
    if (file.size > 1024 * 1024) {
      setFileSizeError(true);
      setPreviewImg(""); // Clear the preview image
      setThumbnail_img(""); // Clear the thumbnail image
      return;
    }

    setFileSizeError(false);
    setPreviewImg(URL.createObjectURL(file));
    setThumbnail_img(file);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //check if all fields are filled
    if (
      namaProduk === "" ||
      cat_id === "" ||
      kuota === "" ||
      periode === "" ||
      pertemuan === "" ||
      tempat === "" ||
      harga === "" ||
      ringkasan === "" ||
      thumbnail_img === ""
    ) {
      setErrorMessage("Silahkan isi semua field");
      setShowAlert(true);
      return;
    }

    try {
      addService(
        namaProduk,
        periode,
        kuota,
        ringkasan,
        pertemuan,
        harga,
        tempat,
        cat_id,
        thumbnail_img
      );

      setSuccessMessage(
        "Layanan Berhasil Dibuat, Silahkan lengkapi detail layanan!"
      );
      setShowAlert(true);
    } catch (error) {
      console.log(error);
      setErrorMessage("");
      // custom error message by status code
      if (error.response?.status === 500) {
        setErrorMessage("Kesalahan server.");
      } else {
        setErrorMessage("Terjadi kesalahan.");
      }
      // setErrorMessage(error.response?.data?.message || "An error occurred.");
      setShowAlert(true);
    }
  };

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
        setErrorMessage(""); // Clear the error message after hiding the alert
        setSuccessMessage("");
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return (
    <>
      {showAlert && (
        <div
          class={`alert alert-${
            errorMessage ? "danger" : "success"
          } alert-dismissible fade show`}
          role="alert"
        >
          {errorMessage || successMessage}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
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
                <div class="row gx-5">
                  <div class="col">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="namaProduk"
                        name="namaProduk"
                        placeholder="Nama Produk"
                        onChange={(e) => setNamaProduk(e.target.value)}
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
                            onChange={(e) => setCat_id(e.target.value)}
                          >
                            <option defaultValue="-">-</option>
                            <option value="2">Webinar</option>
                            <option value="1">Course</option>
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
                            id="kuota"
                            name="kuota"
                            placeholder="kuota"
                            onChange={(e) => setKuota(e.target.value)}
                          />
                          <label for="kuota">Kuota Pendaftar</label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-floating mb-3">
                          <input
                            type="datetime-local"
                            class="form-control"
                            id="periode"
                            name="periode"
                            placeholder="periode Pelaksanaan"
                            onChange={(e) => setPeriode(e.target.value)}
                          />
                          <label for="periode">Periode</label>
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
                            onChange={(e) => setPertemuan(e.target.value)}
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
                            onChange={(e) => setTempat(e.target.value)}
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
                            onChange={(e) => setHarga(e.target.value)}
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
                        onChange={(e) => setRingkasan(e.target.value)}
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
                        onChange={handlePreview}
                      />
                      {fileSizeError && (
                        <div class="text-danger fw-light">
                          Ukuran file terlalu besar. Maksimal 1MB.
                        </div>
                      )}
                      <label className="mt-3 mt-3" for="preview">
                        Preview :
                      </label>
                      <br />
                      <img src={previewImg} width={300} />
                    </div>
                  </div>

                  <div class="d-flex justify-content-end">
                    <button
                      type="submit"
                      name="submit"
                      class="btn btn-primary btn-block mt-3"
                      onClick={handleSubmit}
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
    </>
  );
};

export default withAuthAdmin(AddServicePage);
