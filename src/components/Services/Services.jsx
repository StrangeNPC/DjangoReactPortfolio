import "./Services.css";
import { useGetServicesQuery } from "../../Api/api";
import { useEffect, useState } from "react";

const Services = () => {
  const { data: services, isFetching } = useGetServicesQuery();
  const [servicesDetails, setServicesDetails] = useState(services);
  const img_300 = "";

  useEffect(() => {
    setServicesDetails(services);
    console.log(servicesDetails);
  }, [servicesDetails, services]);
  if (isFetching) return "loading";

  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>What Service we Offer you!</h2>

            <h3>Services</h3>
          </div>

          <div className="service-row">
            {services &&
              services.map((service) => (
                <div
                  className=" my-service"
                  key={service.id}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <div className="ser-back">
                    <img src={`${img_300}${service.icon_image}`} alt="" />
                  </div>
                  <h4 className="web">{service.service_name}</h4>
                  <p className="service-info">{service.service_description}</p>
                  {/* <h6 className="learn-more">{service.learn_more}</h6> */}
                  <div class="shadow-icon">
                    <i class={service.shadow_icon}></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
