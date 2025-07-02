import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/gallery")
      .then((res) => setGallery(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-screen min-h-screen overflow-x-hidden py-10 bg-gray-50">
      <h1 className="text-center text-3xl font-bold text-[#1c2b4a] mb-10">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-contain"
            />
            <div className="p-5">
              <p className="text-lg font-semibold text-[#1c2b4a] font-Lato">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
