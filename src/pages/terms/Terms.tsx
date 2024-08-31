import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "@/components/ui/SectionTitle";

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="md:py-16">
      <div className="container mx-auto px-6 mb-16">
        <SectionTitle
          subHeading="Terms and Condition"
          sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
        />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
          <Card
            data-aos="fade-up"
            className="bg-slate-300 text-gray-900 shadow-lg"
          >
            <CardContent>
              <h3 className="text-xl font-semibold mt-2 mb-3">Traffic Usage</h3>
              <p className="text-base leading-relaxed text-justify">
                All account plans come with a predetermined amount of traffic
                allowance. We monitor all accounts and bill $1.00 for each gig
                of traffic exceeded. This amount is not prorated, meaning that 1
                mb - 1 gig will be treated and billed as the same.
              </p>
            </CardContent>
          </Card>
          <Card
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-slate-300 text-gray-900 shadow-lg"
          >
            <CardContent>
              <h3 className="text-xl font-semibold mt-2 mb-3">
                Refusal of Service
              </h3>
              <p className="text-base leading-relaxed text-justify">
                We reserve the right to refuse, cancel or suspend service, at
                our sole discretion. All sub-networks, distributive hosting
                sites and dedicated servers of Alpha Net must adhere to the
                above policies, with the exception of system resources in
                respect to dedicated servers.
              </p>
            </CardContent>
          </Card>
          <Card
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-slate-300 text-gray-900 shadow-lg"
          >
            <CardContent>
              <h3 className="text-xl font-semibold mt-2 mb-3">
                Uptime Guarantee
              </h3>
              <p className="text-base leading-relaxed text-justify">
                Alpha Net's goal is to provide 100% service (http, ftp, pop,
                imap, smtp) uptime on all hosting plans. Should we fail to
                deliver this for any given calendar month, your account will be
                credit in accordance with our Service Level Agreement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
