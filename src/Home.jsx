import React, { useEffect } from "react";
import hero from "./assets/img/hero-img.png";
import BenefitCard from "./components/utils/BenefitCard";
import CourseCard from "./components/utils/CourseCard";
import thumbnailImg from "./assets/img/course-thumbnail.png";
import advIcon from "./assets/img/adv-icon.svg";
import mentor1 from "./assets/img/mentor-1.png";
import mentor2 from "./assets/img/mentor-2.png";
import linkedinIcon from "./assets/img/linkedin-icon.svg";
import igIcon from "./assets/img/ig-icon.svg";
import line from "./assets/img/line.png";
import okoce from "./assets/img/company-logo/okoce.png";
import kemen from "./assets/img/company-logo/kemen.png";
import soft from "./assets/img/company-logo/soft.png";
import unimas from "./assets/img/company-logo/unimas.png";
import Button from "./components/utils/Button";

import TestiCard from "./components/utils/TestiCard";
import chatModel from "./assets/img/chat-model.png";
import ServicesList from "./components/ServicesList";
const goToCourseSection = () => {
  const courseSection = document.getElementById("courses");
  courseSection.scrollIntoView({ behavior: "smooth" });
};
function Home() {
  useEffect(() => {
    document.title = "Home | MITGLOS EDU";
  });
  return (
    <>
      <section className="container" id="hero">
        <div className="row justify-content-between align-items-center">
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
            <div className="col  d-flex justify-content-center align-items-stretch">
              <BenefitCard
                head="Berstandar internasional"
                desc="Kurikulum, materi, dan mentor sudah berstandar dan bersertifikat internasional"
              />
            </div>
            <div className="col  d-flex justify-content-center align-items-stretch">
              <BenefitCard
                head="Sertifikat internasional"
                desc="Sertifikat pelatihan yang diperoleh adalah sertifikat internasional, sehingga dapat menunjang karir lebih baik"
              />
            </div>
            <div className="col  d-flex justify-content-center align-items-stretch">
              <BenefitCard
                head="Konsultasi karir"
                desc="Setelah lulus dari pelatihan akan ada konsultasi karir hingga memperoleh pekerjaan impian"
              />
            </div>
            <div className="col  d-flex justify-content-center align-items-stretch">
              <BenefitCard
                head="Harga terjangkau"
                desc="Harga jauh lebih murah dengan fasilitas yang sama dari bootcamp lainnya"
              />
            </div>
            <div className="col  d-flex justify-content-center align-items-stretch">
              <BenefitCard
                head="Belajar fleksibel"
                desc="Belajar di mana pun, bebas pilih kelas dan waktu sesuai dengan yang diinginkan"
              />
            </div>
            <div className="col  d-flex justify-content-center align-items-stretch">
              <BenefitCard
                head="Lifetime akses"
                desc="Modul dan rekaman kelas dapat diakses selamanya setelah lulus dari pelatihan"
              />
            </div>
          </div>
        </div>
      </section>
      <ServicesList />
      <section id="mentor">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center text-center">
              {/* <img className="line" src={line} alt="" /> */}
              <div className="row">
                <div className="col-6">
                  <div className="mentor-profile">
                    <img className="mentor-img" src={mentor1} alt="" />
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
                    <img className="mentor-img" src={mentor2} alt="" />
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
            <div className="col-12 col-md-6">
              <div className="heading p-0 ps-md-5">
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
      <section id="partner">
        <div className="container">
          <div className="heading text-center">
            <h1 className="section-title text-dark">Partner Kami</h1>
          </div>
          <div className="row">
            <div className="col-6 col-md-3">
              <div class="logo-card">
                <img src={okoce} alt="Logo 2" />
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div class="logo-card">
                <img src={kemen} alt="Logo 2" />
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div class="logo-card">
                <img src={soft} alt="Logo 2" />
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div class="logo-card">
                <img src={unimas} alt="Logo 2" />
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
            <div className="col col-md-6 col-12 d-flex align-items-stretch justify-content-center">
              <TestiCard
                content="Acara ini memberikan wawasan yang sangat berharga, saya belajar banyak mengenai strategi kreatif, konten yang menarik, cara meningkatkan visibilitas produk atau layanan melalui TikTok. Saya sangat merekomendasikan ini kepada siapa pun untuk meningkatkan kemampuan pemasaran digital, terutama melalui TikTok."
                imagePath="diva.jpeg"
                name="Diva Annisa"
                position="Peserta Seminar TikTok Marketing"
              />
            </div>
            <div className="col col-md-6 col-12 d-flex align-items-stretch justify-content-center">
              <TestiCard
                content="Acara ini membantu para pelaku UMKM untuk bisa beradaptasi di era modern ini. Dijelaskan mengenai teknis yang dilakukan, algoritma, dan cara agar sebuah pelaku UMKM dapat bertahan di era digital. Pemateri sangat informatif, materi mudah difahami dan applicable."
                imagePath="iqbal.jpeg"
                name="Iqbal Kurniawan"
                position="Peserta Seminar TikTok Marketing"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container">
        <div className="contact">
          <div className="text-container">
            <div className="sub-title">Masih Bingung Pilih Yang Mana?</div>
            <div className="heading">Tanyakan Via Chat Kepada Kami</div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
