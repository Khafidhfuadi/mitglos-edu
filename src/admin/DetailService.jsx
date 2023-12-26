import React, { useState, useEffect } from "react";
import {
  fetchDetailService,
  formatDate,
  formatDateWithDays,
  formatRupiah,
} from "../components/utils/Constants";
import { withAuthAdmin } from "../auth/RouteAccess";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const AdminDetailService = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetchDetailService(id);
      setService(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    document.title = `Detail Service | MITGLOS EDU`;

    fetchData();
  }, []);

  const handleNonActiveService = () => {
    console.log("non active");
    Swal.fire({
      title: "Menonaktifkan Layanan",
      text: "Apakah anda yakin ingin menonaktifkan layanan ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "<i class='fa fa-check'></i> Ya, nonaktifkan!",
      cancelButtonText: "<i class='fa fa-times'></i> Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `http://localhost:5000/api/product/${id}`,
            {
              product_status: 0,
            },
            {
              headers: {
                "auth-token": `${sessionStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            navigate("/dashboard");
            setTimeout(() => {
              toast.success("Layanan berhasil dinonaaktifkan!");
            }, 1);
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("Gagal!", "Terjadi kesalahan pada server.", "error");
          });
      }
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <ToastContainer position="bottom-right" />
      <h1>
        <i class="fa-solid fa-circle-info"></i> Detail Layanan
      </h1>
      <img
        src={`http://localhost:5000/uploads/` + service?.thumbnail_img}
        alt=""
        width={200}
        className="img-fluid rounded"
      />
      {service ? (
        <div>
          <h2>{service.judul}</h2>
          <div className="d-flex gap-3">
            {service?.detail_product == null ? (
              <Link
                to={`/add-detail-service/${service.id}`}
                className="btn outfit btn-primary"
              >
                <i class="fa-regular fa-file"></i> Isi Detail Layanan
              </Link>
            ) : null}
            <div
              className="btn outfit btn-success"
              onClick={() => {
                //coming soon swal
                Swal.fire({
                  title: "Coming Soon!",
                  text: "Fitur ini akan segera hadir",
                  icon: "info",
                  confirmButtonText: "OK",
                });
              }}
            >
              <i class="fa-solid fa-pen-to-square"></i> Edit Detail Layanan
            </div>
            <button
              className="btn outfit btn-warning"
              onClick={handleNonActiveService}
            >
              <i class="fa-solid fa-power-off"></i> Nonaktifkan Layanan
            </button>
          </div>
          <ol className="list-group list-group-numbered mt-3">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold outfit">Kategori</div>
                {service.kategori.name}
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold outfit">Periode</div>
                {formatDateWithDays(service.periode)}
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold outfit">Kuota Pendaftar</div>
                {service.kuota}
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold outfit">Harga</div>
                Rp.{formatRupiah(service.harga)}
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold outfit">Ringkasan</div>
                {service.ringkasan}
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold outfit">Mentor</div>
                {service?.detail_product != null ? (
                  <>
                    {service.detail_product.mentor.nama_lengkap} |{" "}
                    {service.detail_product.mentor.position} |{" "}
                    <a
                      href={service.detail_product.mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {service.detail_product.mentor.linkedin}
                    </a>
                  </>
                ) : (
                  <div class="badge bg-warning text-wrap">Perlu diisi</div>
                )}
              </div>
            </li>
          </ol>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item mt-2">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed fw-bold outfit"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Tentang {service.kategori.name}
                  {service.detail_product == null ? (
                    <div class="badge bg-warning text-wrap ms-2">
                      Perlu diisi
                    </div>
                  ) : null}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {service.detail_product != null
                    ? service.detail_product.tentang
                    : "-"}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed fw-bold outfit"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Topik (Outline Pembahasan)
                  {service.detail_product == null ? (
                    <div class="badge bg-warning text-wrap ms-2">
                      Perlu diisi
                    </div>
                  ) : null}
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  {service.detail_product != null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: service.detail_product.topik,
                      }}
                    ></div>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading service details...</p>
      )}
    </div>
  );
};

export default withAuthAdmin(AdminDetailService);
