import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ProductCard = ({ name, image, model, price, year, status }) => {
  const whatsappUrl = `https://wa.me/+62895705038835?text=Saya%20ingin%20booking%20mobil%20${encodeURIComponent(
    model
  )}%20dengan%20harga%20IDR.${price}.%20Bisa%20diberikan%20info%20lebih%20lanjut?`;
  const handleClick = (event) => {
    if (status === "rented") {
      event.preventDefault();
      alert("Mobil sedang di pinjam");
    } else if (status === "maintenance") {
      event.preventDefault();
      alert("Mobil sedang di perbaiki");
    } else {
      window.open(whatsappUrl, "_blank");
    }
  };
  const badgeStatus =
    status === "available"
      ? "bg-green-100 text-green-700"
      : status === "rented"
      ? "bg-red-100 text-red-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="max-w-sm w-full md:w-1/3 xl:w-1/4 p-8">
      <div class="relative hover:scale-110 hover:shadow-md flex w-80 flex-col rounded-xl mb-4 bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img
            className="w-full flex-shrink-0 scale-90"
            style={{ height: "200px", objectFit: "cover" }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcms.daihatsu.co.id%2Fuploads%2Fproduct%2FThumbnail%25201585112208996.png&f=1&nofb=1&ipt=79c8d0f3c81f917556fe1acad92b3c594aced00b4d0f49fbc209ad443981e3dc&ipo=images"
            alt={name}
          />
        </div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {`${model}  ${year}`}{" "}
            <span
              class={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm ${badgeStatus}`}
            >
              {status}
            </span>
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            IDR. {price}
          </p>
        </div>
        <div class="p-6 pt-0">
          <a
            href={whatsappUrl}
            onClick={handleClick}
            target="_blank"
            data-ripple-light="true"
            className="select-none disabled rounded-lg bg-[#25D366] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="xl" className="mr-2" />
            Booking Sekarang
          </a>
        </div>
      </div>
    </div>
    // <div className="max-w-sm w-full md:w-1/3 xl:w-1/4 p-4">
    //   <div className="bg-[##e0e0e0] opacity-90 rounded-[40px] shadow-cust overflow-hidden hover:shadow-2xl hover:scale-105 transition-shadow duration-300 h-full flex flex-col">
    //     <img
    //       className="w-full flex-shrink-0"
    //       style={{ height: "200px", objectFit: "cover" }}
    //       src={image}
    //       alt={name}
    //     />
    //     <div className="px-6 py-4 flex flex-col flex-grow">
    //       <div className="font-bold text-xl mb-2">
    //         {name} <span className="text-sm text-gray-500">IDR.{price}</span>
    //       </div>
    //       <p className="text-gray-700 text-base flex-grow">
    //         {description.length > 100
    //           ? `${description.substring(0, 100)}...`
    //           : description}
    //       </p>
    //       <a
    //         href={whatsappUrl}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
    //       >
    //         Pesan via WhatsApp
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
