import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    phone: "",
    service_type: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user_name, phone, service_type, date, time } = formData;

    if (!user_name.trim() || !phone.trim() || !service_type.trim() || !date.trim() || !time.trim()) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Form submitted:", formData);

    const postData =()=>{
      const url='http://localhost:3000/api/addBookings';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Booking successful');
        setFormData({
          user_name: "",
          phone: "",
          service_type: "",
          date: "",
          time: "",
        });
      })
      .catch(error => {
        console.error(error);
      });
    }

    postData();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-1">
        <div className="relative py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Book a <span className="text-[#FFD700]">Service</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-xl">
              Schedule your vehicle maintenance with Best Auto Care&apos;s most trusted mechanics
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#FFD700] text-white placeholder-gray-400"
                      placeholder="Your Full Name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#FFD700] text-white placeholder-gray-400"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-300 mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service_type"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#FFD700] text-white placeholder-gray-400"
                    value={formData.service_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>
                    <option value="oil-change">Oil Change</option>
                    <option value="brake-service">Brake Service</option>
                    <option value="tire-rotation">Tire Rotation</option>
                    <option value="engine-diagnostic">Engine Diagnostic</option>
                    <option value="general-maintenance">
                      General Maintenance
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#FFD700] text-white placeholder-gray-400"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-gray-300 mb-2">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#FFD700] text-white placeholder-gray-400"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFD700] text-gray-900 py-2 px-4 rounded-lg hover:bg-[#FFD700]/90 transition-colors font-semibold"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
