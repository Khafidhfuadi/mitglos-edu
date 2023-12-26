import React, { useEffect } from "react";
import { withAuthUser } from "../auth/RouteAccess";
import {
  API_URL,
  fetchHistoryEventUser,
  fetchTransactionByUserId,
  formatDateWithDays,
  updateEvent,
} from "../components/utils/Constants";

const HistoryEvent = ({ user, handleLogout }) => {
  const [historyEvent, sethistoryEvent] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetchHistoryEventUser(user?.id, "done");
      sethistoryEvent(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Dashboard | MITGLOS EDU";

    fetchData();
  }, []);
  return (
    <section className="container">
      <div className="card mt-5">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h3 className="card-title outfit">History Kegiatan </h3>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">
            History Kegiatan yang pernah anda ikuti.
          </h6>
          <table className="table">
            <thead>
              <tr className="outfit">
                <th scope="col">Nama</th>
                <th scope="col">Tanggal Pelaksanaan</th>
                <th scope="col">Kategori</th>
                <th scope="col ">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {historyEvent ? (
                historyEvent.length > 0 ? (
                  historyEvent.map((data) => (
                    <tr key={data.id}>
                      <td>
                        <a
                          href={`${API_URL}course/${data.product.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.product.judul}
                        </a>
                      </td>
                      <td>{formatDateWithDays(data.product.periode)}</td>
                      <td>
                        <span class="badge text-bg-primary">
                          {data.product.kategori.name}
                        </span>
                      </td>
                      <td className="d-flex outfit gap-3">
                        <a
                          className="btn btn-info text-white"
                          href={`${API_URL}course/${data.product.id} `}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-magnifying-glass"></i> Lihat
                          Event
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Belum ada event yang anda ikuti</td>
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

export default withAuthUser(HistoryEvent);
