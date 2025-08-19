import React from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
      alignItems: "center", justifyContent: "center", zIndex: 9999
    }}>
      <div style={{ background: "white", padding: "20px", borderRadius: "10px", maxWidth: "400px", width: "100%" }}>
        <h2>{project?.title || "Project Title"}</h2>
        <p>{project?.description || "No description available."}</p>
        <button onClick={onClose} style={{ marginTop: "10px", padding: "8px 16px", background: "blue", color: "white", borderRadius: "5px" }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
