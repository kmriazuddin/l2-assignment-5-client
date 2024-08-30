import { FaClock, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { MdOutlineSecurity } from "react-icons/md";

const ServiceAdvertisement = () => {
  const services = [
    {
      title: "Commitment to Security",
      description:
        "We don't compromise on server security, get from highly skilled Engineers to maintain our server.",
      icon: <FaClock className="text-blue-500" />,
    },
    {
      title: "Instant Booking",
      description:
        "We give you guarantee about our service so you don't have to worry after buying us any service.",
      icon: <FaCheckCircle className="text-green-500" />,
    },
    {
      title: "Reliablity",
      description:
        "Success depends on strong honest relationships that involve having a strong bond with our customers.",
      icon: <MdOutlineSecurity className="text-purple-500" />,
    },
    {
      title: "24/7 Support",
      description:
        "Our Special Support Engineer does their best to give as much support as possible for us customers.",
      icon: <FaPhoneAlt className="text-orange-500" />,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="md:px-4 w-full p-4 md:mt-12 rounded-md">
      <div className="container mx-auto text-center">
        <SectionTitle
          subHeading="99.99% Uptime Guarantee"
          heading="Why Choose MRB?"
          sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
        />
        <div className="grid grid-cols-1  mt-16  sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">
                <div className="text-4xl mb-4">{service.icon}</div>
              </div>
              <h3 className="text-xl text-slate-500 font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvertisement;
