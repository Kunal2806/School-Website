import axios from "axios";
import { useState, useEffect } from "react";

const Admin = () => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    axios.get("http://localhost:5000/get")
      .then(res => setNews(res.data))
      .catch(err => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
        const id = editingId;
      axios.put(`http://localhost:5000/update`, { title, description, id })
        .then(() => {
          fetchNews();
          setTitle("");
          setDescription("");
          setEditingId(null);
        })
        .catch(err => console.log(err));
    } else {
      axios.post("http://localhost:5000/post", { title, description })
        .then(() => {
          fetchNews();
          setTitle("");
          setDescription("");
        })
        .catch(err => console.log(err));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete`,{data: {id}})
      .then(() => fetchNews())
      .catch(err => console.log(err));
  };

  const handleEdit = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setEditingId(item._id); 
  };

  return (
    <div className="w-screen min-h-screen overflow-x-hidden px-5 py-10 space-y-10">
      <form onSubmit={handleSubmit} className="w-[75%] mx-auto space-y-5 p-5 shadow-md rounded-lg bg-gray-50">
        <h2 className="text-2xl font-bold">{editingId ? "Edit News & Events" : "Add News & Events"}</h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className="flex gap-4">
          <button type="submit" className="bg-[#1c2b4a] text-white px-4 py-2 rounded">
            {editingId ? "Update" : "Create"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setTitle("");
                setDescription("");
                setEditingId(null);
              }}
              className="bg-[#1c2b4a] text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="space-y-6 w-[75%] mx-auto">
        {news.map((data, index) => (
          <div key={data._id || index} className="p-5 shadow-lg space-y-3 bg-white rounded">
            <p className="font-bold text-[#1c2b4a] text-xl">{data.title}</p>
            <p className="text-[#1c2b4a]">{data.description}</p>
            <div className="flex gap-4">
              <button onClick={() => handleEdit(data)} className="bg-[#1c2b4a] text-white px-3 py-1 rounded">
                Edit
              </button>
              <button onClick={() => handleDelete(data._id)} className="bg-[#1c2b4a] text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
