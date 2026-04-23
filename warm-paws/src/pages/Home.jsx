import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
        
        {/* 1. High-End Hero Section */}
        <section className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <Swiper 
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0} 
            slidesPerView={1} 
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation={true}
            className="h-[450px]"
          >
            <SwiperSlide>
              <div className="h-full bg-slate-900 flex flex-col justify-center items-center text-center p-10 text-white relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Elite Winter Protection ❄️</h2>
                <p className="text-lg text-slate-300 max-w-2xl font-light">Professional-grade winter essentials designed for the modern pet owner.</p>
                <button className="btn btn-primary bg-blue-600 border-none px-8 mt-8 rounded-full hover:bg-blue-700">View Catalog</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-full bg-blue-900 flex flex-col justify-center items-center text-center p-10 text-white">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Clinical Grooming 🐾</h2>
                <p className="text-lg text-blue-100 max-w-2xl font-light">Advanced paw protection and dermatological care for freezing temperatures.</p>
                <button className="btn btn-white bg-white text-blue-900 border-none px-8 mt-8 rounded-full hover:bg-slate-100">Book Appointment</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* 2. Services Grid - Medical/Pro Look */}
        <section>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-800 tracking-tight">Our Professional Services</h2>
            <div className="w-12 h-1 bg-blue-600 mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.serviceId} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <img
                    src={service.image}
                    className="h-52 w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                    alt={service.serviceName}
                  />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="badge badge-neutral bg-slate-800/80 backdrop-blur-sm border-none text-xs py-3">⭐ {service.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{service.category || "Professional Care"}</span>
                  <h3 className="text-lg font-semibold text-slate-800 mt-1 mb-4">{service.serviceName}</h3>
                  
                  <div className="flex justify-between items-end border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Standard Rate</p>
                      <p className="text-xl font-bold text-slate-900">${service.price}</p>
                    </div>
                    <Link to={`/service/${service.serviceId}`}>
                      <button className="btn btn-sm btn-outline border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 rounded-md">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Trust & Safety Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 p-12 rounded-2xl shadow-sm">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Why WarmPaws?
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              We leverage veterinary expertise and premium materials to ensure the highest standard of animal welfare. Every service is audited for safety and comfort.
            </p>
            <div className="flex gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-lg flex-1">
                <p className="text-2xl font-bold text-blue-600">10k+</p>
                <p className="text-xs text-slate-500 uppercase font-bold">Pets Served</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg flex-1">
                <p className="text-2xl font-bold text-blue-600">100%</p>
                <p className="text-xs text-slate-500 uppercase font-bold">Certified</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-white">
            <h3 className="text-xl font-semibold mb-6">Expert Winter Protocols</h3>
            <ul className="space-y-4">
              {['Thermal Regulation', 'Dermatological Barrier Care', 'Orthopedic Bedding', 'Nutritional Immunity'].map((tip) => (
                <li key={tip} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white">✓</div>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Expert Vets Section */}
        <section className="pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Medical Board</h2>
            <p className="text-slate-500 font-light mt-2 italic">Senior practitioners and specialists</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Ahmed", role: "Pet Nutrition Specialist" },
              { name: "Dr. John Lee", role: "Senior Veterinary Surgeon" },
              { name: "Dr. Emily Khan", role: "Dermatology Expert" }
            ].map((vet) => (
              <div key={vet.name} className="bg-white p-8 rounded-xl text-center border border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
                <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center border border-slate-200">
                  <span className="text-2xl">🩺</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">{vet.name}</h4>
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mt-1">{vet.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;