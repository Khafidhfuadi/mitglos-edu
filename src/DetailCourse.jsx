import React, { useEffect } from "react";
import bg from "./assets/img/course-thumbnail.png";
import Button from "./components/utils/Button";
import mentor1 from "./assets/img/mentor-1.png";
import linkedin from "./assets/img/linkedinBlue.svg";

function DetailCourse() {
  const headerStyle = {
    height: "500px",
    // backgroundImage: `url(${bg})`,
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent), url(${bg}) center/cover no-repeat`,
    borderRadius: "25px",
    marginTop: "150px",
    position: "relative", // Add this line to make positioning adjustments
    padding: "20px", // Add padding for inner shadow
  };

  useEffect(() => {
    document.title = "Detail Course | MITGLOS EDU";
  });

  return (
    <div className="container mt-5">
      <section id="header" style={headerStyle}>
        <div className=" content-container">
          <div className="content">
            <h1 className="section-title text-white">Digital Marketing</h1>
            <div className="pill-container mt-3">
              <div className="pill">Webinar</div>
              <div className="pill">Webinar</div>
              <div className="pill">Online Meeting Zoom</div>
              <div className="pill">Bapak Pemateri</div>
            </div>
            <br />
            <div className="discount-container">
              <span>Rp.100.000</span>
              <div className="discount">100%</div>
              <div className="price">Gratis!</div>
            </div>
          </div>
        </div>
      </section>
      <section id="detail">
        <div className="row">
          <div className="col-7">
            <div className="detail-card">
              <div className="header">Tentang Webinar</div>
              <div className="description">
                Saat ini content menjadi suatu hal yang sangat dibutuhkan
                dikarenakan semua sudah serba digital. Content digunakan tidak
                hanya untuk kepentingan instansi atau kelompok, tetapi juga
                kepentingan individu. Webinar ini diharapkan dapat membantu para
                content creator dan social media specialist untuk memaksimalkan
                konten. Webinar ini akan membahas strategi content marketing
                yang efektif untuk meningkatkan visibilitas dan keterlibatan
                audiens. Webinar ini akan menguraikan tiga poin utama: pemilihan
                jenis content yang sesuai dengan target pasar, berbagai tipe
                konten yang dapat digunakan, dan pentingnya copywriting dalam
                menghasilkan konten yang menarik dan persuasif.
              </div>
            </div>
            <div className="detail-card">
              <div className="header">Apa Yang Kamu Pelajari?</div>
              <div className="description">
                Jenis konten sesuai target pasar <br /> Tipe-tipe konten <br />
                Copywriting
              </div>
            </div>
          </div>
          <div className="col-5 sticky-container">
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "20px" }}
            >
              <Button text="Daftar Sekarang" />
            </div>
            <div className="detail-card">
              <div className="header">Mentor Kami</div>
              <div className="description">
                <div className="row">
                  <div className="col-md-auto d-flex align-items-center">
                    <img
                      src={mentor1}
                      alt=""
                      className="rounded-circle profile-picture"
                    />
                  </div>
                  <div className="col">
                    <p className="p-0 mb-1">
                      Kak Fitri Fatimah Zahra S,Pd, MmPd
                    </p>
                    <p style={{ opacity: "0.8" }}>
                      International Upwork Freelancer
                    </p>
                    <div className="row">
                      <div className="col-md-auto d-flex align-items-center">
                        <img src={linkedin} alt="" />
                      </div>
                      <div className="col p-0">
                        <a
                          className="text-decoration-none"
                          style={{ cursor: "pointer" }}
                          href="https://linkedin.com"
                          target="blank_"
                        >
                          Connect via Linkedin
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-card">
              <div className="header">Detail Jadwal</div>
              <div className="description">
                Minggu 12 November 2023, 10.00 - Selesai
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailCourse;
