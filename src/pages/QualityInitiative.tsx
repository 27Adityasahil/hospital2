import { useEffect, useState } from "react";
import axios from "axios";
// import { Blog } from "../types/Blog";
import { Blog } from "../types/Blog";
// import CommonBanner from "./CommonBanner";
import CommonBanner from "../components/CommonBanner";
import doctorsTeam from "../assets/header15.png"; // Change this path if necessary
import "./Blog.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Debugging log to check if the VITE_API_URL is correctly loaded
    console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);

    const url = `${import.meta.env.VITE_API_URL}/api/blogs`;
    // Debugging log to check the full URL being used
    console.log("Fetching blogs from:", url);

    axios
      .get(url)
      .then((res) => {
        // Debugging log to inspect the response data
        console.log("Fetched blogs:", res.data);

        const blogs = res.data.blogs;

        if (Array.isArray(blogs)) {
          setBlogs(blogs);
        } else {
          console.warn("Unexpected API response shape:", res.data);
          setBlogs([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, []);

  // Function to handle opening the modal
  const openModal = (blog: Blog) => {
    setSelectedBlog(blog);
    setModalVisible(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedBlog(null);
    setModalVisible(false);
  };

  return (
    <>
      <CommonBanner
        title="Quality Initiative"
        subtitle=""
        backgroundImage={doctorsTeam}
      />
      <section className="doctors min-h-screen bg-gray-50 flex justify-center blog-section">
        <div className="blogs-container">
          <div className="blog-title">
            <h2>Quality Initiative</h2>
          </div>
          <hr />
          
        </div>
      </section>

      {/* Modal for displaying full blog */}
      {modalVisible && selectedBlog && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedBlog.title}</h2>
            <img
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              style={{ maxWidth: "100%", marginBottom: "1rem" }}
            />
            <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
