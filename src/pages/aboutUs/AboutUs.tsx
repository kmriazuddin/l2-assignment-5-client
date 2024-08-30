import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/ui/SectionTitle";
import AOS from "aos";
import { useEffect } from "react";

const teamMembers = [
  {
    name: "Tanjim Saiara Tottini",
    title: "CEO & Founder",
    description:
      "John has over 20 years of experience in the industry and is the visionary behind our company. He is passionate about driving innovation and excellence.",
    imageUrl: "https://i.ibb.co/jwjXQqH/totini.jpg",
  },
  {
    name: "Tasnia Farin",
    title: "Chief Operations Officer",
    description:
      "Jane oversees our operations with a focus on efficiency and client satisfaction. Her leadership ensures that our projects are delivered on time and to the highest standards.",
    imageUrl: "https://i.ibb.co/6PZJkW3/tasnia-farin.jpg",
  },
  {
    name: "Tanjim Saiara Tottini",
    title: "Chief Technology Officer",
    description:
      "Mike leads our technology team with a focus on innovation and quality. His expertise in software development drives our technical excellence.",
    imageUrl: "https://i.ibb.co/jwjXQqH/totini.jpg",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16">
      {/* Our Mission Section */}
      <div className="container mx-auto px-6 mb-16">
        <SectionTitle
          subHeading="About Alpha Net"
          sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
        />
        <p className="text-lg leading-relaxed text-justify max-w-2xl mx-auto">
          Alpha Net has been serving Enterprise IT Solutions in Bangladesh since
          2001. Currently serving thousands of customers worldwide including
          Bangladesh and the USA. All services are using many Government and
          Corporate organization. Alpha Net builds and manages own Server
          infrastructure in Bangladesh and the USA. At present, Alpha Net is
          working to extend infrastructure in India, Canada, South Africa,
          Singapore and Mexico.
        </p>
      </div>
      <div className="container mx-auto px-6">
        <SectionTitle
          subHeading="Who we are"
          sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
        />
        <p className="text-base leading-relaxed text-justify max-w-2xl mx-auto">
          Alpha Net is dedicated IT specialists who recognize that a successful
          technology implementation requires more than just getting the proper
          hardware and applications. It must begin with a thorough understanding
          of each customer's strategy and business needs. Leadership and senior
          consultants have decades of combined experience, allowing Alpha Net to
          bring a complete understanding of a wide range of business
          environments to every clients.
        </p>
      </div>
      {/* Meet the Team  */}
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-4xl font-bold mb-4 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="bg-slate-500 text-white shadow-lg"
            >
              <CardContent>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="mb-4 mt-5 w-16 h-16 rounded-full mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-center">{member.title}</p>
                <p className="text-sm text-center mt-2">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
