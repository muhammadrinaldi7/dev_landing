import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EditCars = () => {
  const [model, setModel] = useState("");
  const [nama, setNama] = useState("");
  const [tahun, setTahun] = useState("");
  const [warna, setWarna] = useState("");
  const [no_polisi, setNoPolisi] = useState("");
  const [harga, setHarga] = useState("");
  const [foto, setFoto] = useState("");
  const [status, setStatus] = useState("Available");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/cars", {
        model,
        nama,
        tahun,
        warna,
        no_polisi,
        harga,
        foto,
        status,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container p-10 w-[80%] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <label className="sr-only" htmlFor="name">
              Model Mobil
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Model Mobil"
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label className="sr-only" htmlFor="name">
              Nama Mobil
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nama Mobil"
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label className="sr-only" htmlFor="name">
              Tahun
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Tahun"
              type="text"
              id="tahun"
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label className="sr-only" htmlFor="name">
              Warna
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Warna"
              type="text"
              id="warna"
              value={warna}
              onChange={(e) => setWarna(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label className="sr-only" htmlFor="name">
              No Polisi
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="No Polisi"
              type="text"
              id="no_polisi"
              value={no_polisi}
              onChange={(e) => setNoPolisi(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label className="sr-only" htmlFor="name">
              Harga
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Harga"
              type="text"
              id="harga"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label className="sr-only" htmlFor="name">
              Foto
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              id="foto"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label className="sr-only" htmlFor="name">
              Status
            </label>
            <select
              className="select select-info w-full max-w-xs"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option disabled defaultValue selected>
                Pilih Status
              </option>
              <option>Available</option>
              <option>Maintenance</option>
              <option>Rented</option>
            </select>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link
              to="/dashboard"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
