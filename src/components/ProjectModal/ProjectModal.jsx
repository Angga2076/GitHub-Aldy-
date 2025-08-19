/* src/components/ProjectModal/ProjectModal.jsx */
export default function ProjectModal({ project }) {
  if (!project) return null;

  return (
    <div className="p-6 bg-gray-900 rounded-2xl shadow-lg text-white max-w-md mx-auto">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <button
        onClick={() => alert(`🚀 ${project.title} clicked!`)}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold"
      >
        Visit Project
      </button>
    </div>
  );
}
