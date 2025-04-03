export default function Skills() {
    return (
      <section id="skills" className="py-20 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Udemy Full Stack Bootcamp</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">3D Modeling</h3>
              <ul>
                <li>Blender</li>
                <li>Tinkercad</li>
                <li>SolidWorks</li>
                <li>Fusion 360</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Professional Skills</h3>
              <ul>
                <li>Organizational Skills</li>
                <li>Detail Analysis</li>
                <li>Leadership</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  