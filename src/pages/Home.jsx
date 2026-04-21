import services from "../data/services.json";

const Home = () => {
  return (
    <div>
      <h1>Winter Pet Care</h1>

      {services.map((service) => (
        <div key={service.serviceId}>
          <img src={service.image} width="200" />
          <h3>{service.serviceName}</h3>
          <p>{service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;