import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import {listTools, listProyek} from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src="./assets/faris1.png" className="w-10 rounded-md" />
            <q>Avoid or just undertake it</q>
          </div>
            <h1 className="text-5xl font-bold mb-6">
            <ShinyText text="Hi I'm Bang Aldy" disabled={false} speed={3} className='custom-class' />     
            </h1>
                <BlurText
                text="Pengembang aplikasi dan web yang berfokus pada desain modern, performa tinggi, dan solusi berbasis teknologi terkini. Berpengalaman membangun aplikasi mobile, website interaktif, serta mengintegrasikan AI dan Machine Learning untuk menciptakan inovasi yang bermanfaat."
                delay={150}
                animateBy="words"
                direction="top"
                className=" mb-6"
              />
              <div className="flex items-center sm:gap-4 gap-2">
                <a href="#"className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                  <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
                </a>
                
                <a href="#project"className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                  <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
                </a>
              </div>

        </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Bang AL"
              title="Web Developer"
              handle="bangaldy"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/faris.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
      </div>
      {/* tentang */}
     <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
          {/* Kolom kiri */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              About Me
            </h2>

            <BlurText
              text="I’m Bang Aldy, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with the latest technologies like Artificial Intelligence, Machine Learning, and cloud-based development, blending creativity with precision to deliver impactful solutions. With over three years of experience and more than 20 completed projects, I’m committed to helping users and businesses grow in the digital era through functional, aesthetic, and scalable digital products."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
            />