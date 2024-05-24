import { useEffect, useState } from "react";
import axios from "axios";

export const HomeDashboard = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_REACT_API_URL}/cars`).then((res) => {
      setCars(res.data);
      console.log(res.data);
    });
  }, []);

  const [statusFilter, setStatusFilter] = useState("Available");

  const filteredCars = cars.filter((car) => car.status === statusFilter);
  return (
    <>
      <section id="HomeAdmin">
        <div className="container py-2 px-6 rounded-lg border mt-4 bg-white  flex flex-col  justify-center">
          <h1 className="mt-6">Status Ketersediaan Mobil</h1>
          <select
            onChange={(e) => setStatusFilter(e.target.value)}
            value={statusFilter}
            className="select select-info w-full max-w-[200px] mt-5"
          >
            <option disabled selected>
              Filter Status
            </option>
            <option>Available</option>
            <option>Rented</option>
            <option>Maintenance</option>
          </select>
          <div className="overflow-x-auto overflow-y-auto p-4 mt-2">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Foto Mobil</th>
                  <th>Merek Mobil</th>
                  <th>Nomor Polisi</th>
                  <th>Warna</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCars.length > 0 ? (
                  filteredCars.map((car, index) => (
                    <tr key={car.id} className="hover">
                      <th>{index + 1}</th>
                      <td>
                        <img src={car.url} className="max-w-[80px]" alt="" />
                      </td>
                      <td>{car.model}</td>
                      <td>{car.registration_number}</td>
                      <td>{car.color}</td>
                      <td>
                        <span
                          className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm ${
                            car.status === "Available"
                              ? "bg-green-100 text-green-700"
                              : car.status === "Rented"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {car.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Data tidak tersedia
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
