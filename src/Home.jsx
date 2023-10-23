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
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block"></span>
            {/* <a class="navbar-brand d-none d-lg-inline-block" href="#">
              {" "}
              Navbar 6{" "}
            </a> */}
            <img src={logo} alt="logo" width={150} />

            <a
              class="navbar-brand-two mx-auto d-lg-none d-inline-block"
              href="#"
            >
              <img src={logo} alt="logo" width={150} />
            </a>
            <div class="w-100 text-right">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#myNavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            class="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar"
          >
            <ul class="navbar-nav ms-auto flex-nowrap">
              <li class="nav-item">
                <a href="#" class="nav-link m-2 menu-item nav-active">
                  Course
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link m-2 menu-item">
                  Tentang
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link m-2 menu-item">
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
          <div className="col-md-6 ps-5">
            <img src={hero} className="img-fluid" alt="hero-img" width={600} />
          </div>
        </div>
      </section>

      <section id="benefits">
        <div className="container vh-100">
          <div className="row align-items-center">
            <div className="col d-flex justify-content-center">
              <BenefitCard
                heading="Benefit 1"
                desc="Harga jauh lebih murah 95% dari bootcamp lainnya yang mencapai jutaan rupiah"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                heading="Benefit 1"
                desc="Harga jauh lebih murah 95% dari bootcamp lainnya yang mencapai jutaan rupiah"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                heading="Benefit 1"
                desc="Harga jauh lebih murah 95% dari bootcamp lainnya yang mencapai jutaan rupiah"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                heading="Benefit 1"
                desc="Harga jauh lebih murah 95% dari bootcamp lainnya yang mencapai jutaan rupiah"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                heading="Benefit 1"
                desc="Harga jauh lebih murah 95% dari bootcamp lainnya yang mencapai jutaan rupiah"
              />
            </div>
            <div className="col d-flex justify-content-center">
              <BenefitCard
                heading="Benefit 1"
                desc="Harga jauh lebih murah 95% dari bootcamp lainnya yang mencapai jutaan rupiah"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
