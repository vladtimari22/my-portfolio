export default function Projects() {
    return (
      <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
  
          {/* Grid container */}
          <div className="grid md:grid-cols-2 gap-10">
  
            {/* Project 1: Website Homepage */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="/projects/project-earnit.png" alt="Earn It Homepage" className="w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Earn It Website</h3>
                <p>Homepage for a website I worked on with colleagues/friends, offering job opportunities for international college students.</p>
              </div>
            </div>
  
            {/* Project 2: AI Poster */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src="/projects/project-poster.png" alt="AI Poster" className="w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">AI vs. Artists Poster</h3>
                <p>Poster design themed “Can AI replace Artists?”, exploring creativity and technology.</p>
              </div>
            </div>
  
            {/* Project 3: 3D Models */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg md:col-span-2">
              <img src="/projects/project-3dmodels.png" alt="3D Models" className="w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">3D Modeling Projects</h3>
                <p>Designing functional and fun objects for myself and others, practicing 3D modeling with Blender, Tinkercad, and Fusion 360.</p>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  