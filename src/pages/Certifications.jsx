import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Certifications.css";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const response = await axios.get("/api/certifications"); // Use relative URL
        setCertifications(response.data);
      } catch (error) {
        console.error("Error fetching certifications:", error);
      }
    }

    fetchCertifications();
  }, []);

  return (
    <div className="certifications-container">
      {certifications.map((certification) => (
        <div key={certification._id} className="certification-card"> {/* Use _id instead of id */}
          <h3 className="certification-title">{certification.title}</h3>
          <div className="certification-images">
            {certification.imageUrl.map((url, index) => (
              <img
                key={index}
                className="certification-image"
                src={url}
                alt={`Certification ${index + 1}`}
              />
            ))}
          </div>
          <Link
            to={`/certifications/${encodeURIComponent(certification.title)}`}
            className="certification-link"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
