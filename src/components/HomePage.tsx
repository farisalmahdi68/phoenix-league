import { ChevronDown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Background Section */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/background.png')",
          }}
        />
      </section>

      {/* Logo Section - Overlapping */}
      <div className="relative -mt-48 z-20 flex flex-col items-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Phoenix League Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Tagline */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 text-center">
          Phoenix League
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 text-center max-w-2xl">
          Where playground legends rise from the ashes
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More
          </button>
          <button 
            onClick={() => onNavigate('signup')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join Us
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-cyan-500 hover:text-cyan-600 transition-colors mb-12"
        >
          <ChevronDown size={40} />
        </button>
      </div>

      {/* About Section */}
      <section 
        id="about"
        className="relative py-20 px-4 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            About <span className="text-cyan-500">Phoenix League</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl shadow-lg">
              <div className="text-cyan-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Community First</h3>
              <p className="text-slate-600 leading-relaxed">
                Join a vibrant community of players who share your passion for playground games. Connect, compete, and create lasting friendships.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-lg">
              <div className="text-cyan-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Competitive Play</h3>
              <p className="text-slate-600 leading-relaxed">
                Participate in organized leagues and tournaments. Track your stats, climb the rankings, and prove you're the ultimate playground champion.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-8 rounded-xl shadow-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Phoenix League is dedicated to bringing the joy and excitement of playground games to a wider audience. 
              We believe in the power of play to build communities, foster friendships, and create unforgettable memories. 
              Whether you're a seasoned veteran or just starting out, there's a place for you in our league.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">
            Connect With Us
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-blue-600 text-slate-700 hover:text-white rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <Facebook className="w-6 h-6" />
              <span className="font-semibold">Facebook</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-sky-500 text-slate-700 hover:text-white rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <Twitter className="w-6 h-6" />
              <span className="font-semibold">Twitter</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-pink-600 text-slate-700 hover:text-white rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-semibold">Instagram</span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-red-600 text-slate-700 hover:text-white rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              <Youtube className="w-6 h-6" />
              <span className="font-semibold">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 text-slate-300 text-center">
        <p className="mb-2">© 2024 Phoenix League. All rights reserved.</p>
        <p className="text-sm">Rising together, one game at a time.</p>
      </footer>
    </div>
  );
}