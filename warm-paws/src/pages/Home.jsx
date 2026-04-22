import { useEffect, useState } from "react";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>WarmPaws 🐾</h1>

      {services.map((service) => (
        <div key={service.serviceId}>
          <h3>{service.serviceName}</h3>
          <p>{service.price}$</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
