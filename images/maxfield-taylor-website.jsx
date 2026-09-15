import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MaxfieldTaylor() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Segoe UI', Trebuchet MS, sans-serif" }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-wider">MAXFIELD TAYLOR</div>
          
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:opacity-60 transition">About</a>
            <a href="#lines" className="hover:opacity-60 transition">Our Lines</a>
            <a href="#portfolio" className="hover:opacity-60 transition">Portfolio</a>
            <a href="#contact" className="hover:opacity-60 transition">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
            <a href="#about" className="text-sm">About</a>
            <a href="#lines" className="text-sm">Our Lines</a>
            <a href="#portfolio" className="text-sm">Portfolio</a>
            <a href="#contact" className="text-sm">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="h-96 md:h-[500px] bg-gradient-to-b from-stone-50 to-stone-100 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M50 0 L100 50 L50 100 L0 50 Z%22 fill=%22none%22 stroke=%22currentColor%22/%3E%3C/svg%3E')",
        }}></div>
        
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-tight">
            Curated Luxury
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-light mb-8 max-w-2xl mx-auto">
            Bespoke furnishings, fine lighting, and artisanal home design for residential and hospitality markets
          </p>
          <a 
            href="#lines" 
            className="inline-block px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300"
          >
            Explore Collections
          </a>
        </div>
      </section>

      {/* About / Provenance */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-light mb-6">The Maxfield Legacy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed font-light">
            Three generations of furniture industry expertise. Beginning with G. Maxfield Taylor, a pioneering figure recognized by the National Wholesale Furniture Association as "Man of the Decade," the Maxfield name represents deep understanding of wholesale design partnerships.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed font-light">
            My father, William Pike, built on that foundation, rising from sales floor to owner. Today, I'm reviving that heritage for a contemporary market—representing carefully selected lines of bespoke furnishings, sculptural lighting, and luxury finishes for both residential designers and hospitality procurement.
          </p>
          <p className="text-gray-700 leading-relaxed font-light">
            This isn't about moving inventory. It's about understanding what designers actually need and connecting them with makers who deliver.
          </p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-stone-100 h-80 rounded-lg flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 text-sm">Heritage imagery</span>
        </div>
      </section>

      {/* Our Lines */}
      <section id="lines" className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">Curated Collections</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto font-light">
            We represent the finest in bespoke and artisanal home furnishings, each line chosen for craftsmanship and distinctive voice.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'furniture', 'lighting', 'rugs', 'art'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm transition ${
                  activeCategory === cat 
                    ? 'border-b-2 border-gray-900 text-gray-900 font-medium'
                    : 'border-b-2 border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Adriana Hoyos */}
            <div className="group">
              <div className="bg-white aspect-square rounded-lg overflow-hidden border border-gray-200 mb-4 flex items-center justify-center h-72">
                <span className="text-gray-400 text-sm">Adriana Hoyos Furniture</span>
              </div>
              <h3 className="font-light text-lg mb-1">Adriana Hoyos</h3>
              <p className="text-gray-600 text-sm font-light">Bespoke Colombian furniture with artisanal craftsmanship and bold design sensibility.</p>
            </div>

            {/* Robert Abbey */}
            <div className="group">
              <div className="bg-white aspect-square rounded-lg overflow-hidden border border-gray-200 mb-4 flex items-center justify-center h-72">
                <span className="text-gray-400 text-sm">Robert Abbey Lighting</span>
              </div>
              <h3 className="font-light text-lg mb-1">Robert Abbey Fine Lighting</h3>
              <p className="text-gray-600 text-sm font-light">Luxury lighting that balances form and function with editorial attention to detail.</p>
            </div>

            {/* SICIS */}
            <div className="group">
              <div className="bg-white aspect-square rounded-lg overflow-hidden border border-gray-200 mb-4 flex items-center justify-center h-72">
                <span className="text-gray-400 text-sm">SICIS Tile & Mosaic</span>
              </div>
              <h3 className="font-light text-lg mb-1">SICIS</h3>
              <p className="text-gray-600 text-sm font-light">Italian luxury mosaics and tile—where craftsmanship meets sculptural vision.</p>
            </div>

            {/* Capel Rugs */}
            <div className="group">
              <div className="bg-white aspect-square rounded-lg overflow-hidden border border-gray-200 mb-4 flex items-center justify-center h-72">
                <span className="text-gray-400 text-sm">Capel Rugs</span>
              </div>
              <h3 className="font-light text-lg mb-1">Capel Rugs</h3>
              <p className="text-gray-600 text-sm font-light">Hand-woven and machine-made rugs with depth, texture, and editorial intention.</p>
            </div>

            {/* James Lostlen */}
            <div className="group">
              <div className="bg-white aspect-square rounded-lg overflow-hidden border border-gray-200 mb-4 flex items-center justify-center h-72">
                <span className="text-gray-400 text-sm">James Lostlen Lighting</span>
              </div>
              <h3 className="font-light text-lg mb-1">James Lostlen</h3>
              <p className="text-gray-600 text-sm font-light">Sculptural stone lighting from Joshua Tree. One-of-a-kind, artisanal, transformative.</p>
            </div>

            {/* Level57 Art Studio */}
            <div className="group">
              <div className="bg-white aspect-square rounded-lg overflow-hidden border border-gray-200 mb-4 flex items-center justify-center h-72">
                <span className="text-gray-400 text-sm">Level57 Art Studio</span>
              </div>
              <h3 className="font-light text-lg mb-1">Level57 Art Studio</h3>
              <p className="text-gray-600 text-sm font-light">To-the-trade fine art for designers. Contemporary and collectible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-light mb-12">How We Work</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-80 rounded-lg border border-blue-200 flex items-center justify-center">
            <span className="text-blue-400 text-sm">Design Trade Partnerships</span>
          </div>
          <div>
            <h3 className="text-xl font-light mb-4">Trade & Design Community</h3>
            <p className="text-gray-700 leading-relaxed font-light mb-4">
              We work directly with interior designers, architects, and design firms. Access to our lines, trade pricing, and direct partnerships with makers.
            </p>
            <p className="text-gray-600 text-sm font-light">
              From residential projects to hospitality procurement, we're your curated resource for distinctive furnishings and finishes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-xl font-light mb-4">Hospitality & Commercial</h3>
            <p className="text-gray-700 leading-relaxed font-light mb-4">
              Our lines work across restaurants, hotels, and hospitality spaces. We understand the need for durability, distinctive design, and procurement at scale.
            </p>
            <p className="text-gray-600 text-sm font-light">
              Established relationships with designers and hospitality procurement teams across Texas, Oklahoma, Louisiana, and Arkansas.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 h-80 rounded-lg border border-green-200 flex items-center justify-center">
            <span className="text-green-400 text-sm">Hospitality Projects</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-stone-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Let's Work Together</h2>
          <p className="text-lg text-stone-200 mb-8 font-light max-w-2xl mx-auto">
            Whether you're a designer sourcing distinctive furnishings or a hospitality buyer looking for curated solutions, we're here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
            <div>
              <p className="text-stone-400 text-sm mb-2">Email</p>
              <a href="mailto:jason@jasonpikesales.com" className="text-white font-light hover:text-stone-300 transition">
                jason@jasonpikesales.com
              </a>
            </div>
            <div>
              <p className="text-stone-400 text-sm mb-2">Phone</p>
              <a href="tel:832-264-1053" className="text-white font-light hover:text-stone-300 transition">
                832-264-1053
              </a>
            </div>
          </div>

          <a 
            href="mailto:jason@jasonpikesales.com"
            className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-stone-950 transition duration-300"
          >
            Get in Touch
          </a>

          <p className="text-stone-500 text-xs mt-12">
            Based in Austin, Texas • Serving TX, OK, LA, AR
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-xs font-light">
          <p>Maxfield Taylor | Curated Luxury for Residential & Hospitality Markets</p>
        </div>
      </footer>
    </div>
  );
}
