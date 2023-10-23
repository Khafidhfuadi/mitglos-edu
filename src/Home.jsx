import React from "react";
import hero from "./assets/img/hero-img.png";
import logo from "./assets/img/logo.png";
import Button from "./components/utils/Button";
import BenefitCard from "./components/utils/BenefitCard";

const goToCourseSection = () => {
  const courseSection = document.getElementById("course");
  courseSection.scrollIntoView({ behavior: "smooth" });
};

function Home() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            {/* <a className="navbar-brand d-none d-lg-inline-block" href="#">
              {" "}
              Navbar 6{" "}
            </a> */}
            <img src={logo} alt="logo" width={150} />

            <a
              className="navbar-brand-two mx-auto d-lg-none d-inline-block"
              href="#"
            >
              <img src={logo} alt="logo" width={150} />
            </a>
            <div className="w-100 text-right">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#myNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            className="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar"
          >
            <ul className="navbar-nav ms-auto flex-nowrap">
              <li className="nav-item">
                <a href="#" className="nav-link m-2 menu-item nav-active">
                  Course
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link m-2 menu-item">
                  Tentang
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link m-2 menu-item">
                  Corporate Training
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container" id="hero">
        <div className="row justify-content-between vh-100 align-items-center">
          <div className="col-md-6 pe-5 ">
            <div className="hero-title">
              Raih Karir Impianmu Bersama MITGLOS EDU
            </div>
            <p className="hero-desc">
              Satu-satunya Course Eksklusif Bersertifikat Standar Uni-Eropa.
              Belajar dari Para ahli untuk meraih cita-citamu!
            </p>
            <div className="btn-group">
              <Button text="Jelajahi Course" onClick={goToCourseSection} />
              <Button
                text="For Corporate"
                onClick={goToCourseSection}
                isOutline={true}
              />
            </div>
          </div>
          <div className="col-md-6 text-end">
            <img src={hero} className="img-fluid" alt="hero-img" width={420} />
          </div>
        </div>
      </section>

      <section id="benefits">
        <div className="container">
          <div className="heading text-center">
            <h1 className="section-title">Apa Yang Buat Kami Berbeda?</h1>
            <p className="sub-title">
              Simak poin-poin dibawah ini buat lebih tahu!
            </p>
          </div>
          <div className="row align-items-center benefit-container">
            <div className="col d-flex justify-content-center">
              <BenefitCard
                head="Berstandar internasional"
                desc="Kurikulum, materi, dan mentor sudah berstandar dan bersertifikat internasional"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                head="Sertifikat internasional"
                desc="Sertifikat pelatihan yang diperoleh adalah sertifikat internasional, sehingga dapat menunjang karir lebih baik"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                head="Konsultasi karir"
                desc="Setelah lulus dari pelatihan akan ada konsultasi karir hingga memperoleh pekerjaan impian"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                head="Harga terjangkau"
                desc="Harga jauh lebih murah dengan fasilitas yang sama dari bootcamp lainnya"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                head="Belajar fleksibel"
                desc="Belajar di mana pun, bebas pilih kelas dan waktu sesuai dengan yang diinginkan"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                head="Lifetime akses"
                desc="Modul dan rekaman kelas dapat diakses selamanya setelah lulus dari pelatihan"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
