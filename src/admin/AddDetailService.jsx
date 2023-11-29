import React, { useEffect, useState } from "react";
import { withAuthAdmin } from "../auth/RouteAccess";
import {
  addDetailService,
  fetchDetailService,
  fetchMentors,
} from "../components/utils/Constants";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const AddDetailServicePage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [service, setService] = useState(null);
  const [mentors, setMentors] = useState("");
  const [tentang, setTentang] = useState("");
  const [idMentor, setIdMentor] = useState("");
  const [topik, setTopik] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetchDetailService(id);
      const responseMentor = await fetchMentors();
      setService(response);
      setMentors(responseMentor);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    document.title = `Add Detail Service | MITGLOS EDU`;

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (tentang === "" || topik === "" || idMentor === "") {
      toast.warning("Semua field harus diisi");
      return;
    }

    try {
      console.log(id, idMentor, tentang, topik);
      addDetailService(id, idMentor, tentang, topik);
      navigate("/service/" + id);
      setTimeout(() => {
        toast.success("Detail Layanan berhasil ditambahkan");
      }, 1);
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
      <ToastContainer position="bottom-right" />

      <div className="container mt-5 mb-5">
        <h1>Isi Detail Layanan</h1>
        <h2>{service?.judul}</h2>
        <div className="card mt-3">
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
                        type="textarea"
                        className="form-control"
                        id="tentang"
                        name="tentang"
                        placeholder="Tentang"
                        onChange={(e) => setTentang(e.target.value)}
                      />
                      <label htmlFor="tentang">
                        Tentang Layanan (lebih detail)
                      </label>
                    </div>

                    <div className="form-floating ">
                      <select
                        name="cat_id"
                        className="form-select"
                        aria-label="KategoriP"
                        onChange={(e) => setIdMentor(e.target.value)}
                      >
                        <option value="" selected>
                          Pilih Mentor
                        </option>
                        {mentors &&
                          mentors?.map((mentor) => (
                            <option value={mentor.id} key={mentor.id}>
                              {mentor.nama_lengkap} ({mentor.position})
                            </option>
                          ))}
                      </select>
                      <label htmlFor="mentor">Mentor</label>
                      <div id="emailHelp" className="form-text">
                        Tidak menemukan mentor yang kamu cari?{" "}
                        <Link to="/add-mentor">Tambah Mentor</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <label htmlFor="topik" className="mb-2">
                      Topik Pembahasan :{" "}
                    </label>

                    <CKEditor
                      editor={ClassicEditor}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setTopik(data);
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-primary btn-block mt-3 outfit"
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

export default withAuthAdmin(AddDetailServicePage);
