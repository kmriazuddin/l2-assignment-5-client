import SectionTitle from "@/components/ui/SectionTitle";
import { useState } from "react";

const testimonials = [
  {
    image: "https://i.ibb.co/CKphy1g/avartar.png",
    name: "Alexandra Alina",
    role: "Software Engineer",
    review:
      "The meeting room was spacious and well-equipped. It made our team meeting productive.",
  },
  {
    image: "https://i.ibb.co/s5DD7B4/Mask-group.png",
    name: "Milyena Smith",
    role: "Product Manager",
    review:
      "Excellent facilities and very professional staff. Highly recommend This Meeting Room Booking!",
  },
  {
    image: "https://i.ibb.co/xqnp2Zq/testimonial2.png",
    name: "Taisiya Johnson",
    role: "HR Management",
    review:
      "Great atmosphere and amenities. The meeting room exceeded our expectations and Let's Start.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === testimonials?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="md:px-12 w-full p-4 rounded-md">
      <div className="container mx-auto">
        <SectionTitle
          subHeading="Customer Reviews"
          sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
        />
        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform ease-out duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials?.map((testimonial, index) => (
                <div key={index} className="min-w-full flex justify-center p-4">
                  <div className="bg-slate-500 rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <p className="text-xl text-white font-medium mb-2">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white mb-3">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-200 text-center mb-3">
                      {testimonial.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-cyan-500 text-pink-500 rounded-full px-5 py-3"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-cyan-500 text-pink-500 rounded-full px-5 py-3"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
