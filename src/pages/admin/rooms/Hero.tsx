import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const carouselItems = [
  {
    image: "https://i.ibb.co/ky1N46m/room-used-official-event.jpg",
    title:
      "A meeting room is a room in a hotel where a number of people can have a meeting",
    description:
      "Our business center has 15 first floor meeting rooms. The hotel has installed meeting rooms for its corporate guests",
  },
  {
    image: "https://i.ibb.co/7zCZpcD/room-used-official-event-2.jpg",
    title:
      "Rooms bring HD video collaboration into any space – in the office, in the classroom, or at home.",
    description:
      "Collaboration Zone: Uniting Teams, Generating Ideas, and Crafting Solutions in a Dynamic, Engaging Environment.",
  },
  {
    image: "https://i.ibb.co/zsgSNpz/room-used-official-event-3.jpg",
    title:
      "When you hire a Regus meeting room in Dhaka, you'll have access to a well-equipped meeting space with WiFi.",
    description:
      "meeting rooms in different capacities are equipped with multimedia, projector, pc, internet connection, fax, sound system.",
  },
  {
    image: "https://i.ibb.co/4f0CS40/room-used-official-event-4.jpg",
    title:
      "Meeting spaces are the locations in a workplace where multiple people gather.",
    description:
      "Encouraging Creativity, Strategic Planning, and Collaborative Problem-Solving to Propel Business Initiatives Forward.",
  },
];

const Hero = () => {
  return (
    <Carousel>
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div
              className="relative md:px-12 w-full p-4 mt-2 md:mt-16 min-h-[500px] flex items-center justify-center"
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="relative z-10 text-center text-white">
                <h1 className="mb-5 md:px-28 text-3xl md:text-5xl font-bold">
                  {item.title}
                </h1>
                <p className="mb-5 text-xl ">{item.description}</p>
                <Link
                  to="/rooms"
                  className="bg-cyan-500 mt-8 text-white text-base hover:bg-pink-500 font-medium py-3 px-5 tracking-wider rounded-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-cyan-500 mt-12 md:mt-0 ml-16 text-white" />
      <CarouselNext className="bg-cyan-500 md:mt-0 mt-12 mr-16 text-white" />
    </Carousel>
  );
};

export default Hero;
