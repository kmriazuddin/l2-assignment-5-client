import SectionTitle from "@/components/ui/SectionTitle";
import {
  FaDoorOpen,
  FaCalendarAlt,
  FaCheckCircle,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaDoorOpen className="text-4xl text-yellow-500" />,
    title: "Select a Room",
    description: "Choose the perfect room for your meeting or event.",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-lime-600" />,
    title: "Choose Date & Time",
    description: "Pick a convenient date and time for your booking.",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-green-500" />,
    title: "Confirm Booking",
    description: "Review and confirm your booking details.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-4xl text-sky-500" />,
    title: "Done with Payment",
    description: "Complete the payment to finalize your booking.",
  },
];

const HowWorkWebsite = () => {
  return (
    <div className="py-16 md:mt-12  px-8 ">
      <SectionTitle
        subHeading="How it Works"
        heading="Need Help?"
        sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-3 flex-col items-center"
          >
            <div className="mb-4 text-[#5a685a]">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[#5a685a]">
              {step.title}
            </h3>
            <p className="text-center text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorkWebsite;
