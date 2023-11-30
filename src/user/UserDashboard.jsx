import React, { useEffect } from "react";
import { withAuthUser } from "../auth/RouteAccess";
import {
  API_URL,
  fetchTransactionByUserId,
  formatDateWithDays,
  updateEvent,
} from "../components/utils/Constants";
import Swal from "sweetalert2";

const UserDashboard = ({ user, handleLogout }) => {
  const [eventRegistered, setEventRegistered] = React.useState([]);
  const [courseRegistered, setCourseRegistered] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetchTransactionByUserId(user?.id, 2);
      setEventRegistered(response);
      const response2 = await fetchTransactionByUserId(user?.id, 1);
      setCourseRegistered(response2);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelEvent = (id) => {
    Swal.fire({
      title: "Pembatalan Event",
      text: "Apakah anda yakin ingin membatalkan event ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await updateEvent(id, "cancel");
          console.log(response);
          Swal.fire(
            "Sampai Jumpa!",
            "Semoga Kita dapat segera bertemu!",
            "success"
          );
          fetchData();
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  useEffect(() => {
    document.title = "Dashboard | MITGLOS EDU";

    fetchData();
  }, []);
  return (
    <section className="container">
      <div className="card">
        <div className="card-body">
          <h1>Dashboard User</h1>
          <p>
            Gimana harimu, <b>{user?.name}</b>?
          </p>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-body">
          <h3 className="card-title outfit">Event Terdaftar</h3>
          <h6 className="card-subtitle mb-2 text-muted">
            Anda telah terdaftar dalam event ini.
          </h6>
          <table class="table">
            <thead>
              <tr className="outfit">
                <th scope="col">Nama</th>
                <th scope="col">Tanggal Pelaksanaan</th>
                <th scope="col ">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {eventRegistered ? (
                eventRegistered.length > 0 ? (
                  eventRegistered.map((data) => (
                    <tr>
                      <td>
                        <a
                          href={`${API_URL}course/${data.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.product.judul}
                        </a>
                      </td>
                      <td>{formatDateWithDays(data.product.periode)}</td>
                      <td className="d-flex outfit gap-3">
                        <button className="btn btn-info text-white">
                          <i class="fa-solid fa-magnifying-glass"></i> Lihat
                          Event
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            cancelEvent(data.id);
                          }}
                        >
                          <i class="fa-solid fa-xmark"></i> Batalkan
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Belum ada event terdaftar</td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="3">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-body">
          <h3 className="card-title outfit">Kursus Terdaftar</h3>
          <h6 className="card-subtitle mb-2 text-muted">
            Anda telah terdaftar dalam kursus ini.
          </h6>
          <table class="table">
            <thead>
              <tr className="outfit">
                <th scope="col">Nama</th>
                <th scope="col">Tanggal Pelaksanaan</th>
                <th scope="col ">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {courseRegistered ? (
                courseRegistered.length > 0 ? (
                  courseRegistered.map((data) => (
                    <tr>
                      <td>
                        <a
                          href={`${API_URL}course/${data.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.product.judul}
                        </a>
                      </td>
                      <td>{formatDateWithDays(data.product.periode)}</td>
                      <td className="d-flex outfit gap-3">
                        <button className="btn btn-info text-white">
                          <i class="fa-solid fa-magnifying-glass"></i> Lihat
                          Kursus
                        </button>
                        <button className="btn btn-danger">
                          <i class="fa-solid fa-xmark"></i> Batalkan
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Belum ada kursus terdaftar</td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="3">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default withAuthUser(UserDashboard);
