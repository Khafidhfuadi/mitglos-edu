import React, { useEffect } from "react";
import { withAuthAdmin } from "../auth/RouteAccess";
import { addService } from "../components/utils/Constants";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddServicePage = () => {
  const [namaProduk, setNamaProduk] = React.useState("");
  const [cat_id, setCat_id] = React.useState("");
  const [kuota, setKuota] = React.useState("");
  const [periode, setPeriode] = React.useState("");
  const [pertemuan, setPertemuan] = React.useState("");
  const [tempat, setTempat] = React.useState("");
  const [harga, setHarga] = React.useState("");
  const [ringkasan, setRingkasan] = React.useState("");
  const [thumbnail_img, setThumbnail_img] = React.useState("");

  const [previewImg, setPreviewImg] = React.useState();
  const [fileSizeError, setFileSizeError] = React.useState(false);

  // Add a state to track if the category is "Webinar"
  const [isWebinar, setIsWebinar] = React.useState(false);
  const navigate = useNavigate();

  const handleCategoryChange = (value) => {
    setCat_id(value);

    // Check if the selected category is "Webinar"
    if (value === "2") {
      setIsWebinar(true);
      // Set default values for Webinar
      setPertemuan("1");
      setTempat("Zoom Cloud Meetings");
    } else {
      setIsWebinar(false);
      // Reset values for other categories if needed
      setPertemuan("");
      setTempat("");
    }
  };

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

    // Check if all required fields are filled
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
      toast.warning("Semua field harus diisi");
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

      navigate("/dashboard");
      toast.success("Layanan berhasil ditambahkan");
    } catch (error) {
      console.log(error);
      if (error.response?.status === 500) {
        toast.error("Terjadi kesalahan pada server.");
      } else {
        toast.error(error.response?.data?.error || "Terjadi kesalahan.");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container mt-5 mb-5">
        <h1>Add Service</h1>
        <div className="card">
          <div className="card-body">
            <form
              className="form-container"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="container px-4">
                <div className="row gx-5">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="namaProduk"
                        name="namaProduk"
                        placeholder="Nama Produk"
                        onChange={(e) => setNamaProduk(e.target.value)}
                      />
                      <label htmlFor="namaProduk">Judul Produk</label>
                      <div id="emailHelp" className="form-text">
                        cth penamaan : Digital Marketing
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <div className="form-floating ">
                          <select
                            name="cat_id"
                            className="form-select"
                            aria-label="KategoriP"
                            onChange={(e) =>
                              handleCategoryChange(e.target.value)
                            }
                          >
                            <option defaultValue="-">-</option>
                            <option value="2">Webinar</option>
                            <option value="1">Course</option>
                          </select>
                          <label htmlFor="kategoriP">Kategori Produk</label>
                          {isWebinar && (
                            <div className="form-text">
                              Jika kategori webinar, maka jumlah pertemuan dan
                              tempat pelaksanaan akan diisi secara otomatis.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-floating ">
                          <input
                            type="number"
                            className="form-control"
                            id="kuota"
                            name="kuota"
                            placeholder="kuota"
                            onChange={(e) => setKuota(e.target.value)}
                          />
                          <label htmlFor="kuota">Kuota Pendaftar</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <div className="form-floating mb-3">
                          <input
                            type="datetime-local"
                            className="form-control"
                            id="periode"
                            name="periode"
                            placeholder="periode Pelaksanaan"
                            onChange={(e) => setPeriode(e.target.value)}
                          />
                          <label htmlFor="periode">Periode</label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-floating mb-3">
                          <input
                            type="number"
                            className="form-control"
                            id="pertemuan"
                            name="pertemuan"
                            placeholder="pertemuan"
                            onChange={(e) => setPertemuan(e.target.value)}
                            disabled={isWebinar} // Disable the field for Webinar
                          />
                          <label htmlFor="pertemuan">Jumlah Pertemuan</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-floating mt-3 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="tempat"
                            name="tempat"
                            placeholder="tempat Pelaksanaan"
                            onChange={(e) => setTempat(e.target.value)}
                            disabled={isWebinar} // Disable the field for Webinar
                          />
                          <label htmlFor="tempat">Tempat Pelaksanaan </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-floating mt-3 mb-3">
                          <input
                            type="number"
                            className="form-control"
                            id="harga"
                            name="harga"
                            placeholder="harga Pelaksanaan"
                            onChange={(e) => setHarga(e.target.value)}
                          />
                          <label htmlFor="harga">Harga</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="ringkasan"
                        name="ringkasan"
                        placeholder="Ringkasan"
                        onChange={(e) => setRingkasan(e.target.value)}
                      />
                      <label htmlFor="ringkasan">Ringkasan</label>
                    </div>

                    <div className="mt-3 mb-3">
                      <label htmlFor="gambarProduk">
                        Gambar Thumbnail Produk
                      </label>
                      <div className="text-secondary fw-light">
                        <p>Ketentuan : </p>
                        <ul>
                          <li>Format file : PNG, JPG, JPEG</li>
                          <li>Ukuran file maksimal : 1MB</li>
                        </ul>
                      </div>
                      <input
                        type="file"
                        className="form-control"
                        id="gambarProduk"
                        name="gambarProduk"
                        accept=".png, .jpg, .jpeg"
                        onChange={handlePreview}
                      />
                      {fileSizeError && (
                        <div className="text-danger fw-light">
                          Ukuran file terlalu besar. Maksimal 1MB.
                        </div>
                      )}
                      <label className="mt-3 mt-3" htmlFor="preview">
                        Preview :
                      </label>
                      <br />
                      <img src={previewImg} width={300} />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-primary btn-block mt-3"
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
