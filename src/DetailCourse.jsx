import React, { useEffect } from "react";
import Button from "./components/utils/Button";
import mentor1 from "./assets/img/mentor-1.png";
import linkedin from "./assets/img/linkedinBlue.svg";
import { useParams } from "react-router-dom";
import { fetchDetailService } from "./components/utils/Constants";

function DetailCourse() {
  //get parameter from url
  const { id } = useParams();
  const [bgImage, setBgImage] = React.useState(""); // [1
  const headerStyle = {
    height: "500px",
    // backgroundImage: `url(${bg})`,
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent), url(${bgImage}) center/cover no-repeat`,
    borderRadius: "25px",
    marginTop: "150px",
    position: "relative", // Add this line to make positioning adjustments
    padding: "20px", // Add padding for inner shadow
  };

  const [services, setServices] = React.useState([]);
  const fetchData = async () => {
    try {
      const response = await fetchDetailService(id);
      setServices(response);

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
  const formatDate = (date) => {
    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
      // Handle the case where the date is not valid
      return "Invalid Date";
    }

    const ye = new Intl.DateTimeFormat("id-ID", { year: "numeric" }).format(
      parsedDate
    );
    const mo = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
      parsedDate
    );
    const da = new Intl.DateTimeFormat("id-ID", { day: "numeric" }).format(
      parsedDate
    );
    const hr = new Intl.DateTimeFormat("id-ID", { hour: "numeric" }).format(
      parsedDate
    );
    const min = new Intl.DateTimeFormat("id-ID", { minute: "numeric" }).format(
      parsedDate
    );
    const day = new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(
      parsedDate
    );

    return `${day} ${da} ${mo} ${ye}, ${hr}.${min}`;
  };

  return services ? (
    <div className="container mt-5">
      <section id="header" style={headerStyle}>
        <div className=" content-container">
          <div className="content">
            <h1 className="section-title text-white">{services?.judul}</h1>
            <div className="pill-container mt-3">
              <div className="pill">
                <i class="fa-solid fa-calendar-days"></i>
                {services?.periode}
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
              <span>Rp.100.000</span>
              <div className="discount">100%</div>
              <div className="price">{services?.harga}</div>
            </div>
          </div>
        </div>
      </section>
      <section id="detail">
        <div className="row">
          <div className="col-7">
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
              <div className="description">
                {services?.detail_product?.topik}
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
                  <div className="col">
                    <p className="p-0 mb-1">
                      {services?.detail_product?.mentor?.nama_lengkap}
                    </p>
                    <p style={{ opacity: "0.8" }}>
                      {services?.detail_product?.mentor?.position}
                    </p>
                    <div className="row">
                      <div className="col-md-auto d-flex align-items-center">
                        <img src={linkedin} alt="" />
                      </div>
                      <div className="col p-0">
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
            </div>
            <div className="detail-card">
              <div className="header">
                <i class="fa-regular fa-calendar-check"></i> Detail Jadwal
              </div>
              <div className="description">
                {formatDate(services?.periode)} - Selesai
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <>loading...</>
  );
}

export default DetailCourse;
