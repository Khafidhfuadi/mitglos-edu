import React, { useEffect, useRef } from "react";
import Button from "./components/utils/Button";
import mentor1 from "./assets/img/mentor-1.png";
import linkedin from "./assets/img/linkedinBlue.svg";
import { useNavigate, useParams } from "react-router-dom";
import {
  checkTransaction,
  fetchDetailService,
  formatDate,
  formatDateWithDays,
  formatRupiah,
  postTransaction,
} from "./components/utils/Constants";
import Swal from "sweetalert2";

function DetailCourse() {
  //get parameter from url
  const { id } = useParams();
  const navigate = useNavigate();
  const [bgImage, setBgImage] = React.useState(""); // [1
  const user = JSON.parse(sessionStorage.getItem("user"));
  const idUser = user?.id;
  const headerStyle = {
    height: "500px",
    // backgroundImage: `url(${bg})`,
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent), url(${bgImage}) center/cover no-repeat`,
    borderRadius: "25px",
    marginTop: "150px",
    position: "relative", // Add this line to make positioning adjustments
  };

  const [services, setServices] = React.useState([]);
  const [isT, setIsT] = React.useState(false);
  const fetchData = async () => {
    try {
      const response = await fetchDetailService(id);
      setServices(response);
      const isTransaksiExist = await checkTransaction(idUser, services?.id);
      setIsT(isTransaksiExist);
      setBgImage(`http://localhost:5000/uploads/` + services?.thumbnail_img);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Detail Course | MITGLOS EDU";

    fetchData();
  });

  // format date from 2023-11-02T15:52 to Minggu 12 November 2023, 10.00

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollRef]);

  const registHandle = (e) => {
    e.preventDefault();

    if (sessionStorage.getItem("token") === null) {
      Swal.fire({
        title: "Login Dulu Yuk!",
        text: "Kamu harus login dulu untuk mendaftar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/auth");
        }
      });
    } else {
      Swal.fire({
        title: "Daftar Sekarang",
        text: "Apakah kamu yakin ingin mendaftar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (user.role.name === "admin") {
          Swal.fire(
            "Gagal!",
            "Kamu tidak bisa mendaftar karena Kamu Minglos!",
            "error"
          );
          return;
        }
        try {
          postTransaction(services?.id, idUser);
          Swal.fire("Berhasil!", "Kamu berhasil mendaftar!", "success");
        } catch (error) {
          console.log(error);
        }
      });
    }
  };
  return services ? (
    <div ref={scrollRef}>
      <div className="container mt-5">
        <section id="header" style={headerStyle}>
          <div className=" content-container">
            <div className="content">
              <h1 className="section-title text-white">{services?.judul}</h1>
              <div className="pill-container mt-3">
                <div className="pill">
                  <i class="fa-solid fa-calendar-days"></i>
                  {formatDate(services?.periode)}
                </div>
                <div className="pill">
                  <i class="fa-solid fa-repeat"></i>
                  {services?.pertemuan} Pertemuan
                </div>
                <div className="pill">
                  <i class="fa-solid fa-location-dot"></i>
                  {services?.tempat}
                </div>
                <div className="pill">
                  <i class="fa-solid fa-chalkboard-user"></i>
                  {services?.detail_product?.mentor?.nama_lengkap}
                </div>
              </div>
              <br />
              <div className="discount-container">
                <div className="price">
                  Rp.{services?.harga ? formatRupiah(services?.harga) : ""}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="detail">
          <div className="row">
            <div className="col-12 col-md-7">
              <div
                className="d-flex justify-content-center mobile-regist-btn-container"
                style={{ marginTop: "20px" }}
              >
                <Button
                  text="Daftar Sekarang"
                  onClick={registHandle}
                  disabled={isT ? true : false}
                />
              </div>
              <div className="detail-card">
                <div className="header">
                  <i class="fa-solid fa-circle-info"></i> Tentang Webinar
                </div>
                <div className="description">
                  {services?.detail_product?.tentang}
                </div>
              </div>
              <div className="detail-card">
                <div className="header">
                  <i class="fa-brands fa-leanpub"></i> Apa Yang Kamu Pelajari?
                </div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: services?.detail_product?.topik,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-12 col-md-5 sticky-container">
              <div
                className="d-flex justify-content-center regist-btn-container"
                style={{ marginTop: "20px" }}
              >
                <Button
                  text="Daftar Sekarang"
                  onClick={registHandle}
                  disabled={isT ? true : false}
                />
              </div>
              <div className="detail-card">
                <div className="header">
                  <i class="fa-solid fa-chalkboard-user"></i>
                  {"  "}
                  Mentor Kami
                </div>
                <div className="description">
                  <div className="row">
                    <div className="col-md-auto d-flex align-items-center">
                      <img
                        src={
                          `http://localhost:5000/uploads/` +
                          services?.detail_product?.mentor?.profile_pict
                        }
                        alt="profile picture"
                        className="rounded-circle profile-picture"
                      />
                    </div>
                    <div className="col-md-auto">
                      <p className="p-0 mb-1">
                        {services?.detail_product?.mentor?.nama_lengkap}
                      </p>
                      <p style={{ opacity: "0.8" }}>
                        {services?.detail_product?.mentor?.position}
                      </p>
                      <div className="d-flex align-items-center gap-2">
                        <img src={linkedin} alt="" />
                        <a
                          className="text-decoration-none"
                          style={{ cursor: "pointer" }}
                          href={services?.detail_product?.mentor?.linkedin}
                          target="blank_"
                        >
                          Connect via Linkedin
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-card">
                <div className="header">
                  <i class="fa-regular fa-calendar-check"></i> Detail Jadwal
                </div>
                <div className="description">
                  {formatDateWithDays(services?.periode)} - Selesai
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <>loading...</>
  );
}

export default DetailCourse;
