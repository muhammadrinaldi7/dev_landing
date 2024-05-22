import react, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import imgMobil from "../../assets/img/cars/camry2020.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Cars = () => {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCatalog = () => {
    axios
      .get(`${import.meta.env.VITE_REACT_API_URL}/cars`)
      .then((response) => {
        setCatalog(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getCatalog();
  }, []);

  const columns = [
    {
      name: "Foto",
      selector: (row) => (
        <img
          src={imgMobil}
          alt={row.make + " " + row.model}
          style={{ width: "50px", height: "auto" }}
        />
      ),
      sortable: true,
    },
    {
      name: "Merk",
      selector: (row) => row.make,
      sortable: true,
    },
    {
      name: "Model",
      selector: (row) => row.model,
      sortable: true,
    },
    {
      name: "Tahun",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "No Polisi",
      selector: (row) => row.registration_number,
      sortable: true,
    },
    {
      name: "Harga/Hari",
      selector: (row) => row.daily_rate,
      sortable: true,
    },
    {
      name: "Ketersediaan",
      selector: (row) => (
        <span
          className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm ${
            row.status === "available"
              ? "bg-green-100 text-green-700"
              : row.status === "rented"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex justify-center items-center">
          <Link to={`/edit/${row.car_id}`} className="btn btn-sm btn-primary">
            Edit
          </Link>
          <button className="btn btn-sm btn-error">Hapus</button>
        </div>
      ),
      sortable: true,
      width: "150px",
    },
  ];

  return (
    <>
      <section id="Cars">
        <div className="container py-2 px-4 mt-4 flex flex-col justify-center">
          <div className="overflow-x-auto overflow-y-auto w-full">
            <Link to="/add" className="btn btn-md mb-4 btn-primary">
              <FontAwesomeIcon icon={faPlus} className="mr-0" />
              Tambah Mobil
            </Link>
            <DataTable
              title="Cars"
              direction="auto"
              fixedHeader
              columns={columns}
              filterable
              responsive
              fixedHeaderScrollHeight="500px"
              pagination
              data={catalog}
              progressPending={loading}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cars;
