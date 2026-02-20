export default function MyWorkGallery() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-4">My Work</h2>
        <p className="text-lg text-gray-600">A showcase of my recent projects</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-96">
        {/* Large featured item */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-lg mb-4 mx-auto flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Featured Project</h3>
            <p className="text-sm opacity-90">Main showcase item</p>
          </div>
        </div>
        
        {/* Top right item */}
        <div className="md:col-span-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-1">Project Two</h3>
            <p className="text-xs opacity-90">Secondary project</p>
          </div>
        </div>
        
        {/* Bottom right item */}
        <div className="md:col-span-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-1">Project Three</h3>
            <p className="text-xs opacity-90">Another great project</p>
          </div>
        </div>
      </div>
    </section>
  );
}