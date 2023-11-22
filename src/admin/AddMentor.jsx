import React, { useEffect } from "react";
import { withAuthAdmin } from "../auth/RouteAccess";
import { addMentor } from "../components/utils/Constants";

const AddMentorPage = ({ handleLogout }) => {
  const [namaProduk, setNamaLengkap] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");
  const [profilePict, setProfilePict] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  // const [imgTitle, setImgTitle] = React.useState("");
  const [previewImg, setPreviewImg] = React.useState("");
  const [fileSizeError, setFileSizeError] = React.useState(false);

  function handlePreview(e) {
    const file = e.target.files[0];

    // Check if the file size is greater than 1MB
    if (file.size > 1024 * 1024) {
      setFileSizeError(true);
      setPreviewImg(""); // Clear the preview image
      setProfilePict(""); // Clear the thumbnail image
      return;
    }

    setFileSizeError(false);
    setPreviewImg(URL.createObjectURL(file));
    setProfilePict(file);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //check if all fields are filled
    setProfilePict("test.jpg");
    if (
      namaProduk === "" ||
      position === "" ||
      linkedin === "" ||
      profilePict === ""
    ) {
      setErrorMessage("Silahkan isi semua field");
      setShowAlert(true);
      return;
    }

    try {
      addMentor(namaProduk, position, linkedin, profilePict);

      setSuccessMessage("Mentor berhasil dibuat!");
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
        <h1>Tambah Mentor</h1>
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
                        id="namaLengkap"
                        name="namaLengkap"
                        placeholder="Nama Lengkap"
                        onChange={(e) => setNamaLengkap(e.target.value)}
                      />
                      <label for="namaLengkap">Nama Lengkap</label>
                    </div>

                    <div class="row">
                      <div class="col">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="linkedin"
                            name="linkedin"
                            placeholder="Link Linkedin"
                            onChange={(e) => setLinkedin(e.target.value)}
                          />
                          <label for="linkedin">Link Linkedin</label>
                          <div id="emailHelp" class="form-text">
                            contoh pengisian :
                            https://www.linkedin.com/in/username
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="position"
                            name="position"
                            placeholder="Posisi Pekerjaan Terkini"
                            onChange={(e) => setPosition(e.target.value)}
                          />
                          <label for="position">Posisi Pekerjaan Terkini</label>
                        </div>
                      </div>
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

export default withAuthAdmin(AddMentorPage);
