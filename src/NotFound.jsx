import React from "react";
import './index.css';
import { useNavigate } from "react-router-dom";
import Header from "./Container/Header";
import Footer from "./Container/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h4 className="text-primary">Page Not Found 404</h4>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            ⬅ Back to Items
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
