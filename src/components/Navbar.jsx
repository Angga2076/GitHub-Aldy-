export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portofolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-teal-400">Home</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
