import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/magicui/shiny-text";
import BlurText from "./components/magicui/blur-text";
import Lanyard from "./components/Lanyard/Lanyard";
import ChromaGrid from "./components/magicui/chroma-grid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import ChatRoom from "./components/ChatRoom/ChatRoom";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black">
        <ProfileCard
          imgSrc="/assets/faris.png"
          name="Aldy Faris Saputra"
          description="Frontend Developer | React | Tailwind CSS"
        />
        <div className="mt-6 text-center">
          <ShinyText
            text="Welcome to My Portfolio 🚀"
            disabled={false}
            speed={3}
            className="text-4xl font-bold"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen bg-black py-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <img
            src="/assets/faris1.png"
            alt="About Me"
            className="w-48 h-48 object-cover rounded-full border-4 border-gray-700"
          />
          <div>
            <BlurText
              text="I am a passionate frontend developer with a love for building modern and interactive web applications."
              delay={50}
              animateBy="words"
              direction="top"
              className="text-lg max-w-lg text-center md:text-left"
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Lanyard />
        </div>
      </section>

      {/* Tools Section */}
      <section
        className="min-h-screen bg-gradient-to-tr from-black to-gray-900 py-16 px-6"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-5xl text-center">
          <FaHtml5 className="text-orange-500" />
          <FaCss3 className="text-blue-500" />
          <FaJs className="text-yellow-400" />
          <FaReact className="text-blue-400" />
          <SiTailwindcss className="text-cyan-400" />
          <FaNodeJs className="text-green-500" />
          <SiExpress className="text-gray-400" />
          <SiNextdotjs className="text-white" />
          <SiFirebase className="text-yellow-500" />
          <SiMongodb className="text-green-400" />
          <SiMysql className="text-blue-400" />
          <FaDatabase className="text-gray-300" />
          <FaGithub className="text-white" />
          <FaGitAlt className="text-orange-400" />
          <TbBrandVscode className="text-blue-400" />
          <FaJava className="text-red-500" />
          <FaPython className="text-yellow-500" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen bg-black py-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <ChromaGrid
          projects={[
            {
              id: 1,
              title: "Project 1",
              description: "A modern website built with React and Tailwind CSS.",
              image: "/assets/proyek1.jpg",
            },
            {
              id: 2,
              title: "Project 2",
              description: "Fullstack app with Node.js and MongoDB.",
              image: "/assets/proyek2.jpg",
            },
          ]}
          renderModal={(project) => <ProjectModal project={project} />}
        />
      </section>

      {/* Contact Section */}
      <section
        className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-6"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form
          action="https://formsubmit.co/youremail@example.com"
          method="POST"
          className="max-w-lg mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 py-3 rounded font-bold"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10">
          <ChatRoom />
        </div>
      </section>
    </div>
  );
}
