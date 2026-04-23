import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item) => item.serviceId === parseInt(id)
        );
        setService(found);
      });
  }, [id]);

  if (!service) return <p>Loading...</p>;

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Service Booked Successfully!");
    e.target.reset();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{service.serviceName}</h2>

      <img
        src={service.image}
        alt=""
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p>💰 ${service.price}</p>
      <p>⭐ {service.rating}</p>
      <p>{service.description}</p>

      <h3>Book This Service</h3>

      <form onSubmit={handleBooking}>
        <input placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ServiceDetails;