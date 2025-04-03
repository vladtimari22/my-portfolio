export default function Navbar() {
    return (
      <nav className="w-full py-4 px-6 flex justify-between items-center bg-slate-800 bg-opacity-50 backdrop-blur-md shadow-md fixed top-0 z-50">
        <div className="text-xl font-bold tracking-wide">Vlad</div>
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
  