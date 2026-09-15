import React, { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

export default function MaxfieldTaylor() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Natural tone color palette
  const colors = {
    cream: '#FBF9F5',
    taupe: '#A89080',
    stone: '#8B8680',
    darkBrown: '#6B5D54',
    warmGray: '#D4CCBD',
  };

  const productLines = {
    adrianaHoyos: {
      name: 'Adriana Hoyos',
      tagline: 'Bespoke Colombian Furniture',
      hero: 'Artisanal craftsmanship meets bold design sensibility',
      description: 'Adriana Hoyos creates bespoke furniture pieces that balance contemporary design with traditional Colombian craftsmanship. Each piece is customizable, thoughtfully detailed, and built to last.',
      highlights: [
        'Custom upholstery and cabinetry',
        'Hand-finished wood frames',
        'Limited production runs',
        'Direct designer partnerships',
      ],
      inquiry: 'Perfect for: High-end residential projects, hospitality lobbies, luxury residential interiors',
      image: '6.png',
    },
    robertAbbey: {
      name: 'Robert Abbey Fine Lighting',
      tagline: 'Editorial Luxury Lighting',
      hero: 'Where form and function converge with intention',
      description: 'Robert Abbey represents refined luxury lighting for designers who refuse compromise. Every fixture balances aesthetic impact with functional excellence.',
      highlights: [
        'Handcrafted ceramic and metal bases',
        'Custom colorways available',
        'Hospitality-grade durability',
        'Trade-focused support',
      ],
      inquiry: 'Perfect for: Designer lighting schemes, hospitality lobbies, high-end residential',
      images: ['67.png', 'PikeLamp.png'],
    },
    sicis: {
      name: 'SICIS',
      tagline: 'Italian Luxury Mosaics & Tile',
      hero: 'Craftsmanship sculpted into every surface',
      description: 'SICIS brings centuries of Italian artistry to luxury mosaics and decorative tile. From bespoke installations to curated collections, SICIS represents the highest caliber of mosaic craft.',
      highlights: [
        'Hand-cut mosaic tiles',
        'Custom color matching',
        'Architectural installations',
        'Luxury interior finishing',
      ],
      inquiry: 'Perfect for: Spa environments, kitchen features, luxury backsplashes, hotel installations',
      images: ['sicis_page-030.jpg', 'sicis_page-032.jpg'],
    },
    capelRugs: {
      name: 'Capel Rugs',
      tagline: 'Handwoven & Designed Rugs',
      hero: 'Foundation pieces with depth and intention',
      description: 'Capel Rugs combines hand-woven traditions with contemporary design. Each rug grounds a space with texture, color, and editorial sophistication.',
      highlights: [
        'Hand-woven and machine-made options',
        'Custom sizing and colorways',
        'Durable hospitality-grade construction',
        'Designer collaboration programs',
      ],
      inquiry: 'Perfect for: Layered residential spaces, hospitality lobbies, commercial design',
      images: ['1040-250-R-S-1_jpg.webp'],
    },
    jamesLostlen: {
      name: 'James Lostlen',
      tagline: 'Sculptural Stone Lighting',
      hero: 'Light meets stone in one-of-a-kind forms',
      description: 'James Lostlen creates sculptural lighting pieces from stone sourced in Joshua Tree, California. Each lamp is carved individually, making every piece unique and unrepeatable.',
      highlights: [
        'Pinto Gneiss stone from Joshua Tree',
        'One-of-a-kind pieces',
        'Bespoke commissions available',
        'Architectural lighting solutions',
      ],
      inquiry: 'Perfect for: Statement lighting, sculptural interiors, luxury residential, high-end hospitality',
      images: ['Lunar_Lamp_-_046_-_Series_1-1_jpg.webp', 'Lunar_Lamp_-_049_-_Series_1-1_jpg.webp'],
    },
    level57: {
      name: 'Level57 Art Studio',
      tagline: 'To-the-Trade Fine Art',
      hero: 'Contemporary art for designers and collectors',
      description: 'Level57 Art Studio represents carefully curated contemporary fine art available exclusively to the design trade. Original and limited-edition pieces.',
      highlights: [
        'Original artwork and limited editions',
        'To-the-trade pricing',
        'Commission opportunities',
        'Design-forward curation',
      ],
      inquiry: 'Perfect for: Art collection walls, gallery installations, designer artist collaborations',
      images: ['C3-CDA-FB-X0101.jpg', 'EO-COL-CM-R0101.jpg', 'CK-FIL-CA-R0101.jpg'],
    },
    oliverHome: {
      name: 'Oliver Home',
      tagline: 'Casegoods & Occasional Furniture',
      hero: 'Quality construction meets contemporary design',
      description: 'Oliver Home specializes in case goods and occasional furniture pieces designed for the modern interior. Clean lines, superior construction, and designer-friendly collaboration.',
      highlights: [
        'Custom finishes and configurations',
        'Wood and mixed media',
        'Trade showroom access',
        'Design consulting',
      ],
      inquiry: 'Perfect for: Residential collections, hospitality back-of-house, commercial installations',
      images: ['RM10-101TX3_3.jpg', 'Vertex_Table.png', 'woodstock-1819-45-hero.jpg'],
    },
    coastByDK: {
      name: 'Coast by DK',
      tagline: 'Residential & Hospitality Furnishings',
      hero: 'Coastal design with international appeal',
      description: 'Coast by DK brings relaxed sophistication to both residential and hospitality markets. Curated collections that balance comfort with design intention.',
      highlights: [
        'Bespoke upholstery programs',
        'Hospitality expertise',
        'Sustainable material options',
        'Custom fabrication',
      ],
      inquiry: 'Perfect for: Resort design, coastal residential, lifestyle hospitality brands',
      images: ['danville-1948-70-feature.jpg'],
    },
  };

  const Navigation = ({ onPageChange }) => (
    <nav className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: colors.warmGray }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <button
          onClick={() => {
            onPageChange('home');
            setMobileMenuOpen(false);
          }}
          className="text-2xl font-light tracking-wider hover:opacity-60 transition"
          style={{ color: colors.darkBrown }}
        >
          MAXFIELD TAYLOR
        </button>

        <div className="hidden md:flex gap-8 text-sm">
          {['home', 'about', 'collections', 'contact'].map(item => (
            <button
              key={item}
              onClick={() => onPageChange(item)}
              className="hover:opacity-60 transition capitalize"
              style={{ color: colors.stone }}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: colors.darkBrown }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden px-4 py-4 flex flex-col gap-4 border-t"
          style={{ borderColor: colors.warmGray }}
        >
          {['home', 'about', 'collections', 'contact'].map(item => (
            <button
              key={item}
              onClick={() => {
                onPageChange(item);
                setMobileMenuOpen(false);
              }}
              className="text-sm capitalize text-left"
              style={{ color: colors.stone }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <>
      {/* Hero */}
      <section
        className="h-96 md:h-[500px] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundColor: colors.taupe }}></div>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-tight" style={{ color: colors.darkBrown }}>
            Curated Luxury
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light" style={{ color: colors.stone }}>
            Bespoke furnishings, fine lighting, and artisanal home design for residential and hospitality markets
          </p>
          <button
            onClick={() => setCurrentPage('collections')}
            className="inline-block px-8 py-3 border transition duration-300 font-light"
            style={{
              borderColor: colors.darkBrown,
              color: colors.darkBrown,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.darkBrown;
              e.target.style.color = colors.cream;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = colors.darkBrown;
            }}
          >
            Explore Collections
          </button>
        </div>
      </section>

      {/* About / Provenance */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: colors.darkBrown }}>
            The Maxfield Legacy
          </h2>
          <p className="mb-4 leading-relaxed font-light" style={{ color: colors.stone }}>
            Three generations of furniture industry expertise. Beginning with G. Maxfield Taylor, a pioneering figure recognized by the National Wholesale Furniture Association as "Man of the Decade," the Maxfield name represents deep understanding of wholesale design partnerships.
          </p>
          <p className="mb-4 leading-relaxed font-light" style={{ color: colors.stone }}>
            My father, William Pike, built on that foundation, rising from sales floor to partner to owner. Today, I'm reviving that heritage for a contemporary market—representing carefully selected lines of bespoke furnishings, sculptural lighting, and luxury finishes for both residential designers and hospitality procurement.
          </p>
          <p className="leading-relaxed font-light" style={{ color: colors.stone }}>
            This isn't about moving inventory. It's about understanding what designers actually need and connecting them with makers who deliver.
          </p>
        </div>
        <div
          className="h-80 rounded-lg flex items-center justify-center border"
          style={{
            backgroundColor: colors.warmGray,
            borderColor: colors.taupe,
            color: colors.stone,
          }}
        >
          <span className="text-sm">Heritage imagery</span>
        </div>
      </section>

      {/* Collections Preview */}
      <section
        className="py-20"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center" style={{ color: colors.darkBrown }}>
            Curated Collections
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto font-light" style={{ color: colors.stone }}>
            We represent the finest in bespoke and artisanal home furnishings, each line chosen for craftsmanship and distinctive voice.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(productLines).map(([key, line]) => (
              <button
                key={key}
                onClick={() => setCurrentPage(`line-${key}`)}
                className="text-left group transition hover:opacity-80"
              >
                <div
                  className="aspect-square rounded-lg overflow-hidden mb-4 border flex items-center justify-center bg-white"
                  style={{ borderColor: colors.warmGray }}
                >
                  <span className="text-gray-400 text-xs">Image</span>
                </div>
                <h3 className="font-light text-lg mb-1" style={{ color: colors.darkBrown }}>
                  {line.name}
                </h3>
                <p className="text-xs font-light" style={{ color: colors.taupe }}>
                  {line.tagline}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section
        className="py-20"
        style={{ backgroundColor: colors.darkBrown }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: colors.cream }}>
            Let's Work Together
          </h2>
          <p className="text-lg mb-8 font-light max-w-2xl mx-auto" style={{ color: colors.warmGray }}>
            Whether you're a designer sourcing distinctive furnishings or a hospitality buyer looking for curated solutions, we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
            <div>
              <p className="text-xs mb-2" style={{ color: colors.taupe }}>Email</p>
              <a
                href="mailto:jason@jasonpikesales.com"
                className="font-light hover:opacity-60 transition"
                style={{ color: colors.cream }}
              >
                jason@jasonpikesales.com
              </a>
            </div>
            <div>
              <p className="text-xs mb-2" style={{ color: colors.taupe }}>Phone</p>
              <a
                href="tel:832-264-1053"
                className="font-light hover:opacity-60 transition"
                style={{ color: colors.cream }}
              >
                832-264-1053
              </a>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-block px-8 py-3 border transition duration-300 font-light"
            style={{
              borderColor: colors.cream,
              color: colors.cream,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.cream;
              e.target.style.color = colors.darkBrown;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = colors.cream;
            }}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );

  const ProductLinePage = ({ lineKey }) => {
    const line = productLines[lineKey];
    if (!line) return <div>Product line not found</div>;

    return (
      <div>
        {/* Hero */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: colors.cream }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setCurrentPage('collections')}
              className="flex items-center gap-2 text-sm mb-8 font-light hover:opacity-60 transition"
              style={{ color: colors.stone }}
            >
              <ArrowLeft size={16} />
              Back to Collections
            </button>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-light mb-4" style={{ color: colors.darkBrown }}>
                  {line.name}
                </h1>
                <p className="text-xl font-light mb-8" style={{ color: colors.taupe }}>
                  {line.tagline}
                </p>
                <p className="text-lg font-light mb-8 leading-relaxed" style={{ color: colors.stone }}>
                  {line.hero}
                </p>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-3 border transition duration-300 font-light"
                  style={{
                    borderColor: colors.darkBrown,
                    color: colors.darkBrown,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.darkBrown;
                    e.target.style.color = colors.cream;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = colors.darkBrown;
                  }}
                >
                  Inquire About This Line
                </button>
              </div>

              <div
                className="aspect-square rounded-lg overflow-hidden border"
                style={{
                  borderColor: colors.warmGray,
                  backgroundColor: colors.warmGray,
                }}
              >
                <span className="flex items-center justify-center h-full" style={{ color: colors.stone }}>
                  Featured Image
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-light mb-6" style={{ color: colors.darkBrown }}>
                About This Collection
              </h2>
              <p className="text-lg font-light leading-relaxed mb-8" style={{ color: colors.stone }}>
                {line.description}
              </p>

              <h3 className="text-xl font-light mb-4" style={{ color: colors.darkBrown }}>
                Why Designers Choose This Line
              </h3>
              <ul className="space-y-3">
                {line.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-4 font-light" style={{ color: colors.stone }}>
                    <span style={{ color: colors.taupe }}>•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: colors.cream, borderLeft: `4px solid ${colors.taupe}` }}
            >
              <h4 className="font-light mb-4" style={{ color: colors.darkBrown }}>
                For Your Projects
              </h4>
              <p className="text-sm font-light" style={{ color: colors.stone }}>
                {line.inquiry}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section
          className="py-16"
          style={{ backgroundColor: colors.cream }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-light mb-12 text-center" style={{ color: colors.darkBrown }}>
              Collection Showcase
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(idx => (
                <div
                  key={idx}
                  className="aspect-square rounded-lg overflow-hidden border flex items-center justify-center bg-white"
                  style={{ borderColor: colors.warmGray }}
                >
                  <span className="text-gray-400 text-sm">Product Image {idx}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-light mb-6" style={{ color: colors.darkBrown }}>
            Ready to Explore {line.name}?
          </h2>
          <p className="text-lg font-light mb-8" style={{ color: colors.stone }}>
            Contact us for trade pricing, samples, and designer partnerships.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-3 border transition duration-300 font-light"
            style={{
              borderColor: colors.darkBrown,
              color: colors.darkBrown,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.darkBrown;
              e.target.style.color = colors.cream;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = colors.darkBrown;
            }}
          >
            Get in Touch
          </button>
        </section>
      </div>
    );
  };

  const ContactPage = () => (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <button
        onClick={() => setCurrentPage('home')}
        className="flex items-center gap-2 text-sm mb-12 font-light hover:opacity-60 transition"
        style={{ color: colors.stone }}
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <h1 className="text-4xl md:text-5xl font-light mb-8" style={{ color: colors.darkBrown }}>
        Get in Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-light mb-6" style={{ color: colors.darkBrown }}>
            Let's Talk
          </h2>
          <p className="text-lg font-light mb-8 leading-relaxed" style={{ color: colors.stone }}>
            Whether you're a designer looking to source distinctive furnishings, a hospitality buyer exploring curated solutions, or a brand interested in partnerships—we're here to help.
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-light mb-2" style={{ color: colors.taupe }}>Email</p>
              <a
                href="mailto:jason@jasonpikesales.com"
                className="text-lg font-light hover:opacity-60 transition"
                style={{ color: colors.darkBrown }}
              >
                jason@jasonpikesales.com
              </a>
            </div>
            <div>
              <p className="text-xs font-light mb-2" style={{ color: colors.taupe }}>Phone</p>
              <a
                href="tel:832-264-1053"
                className="text-lg font-light hover:opacity-60 transition"
                style={{ color: colors.darkBrown }}
              >
                832-264-1053
              </a>
            </div>
            <div>
              <p className="text-xs font-light mb-2" style={{ color: colors.taupe }}>Based In</p>
              <p className="text-lg font-light" style={{ color: colors.darkBrown }}>
                Austin, Texas
              </p>
              <p className="text-sm font-light" style={{ color: colors.stone }}>
                Serving TX, OK, LA, AR
              </p>
            </div>
          </div>
        </div>

        <div
          className="p-12 rounded-lg"
          style={{ backgroundColor: colors.cream, border: `1px solid ${colors.warmGray}` }}
        >
          <h3 className="text-xl font-light mb-6" style={{ color: colors.darkBrown }}>
            Quick Message
          </h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded bg-white font-light"
                style={{ borderColor: colors.warmGray }}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded bg-white font-light"
                style={{ borderColor: colors.warmGray }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company / Project"
                className="w-full px-4 py-3 border rounded bg-white font-light"
                style={{ borderColor: colors.warmGray }}
              />
            </div>
            <div>
              <textarea
                placeholder="Tell us about your project..."
                rows="4"
                className="w-full px-4 py-3 border rounded bg-white font-light"
                style={{ borderColor: colors.warmGray }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 border transition duration-300 font-light"
              style={{
                borderColor: colors.darkBrown,
                color: colors.darkBrown,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.darkBrown;
                e.target.style.color = colors.cream;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = colors.darkBrown;
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    if (currentPage === 'home') return <HomePage />;
    if (currentPage === 'contact') return <ContactPage />;
    if (currentPage.startsWith('line-')) {
      const lineKey = currentPage.replace('line-', '');
      return <ProductLinePage lineKey={lineKey} />;
    }
    return <HomePage />;
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.cream, color: colors.darkBrown }}
    >
      <Navigation onPageChange={setCurrentPage} />
      {renderPage()}

      {/* Footer */}
      <footer
        className="border-t py-8 text-center text-xs font-light mt-20"
        style={{ borderColor: colors.warmGray, color: colors.taupe }}
      >
        <p>Maxfield Taylor | Curated Luxury for Residential & Hospitality Markets</p>
      </footer>
    </div>
  );
}
