export default function Hero() {
    return (
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Hello, my name is Vlad👋</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-6">
          I'm a Creative Technology Student at the University of Twente, passionate about web development and innovation.
        </p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          View Projects
        </a>
      </section>
    );
  }
  