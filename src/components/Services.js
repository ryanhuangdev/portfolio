import React from "react";
import Title from "./Title";
import services from "../constants/services";
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Skills" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, skills } = service;

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline" />
              <div>
                <ul className="service-skills">
                  {skills.map((item) => {
                    return <li className='service-skills-item' key={item}>{item}</li>;
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
