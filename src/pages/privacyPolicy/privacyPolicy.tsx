import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "@/components/ui/SectionTitle";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="md:py-16">
      <div className="container mx-auto px-6 mb-16">
        <SectionTitle
          subHeading="Privacy and Policy"
          sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
        />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-2">
          <Card
            data-aos="fade-up"
            className=" text-gray-900 bg-slate-300 shadow-lg"
          >
            <CardContent>
              <h3 className="text-xl font-semibold mt-2 mb-2">Spamming:</h3>
              <p className="text-base leading-relaxed text-justify">
                Sending unsolicited bulk and/or commercial information over the
                Internet. It is not only harmful because of its negative impact
                on consumer attitudes toward Alpha Net, but also because it can
                overload Alpha Net' network and disrupt service to Alpha Net'
                subscribers.
              </p>
            </CardContent>
          </Card>
          <Card
            data-aos="fade-up"
            data-aos-delay="100"
            className=" text-gray-900 bg-slate-300 shadow-lg"
          >
            <CardContent>
              <h3 className="text-xl font-semibold mt-2 mb-2">
                Large File Policy:
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Alpha Net is not for file hosting and distribution - as such,
                customers may not host any files larger than 50MB in size that
                are observed to be available for the sole purpose of download.
                Such files include but are not limited to.ISO, audio/video files
                .EXE files. If you are unsure whether your file is against this
                policy, please e-mail info@ancbd.com.
              </p>
            </CardContent>
          </Card>
          <Card
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-slate-300 text-gray-900 shadow-lg"
          >
            <CardContent>
              <h3 className="text-xl font-semibold mt-2 mb-2">
                Other Illegal Activities:
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Engaging in activities that are determined to be illegal,
                including, but not limited to, advertising, transmitting or
                otherwise making available ponzi schemes, pyramid schemes,
                fraudulently charging credit cards and pirating software.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
