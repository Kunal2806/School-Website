import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const [tab, setTab] = useState("news");

  const [news, setNews] = useState([]);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [editingNewsId, setEditingNewsId] = useState(null);

  const [gallery, setGallery] = useState([]);
  const [galleryTitle, setGalleryTitle] = useState("");
  const [galleryImage, setGalleryImage] = useState("");
  const [editingGalleryId, setEditingGalleryId] = useState(null);

  useEffect(() => {
    fetchNews();
    fetchGallery();
  }, []);

  const fetchNews = () => {
    axios.get("http://localhost:5000/news")
      .then(res => setNews(res.data))
      .catch(err => console.log(err));
  };

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    const payload = { title: newsTitle, description: newsDescription };

    if (editingNewsId) {
      axios.put("http://localhost:5000/news", { ...payload, id: editingNewsId })
        .then(() => {
          fetchNews();
          setNewsTitle(""); setNewsDescription(""); setEditingNewsId(null);
        })
        .catch(err => console.log(err));
    } else {
      axios.post("http://localhost:5000/news", payload)
        .then(() => {
          fetchNews();
          setNewsTitle(""); setNewsDescription("");
        })
        .catch(err => console.log(err));
    }
  };

  const handleNewsEdit = (item) => {
    setNewsTitle(item.title);
    setNewsDescription(item.description);
    setEditingNewsId(item._id);
  };

  const handleNewsDelete = (id) => {
    axios.delete("http://localhost:5000/news", { data: { id } })
      .then(() => fetchNews())
      .catch(err => console.log(err));
  };

  const fetchGallery = () => {
    axios.get("http://localhost:5000/gallery")
      .then(res => setGallery(res.data))
      .catch(err => console.log(err));
  };

  const handleGallerySubmit = (e) => {
    e.preventDefault();
    const payload = { title: galleryTitle, image: galleryImage };

    if (editingGalleryId) {
      axios.put("http://localhost:5000/gallery", { ...payload, id: editingGalleryId })
        .then(() => {
          fetchGallery();
          setGalleryTitle(""); setGalleryImage(""); setEditingGalleryId(null);
        })
        .catch(err => console.log(err));
    } else {
      axios.post("http://localhost:5000/gallery", payload)
        .then(() => {
          fetchGallery();
          setGalleryTitle(""); setGalleryImage("");
        })
        .catch(err => console.log(err));
    }
  };

  const handleGalleryEdit = (item) => {
    setGalleryTitle(item.title);
    setGalleryImage(item.image);
    setEditingGalleryId(item._id);
  };

  const handleGalleryDelete = (id) => {
    axios.delete("http://localhost:5000/gallery", { data: { id } })
      .then(() => fetchGallery())
      .catch(err => console.log(err));
  };

  return (
    <div className="w-screen min-h-screen px-5 py-10 bg-gray-100 overflow-x-hidden">
      <div className="flex justify-center gap-4 mb-10">
        <button
          className={`px-5 py-2 rounded ${tab === "news" ? "bg-[#1c2b4a] text-white" : "bg-white text-[#1c2b4a] border"}`}
          onClick={() => setTab("news")}
        >
          News & Events
        </button>
        <button
          className={`px-5 py-2 rounded ${tab === "gallery" ? "bg-[#1c2b4a] text-white" : "bg-white text-[#1c2b4a] border"}`}
          onClick={() => setTab("gallery")}
        >
          Gallery
        </button>
      </div>

      {tab === "news" && (
        <>
          <form onSubmit={handleNewsSubmit} className="w-[75%] mx-auto space-y-5 p-5 shadow-md rounded-lg bg-white mb-10">
            <h2 className="text-2xl font-bold">{editingNewsId ? "Edit News" : "Add News"}</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border rounded"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded"
              value={newsDescription}
              onChange={(e) => setNewsDescription(e.target.value)}
              required
            />
            <div className="flex gap-4">
              <button type="submit" className="bg-[#1c2b4a] text-white px-4 py-2 rounded">
                {editingNewsId ? "Update" : "Create"}
              </button>
              {editingNewsId && (
                <button
                  type="button"
                  onClick={() => {
                    setNewsTitle(""); setNewsDescription(""); setEditingNewsId(null);
                  }}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="space-y-6 w-[75%] mx-auto">
            {news.map((item) => (
              <div key={item._id} className="p-5 shadow-lg space-y-3 bg-white rounded">
                <p className="font-bold text-[#1c2b4a] text-xl">{item.title}</p>
                <p className="text-[#1c2b4a]">{item.description}</p>
                <div className="flex gap-4">
                  <button onClick={() => handleNewsEdit(item)} className="bg-[#1c2b4a] text-white px-3 py-1 rounded">Edit</button>
                  <button onClick={() => handleNewsDelete(item._id)} className="bg-[#1c2b4a] text-white px-3 py-1 rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "gallery" && (
        <>
          <form onSubmit={handleGallerySubmit} className="w-[75%] mx-auto space-y-5 p-5 shadow-md rounded-lg bg-white mb-10">
            <h2 className="text-2xl font-bold">{editingGalleryId ? "Edit Gallery" : "Add Gallery"}</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border rounded"
              value={galleryTitle}
              onChange={(e) => setGalleryTitle(e.target.value)}
              required
            />
            <input
              type="url"
              placeholder="Image URL"
              className="w-full p-2 border rounded"
              value={galleryImage}
              onChange={(e) => setGalleryImage(e.target.value)}
              required
            />
            <div className="flex gap-4">
              <button type="submit" className="bg-[#1c2b4a] text-white px-4 py-2 rounded">
                {editingGalleryId ? "Update" : "Create"}
              </button>
              {editingGalleryId && (
                <button
                  type="button"
                  onClick={() => {
                    setGalleryTitle(""); setGalleryImage(""); setEditingGalleryId(null);
                  }}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] mx-auto">
            {gallery.map((item) => (
              <div key={item._id} className="bg-white rounded shadow-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-56 object-contain" />
                <div className="p-4 space-y-2">
                  <p className="text-lg font-semibold text-[#1c2b4a]">{item.title}</p>
                  <div className="flex gap-4">
                    <button onClick={() => handleGalleryEdit(item)} className="bg-[#1c2b4a] text-white px-3 py-1 rounded">Edit</button>
                    <button onClick={() => handleGalleryDelete(item._id)} className="bg-[#1c2b4a] text-white px-3 py-1 rounded">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
