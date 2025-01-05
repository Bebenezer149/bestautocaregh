import tyreImage from "../assets/tyre.png";
import maintainImage from "../assets/maintain.jpg";
import classifyImage from "../assets/classify.jpg";
import serviceImage from "../assets/service.jpg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar - Dark theme */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md shadow-lg z-50 border-b border-[#FFD700]/20">
        <div className="container px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white p-2">
            <h1>AutoCare</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[#FFD700] transition-colors">
              Home
            </Link>
            <Link to="/Services" className="text-gray-300 hover:text-[#FFD700] transition-colors">
              Services
            </Link>
            <Link to="/Contact" className="text-gray-300 hover:text-[#FFD700] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark theme with background image */}
      <main className="flex-1 pt-16">
        <div 
          className="relative min-h-screen flex items-center"
          style={{
            backgroundImage: `url(${maintainImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/80"></div>
          {/* These are just tailwindcss classes to make redundant css less */}
          <div className="container mx-auto px-6 py-16 relative">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Best
                <span className="text-[#FFD700]"> Auto Care</span>
                <br />
                Services
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                Experience top-notch automotive care with Ghana&apos;s most trusted mechanics. 
                From Accra to Kumasi, we keep your vehicles running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
               <Link to="/Contact">
               <button className="bg-[#FFD700] text-gray-900 px-8 py-3 rounded-full hover:bg-[#FFD700]/90 transition-colors font-semibold">
                  Book Service
                </button>
               </Link>
                <Link to="/Services">
                <button className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-full hover:bg-[#FFD700]/10 transition-colors">
                  Learn More
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Showcase - Dark theme */}
        <div className="bg-gray-800">
          <div className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#FFD700]">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Maintenance",
                  desc: "Regular maintenance by certified technicians",
                  image: maintainImage
                },
                //objects for each service
                {
                  title: "Vehicle Classification",
                  desc: "Expert diagnosis for all vehicle types",
                  image: classifyImage
                },
                {
                  title: "Premium Service",
                  desc: "Top-quality service with attention to detail",
                  image: serviceImage
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl h-[400px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent group-hover:via-gray-900/70 transition-all duration-300">
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section - Dark theme with background */}
        <div 
          className="relative py-24"
          style={{
            backgroundImage: `url(${tyreImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gray-900/90"></div>
          <div className="container mx-auto px-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tire Services",
                  desc: "Professional tire maintenance and replacement"
                },
                {
                  title: "Regular Maintenance",
                  desc: "Scheduled maintenance to keep your vehicle running smoothly"
                },
                {
                  title: "Expert Service",
                  desc: "Skilled technicians for all your automotive needs"
                }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-[#FFD700] transition-colors"
                >
                  <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer - Dark theme */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#FFD700]">AutoCare</h3>
                <p className="text-gray-400">At your home or place of work.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Services"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Oil Filter Change
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Spark Plug Change
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Free Tire Pressure Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Free Car Wash
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Auto Street</li>
                  <li>Accra, Ghana</li>
                  <li>Phone: +233205775701</li>
                  <li>Email: bestautocaregh@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} AutoCare. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Landing;
