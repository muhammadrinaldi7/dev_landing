import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddCars = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [registration_number, setRegistrationNumber] = useState("");
  const [daily_rate, setDailyRate] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("Available");
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const loadimage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("make", make);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("color", color);
    formData.append("registration_number", registration_number);
    formData.append("daily_rate", daily_rate);
    formData.append("file", file);
    formData.append("status", status);

    try {
      await axios.post(`${import.meta.env.VITE_REACT_API_URL}/cars`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Gagal menambahkan mobil:", error);
    }
  };

  return (
    <>
      <div className="container p-10 w-[80%] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="make"
            >
              Merek Mobil
            </label>
            <input
              className="w-full rounded-lg border-gray-300 p-3 text-sm"
              placeholder="Masukkan merek mobil"
              type="text"
              id="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="model"
            >
              Model Mobil
            </label>
            <input
              className="w-full rounded-lg border-gray-300 p-3 text-sm"
              placeholder="Masukkan model mobil"
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="year"
            >
              Tahun
            </label>
            <input
              className="w-full rounded-lg border-gray-300 p-3 text-sm"
              placeholder="Masukkan tahun pembuatan"
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="color"
            >
              Warna
            </label>
            <input
              className="w-full rounded-lg border-gray-300 p-3 text-sm"
              placeholder="Masukkan warna mobil"
              type="text"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="registration_number"
            >
              Nomor Registrasi
            </label>
            <input
              className="w-full rounded-lg border-gray-300 p-3 text-sm"
              placeholder="Masukkan nomor registrasi"
              type="text"
              id="registration_number"
              value={registration_number}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="daily_rate"
            >
              Tarif Harian
            </label>
            <input
              className="w-full rounded-lg border-gray-300 p-3 text-sm"
              placeholder="Masukkan tarif harian"
              type="text"
              id="daily_rate"
              value={daily_rate}
              onChange={(e) => setDailyRate(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="image_url"
            >
              Foto Mobil
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              id="file"
              onChange={(e) => loadimage(e)}
            />
          </div>
          {preview ? (
            <figure>
              <img src={preview} alt="preview" className="w-20 h-20" />
            </figure>
          ) : (
            "No image selected"
          )}
          <div className="mt-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="status"
            >
              Status Mobil
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
              Batal
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
