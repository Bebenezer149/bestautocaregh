const Services = () => {
  const services = [
    // Below are objects which will be mapped unto to create the services cards.
    {
      title: 'Oil Change',
      description: 'Regular oil changes are crucial for maintaining your engine performance and longevity.',
      benefits: [
        'Extends engine life',
        'Improves fuel efficiency',
        'Ensures smooth operation',
        'Prevents engine wear'
      ],
      price: 'From ₵299.99',
      duration: '30-45 minutes'
    },
    {
      title: 'Brake Service',
      description: 'Ensure your safety with our comprehensive brake inspection and repair service.',
      benefits: [
        'Brake pad replacement',
        'Rotor inspection',
        'Brake fluid check',
        'System diagnostics'
      ],
      price: 'From ₵799.99',
      duration: '1-2 hours'
    },
    {
      title: 'Tire Rotation',
      description: 'Regular tire rotation helps ensure even wear and extends tire life.',
      benefits: [
        'Even tire wear',
        'Better handling',
        'Improved safety',
        'Extended tire life'
      ],
      price: 'From ₵399.99',
      duration: '30-45 minutes'
    },
    {
      title: 'Engine Diagnostic',
      description: 'Advanced computer diagnostics to identify and resolve engine issues.',
      benefits: [
        'Problem identification',
        'Performance analysis',
        'Error code reading',
        'System optimization'
      ],
      price: 'From ₵899.99',
      duration: '1 hour'
    },
    {
      title: 'Battery Service',
      description: 'Complete battery testing, maintenance, and replacement services.',
      benefits: [
        'Battery testing',
        'Terminal cleaning',
        'Charging system check',
        'Battery replacement'
      ],
      price: 'From ₵499.99',
      duration: '30 minutes'
    },
    {
      title: 'AC Service',
      description: 'Keep your car cool with our comprehensive AC maintenance service.',
      benefits: [
        'Refrigerant check',
        'System inspection',
        'Performance testing',
        'Leak detection'
      ],
      price: 'From ₵999.99',
      duration: '1-2 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Header Section */}
      <div className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        <div className="container mx-auto px-6 relative">
          <h1 className="text-4xl font-bold text-center text-white mb-4">Our Services</h1>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of automotive services to keep your vehicle running at its best.
            All services are performed by certified technicians using state-of-the-art equipment.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-[#FFD700] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Service Includes:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-gray-300">
                        <span className="text-[#FFD700]">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                  <div>
                    <p className="text-gray-400">Starting at</p>
                    <p className="text-xl font-bold text-[#FFD700]">{service.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Duration</p>
                    <p className="text-gray-300">{service.duration}</p>
                  </div>
                </div>
                <button className="w-full mt-6 bg-[#FFD700] text-gray-900 py-2 px-4 rounded-lg hover:bg-[#FFD700]/90 transition-colors font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Service?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Cannot find what you are looking for? Contact us for a custom service package tailored to your needs.
          </p>
          <button className="bg-[#FFD700] text-gray-900 px-8 py-3 rounded-full hover:bg-[#FFD700]/90 transition-colors font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;