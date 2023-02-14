import React from "react";
import services from "../data/services";
import ServiceItem from "./ServiceItem";
import Title from "./Title";

function Service() {
  return (
    <div id="services">
      <Title>My Services</Title>
      <div className="flex flex-col md:flex-row items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {services.map((service) => (
            <ServiceItem
              imgUrl={service.imgUrl}
              title={service.title}
              stack={service.stack}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
