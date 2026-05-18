import React from 'react';

export default function FikameniPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-black">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Fikameni Haindongo
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
          Mechanical Engineering Student • Future Petroleum Engineer • Entrepreneur
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a
            href="#about"
            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            About Me
          </a>
          <a
            href="#business"
            className="px-6 py-3 rounded-2xl border border-gray-700 bg-gray-900/50 hover:bg-white hover:text-black transition-all duration-200"
          >
            My Venture
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-white hover:bg-white hover:text-black transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-20 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-wide border-b border-gray-800 pb-2">About Me</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              I'm Fikameni, a passionate Mechanical Engineering student at the **University of Namibia (UNAM)**. 
              My academic journey is driven by a deep fascination with energy systems, innovation, and 
              the technical complexities of fluid mechanics and thermodynamics—steering me toward a future 
              career in **Petroleum Engineering**.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg mt-6">
              Beyond the data and equations, I thrive on entrepreneurship. I believe engineering and business 
              are two sides of the same coin: both require solving complex problems to build something impactful from scratch.
            </p>
          </div>

          {/* Quick Facts (Fixed and Completed) */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Quick Facts</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-500 font-medium">University</span>
                <span className="font-semibold text-white">UNAM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-500 font-medium">Field of Study</span>
                <span className="font-semibold text-white">Mechanical Engineering</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-500 font-medium">Focus Area</span>
                <span className="font-semibold text-white">Petroleum Engineering</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-500 font-medium">Location</span>
                <span className="font-semibold text-white">Namibia</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-gray-500 font-medium">Enterprise</span>
                <span className="font-semibold text-amber-400">Mweshipange's Fragrance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Spotlight Section */}
      <section id="business" className="bg-gradient-to-b from-black via-gray-950 to-black px-6 md:px-20 py-24 border-t border-b border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold bg-amber-950/40 px-3 py-1 rounded-full border border-amber-900/60">
            Entrepreneurship
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6">Mweshipange's Fragrance</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Where creativity, premium branding, and olfactory science meet. I founded Mweshipange's Fragrance 
            to curate high-quality, memorable experiences through scent, testing my limits in supply chain logistics, 
            marketing, and retail business management.
          </p>
          <div className="mt-8">
            <span className="inline-block px-5 py-2 text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full">
              ✨ Stay tuned for upcoming collections
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-20 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Whether you want to talk engineering design, fluid dynamics, fragrance notes, or potential business partnerships, drop me a message!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:your.email@example.com" 
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition font-medium text-white"
          >
            📧 Send an Email
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition font-medium text-white"
          >
            💼 Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Fikameni Haindongo. All rights reserved.</p>
      </footer>
    </div>
  );
}