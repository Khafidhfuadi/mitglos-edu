import React from "react";
import hero from "./assets/img/hero-img.png";
import logo from "./assets/img/logo.png";
import Button from "./components/utils/Button";
import BenefitCard from "./components/utils/BenefitCard";
import CourseCard from "./components/utils/CourseCard";
import thumbnailImg from "./assets/img/course-thumbnail.png";
import advIcon from "./assets/img/adv-icon.svg";
import mentor1 from "./assets/img/mentor-1.png";
import mentor2 from "./assets/img/mentor-2.png";
import linkedinIcon from "./assets/img/linkedin-icon.svg";
import igIcon from "./assets/img/ig-icon.svg";
import line from "./assets/img/line.png";
import TestiCard from "./components/utils/TestiCard";
import chatModel from "./assets/img/chat-model.png";

const goToCourseSection = () => {
  const courseSection = document.getElementById("courses");
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

            {/* <a
              className="navbar-brand-two mx-auto d-lg-none d-inline-block"
              href="#"
            >
              <img src={logo} alt="logo" width={150} />
            </a> */}
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
              <li className="nav-item d-flex align-items-center">
                <Button
                  text="Login"
                  onClick={goToCourseSection}
                  isSmall={true}
                />
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
      <section id="courses">
        <div className="container">
          <div className="heading text-center text-dark">
            <h1 className="section-title">Pilih Yang Paling Cocok Untukmu</h1>
            <p className="sub-title">
              Berbagai macam pilihan dengan metode belajar yang cocok buat kamu
            </p>
          </div>
          <div className="d-flex">
            <Button text="Terbaru" onClick={() => {}} />
            <Button text="Webinar" onClick={() => {}} />
            <Button text="Course" onClick={() => {}} />
          </div>
          <div className="row ">
            <div className="col d-flex align-items-stretch">
              <CourseCard
                thumbnailImg={thumbnailImg}
                kategori="Webinar"
                periode="12 Juli 2021"
                pertemuan="1 Pertemuan"
                tempat="Online"
                judul="Belajar Menjadi Fullstack Developer"
                ringkasan="Belajar menjadi fullstack developer dengan menggunakan bahasa pemrograman javascript"
                hargaAsli="1000000"
                discount="50"
                onClick={() => {}}
              />
            </div>
            <div className="col d-flex align-items-stretch">
              <CourseCard
                thumbnailImg={thumbnailImg}
                kategori="Webinar"
                periode="12 Juli 2021"
                pertemuan="1 Pertemuan"
                tempat="Online"
                judul="Belajar Menjadi Fullstack Developer"
                ringkasan="Belajar menjadi elajar menjadi fullstack developer dengelajar menjadi fullstack developer deng menggunakan bahasa pemrograman javascript"
                hargaAsli="1000000"
                discount="50"
                onClick={() => {}}
              />
            </div>
            <div className="col d-flex align-items-stretch">
              <CourseCard
                thumbnailImg={thumbnailImg}
                kategori="Webinar"
                periode="12 Juli 2021"
                pertemuan="1 Pertemuan"
                tempat="Online"
                judul="Belajar Menjadi Fullstack Developer"
                ringkasan="Belajar menjadi elajar menjadi fullstack developer dengelajar menjadi fullstack developer deng menggunakan bahasa pemrograman javascript"
                hargaAsli="1000000"
                discount="50"
                onClick={() => {}}
              />
            </div>
            <div className="col d-flex align-items-stretch">
              <CourseCard
                thumbnailImg={thumbnailImg}
                kategori="Webinar"
                periode="12 Juli 2021"
                pertemuan="1 Pertemuan"
                tempat="Online"
                judul="Belajar Menjadi Fullstack Developer"
                ringkasan="Belajar menjadi fullstack developer deng an menggunakan bahasa pemrograman javascript"
                hargaAsli="1000000"
                discount="50"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="mentor">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-center align-items-center text-center">
              <img className="line" src={line} alt="" />
              <div className="row">
                <div className="col-6">
                  <div className="mentor-profile">
                    <img src={mentor1} alt="" />
                    <p className="mentor-name">Kak Yuni</p>
                    <p className="position">Fullstack Developer</p>
                    <div className="socmed">
                      <a href="#">
                        <img src={linkedinIcon} alt="" />
                      </a>
                      <a href="#">
                        <img src={igIcon} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mentor-profile">
                    <img src={mentor2} alt="" />
                    <p className="mentor-name">Kak Yuni</p>
                    <p className="position">Fullstack Developer</p>
                    <div className="socmed">
                      <a href="#">
                        <img src={linkedinIcon} alt="" />
                      </a>
                      <a href="#">
                        <img src={igIcon} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="heading p-0 ps-5">
                <h1 className="section-title">
                  Belajar Intensif bersama Mentor Terbaik Kami
                </h1>
                <p className="sub-title">
                  Perkenalkan mentor terbaik kami di bidangnya.
                </p>
                <div className="adventages-container">
                  <div className="advantages-list">
                    <img src={advIcon} alt="" />
                    <p>Bekerja di Big Company</p>
                  </div>
                  <div className="advantages-list">
                    <img src={advIcon} alt="" />
                    <p>Pengalaman mengajar sampai dengan 10 tahun</p>
                  </div>
                  <div className="advantages-list">
                    <img src={advIcon} alt="" />
                    <p>Bersertifikat Internasional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="container">
          <div className="heading text-center">
            <h1 className="section-title">Apa Kata Mereka?</h1>
          </div>
          <div className="row">
            <div className="col d-flex align-items-stretch">
              <TestiCard />
            </div>
            <div className="col d-flex align-items-stretch">
              <TestiCard />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="contact">
          <img src={chatModel} alt="" width={550} />
          <div className="text-container">
            <div className="sub-title">Masih Bingung Pilih Yang Mana?</div>
            <div className="heading">Tanyakan Via Chat Kepada Kami</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
