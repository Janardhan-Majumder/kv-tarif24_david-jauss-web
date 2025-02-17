import React from "react";
import Container from "../Container";
import SectionHeading from "../ui/SectionHeading";
const WorksSection = () => {
  return (
    <Container className="space-y-6 lg:space-y-10">
      <SectionHeading text="HOW IT WORKS" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 max-w-7xl mx-auto">
        <div
          //   style={{
          //     clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
          //   }}
          className="py-6 lg:py-10 px-10 flex items-center justify-center text-center bg-primary text-xl xl:text-3xl font-medium md:-mr-3 rounded md:[clip-path:polygon(0%_0%,90%_0%,100%_50%,90%_100%,0%_100%)]"
        >
          <p className="max-w-xs mx-auto">
            Fill out the form without obligation & receive a free mandate.
          </p>
        </div>
        <div
          //   style={{
          //     clipPath:
          //       "polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%)",
          //   }}
          className="py-6 lg:py-10 px-10 flex items-center justify-center text-center bg-playground text-xl xl:text-3xl font-medium md:-mx-3 rounded md:[clip-path:polygon(90%_0%,100%_50%,90%_100%,0%_100%,10%_50%,0%_0%)]"
        >
          <p className="max-w-xs mx-auto">
            Receive an offer and discuss it with a qualified advisor.
          </p>
        </div>
        <div className="py-6 lg:py-10 px-10 flex items-center justify-center text-center bg-primary text-xl xl:text-3xl font-medium md:-ml-3 rounded md:[clip-path:polygon(100%_0,100%_50%,100%_100%,0%_100%,10%_50%,0%_0%)]">
          <p className="max-w-xs mx-auto">
            Request a reduction and save up to 35% permanently.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WorksSection;
