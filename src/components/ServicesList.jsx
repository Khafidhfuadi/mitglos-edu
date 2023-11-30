import React, { useEffect } from "react";
import { fetchServices } from "./utils/Constants";
import { useNavigate } from "react-router-dom";
import CourseCard from "./utils/CourseCard";
import Button from "./utils/Button";

const ServicesList = () => {
  const nav = useNavigate();

  const [services, setServices] = React.useState([]);
  const fetchData = async () => {
    try {
      const response = await fetchServices();
      setServices(response?.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Course | MITGLOS EDU";
    fetchData();
  });
  return (
    <section id="courses">
      <div className="container">
        <div className="heading text-center text-dark">
          <h1 className="section-title">Pilih Yang Paling Cocok Untukmu</h1>
          <p className="sub-title">
            Berbagai macam pilihan dengan metode belajar yang cocok buat kamu
          </p>
        </div>
        <div className="d-flex gap-3 mb-3">
          <Button text="Terbaru" onClick={() => {}} />
          <Button text="Webinar" onClick={() => {}} />
          <Button text="Course" onClick={() => {}} />
        </div>
        <div className="row ">
          {services &&
            services.map((service, index) => (
              <div
                id={index}
                className="col d-flex align-items-stretch col-12 col-md-6 col-xl-4 justify-content-center"
              >
                <CourseCard
                  thumbnailImg={service?.thumbnail_img}
                  kategori={service?.kategori?.name}
                  periode={service?.periode}
                  pertemuan={service?.pertemuan}
                  tempat={service?.tempat}
                  judul={service?.judul}
                  ringkasan={service?.ringkasan}
                  hargaAsli={service?.harga}
                  discount="50"
                  isPromo={true}
                  onClick={() => {
                    nav(`/course/${service?.id}`);
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
