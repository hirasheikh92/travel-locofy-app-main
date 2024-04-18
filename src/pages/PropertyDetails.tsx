import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";

const PropertyDetails: FunctionComponent = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-[0.875rem] text-black font-archivo">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <main className="self-stretch bg-gray-100 flex flex-col items-start justify-start py-[1.25rem] px-[3.125rem] box-border gap-[2.75rem] max-w-full mq750:gap-[1.375rem] mq750:pl-[1.563rem] mq750:pr-[1.563rem] mq750:box-border">
        <FrameComponent />
        <section className="self-stretch flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
          <ListingDescription />
          <LocationAmenities />
        </section>
        <ReviewSection />
        <SimilarStaysSection />
      </main>
      <Footer
        supportMargin="unset"
        hostingMargin="unset"
        localhostMargin="unset"
      />
      <div className="self-stretch bg-gray-100 box-border flex flex-col items-center justify-start pt-[0.625rem] px-[5rem] pb-[0.75rem] max-w-full border-t-[1px] border-solid border-light-grey-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border">
        <div className="w-full flex flex-row items-start justify-center max-w-[80rem] mq1275:max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-[80rem] gap-[1.25rem] mq1275:max-w-full mq750:flex-wrap">
            <div className="relative leading-[1.063rem] font-light">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="flex flex-row items-start justify-start gap-[1.25rem] mq450:flex-wrap">
              <div className="relative leading-[1.063rem] font-light inline-block min-w-[5.313rem]">
                Privacy Policy
              </div>
              <div className="relative leading-[1.063rem] font-light inline-block min-w-[7.5rem]">{`Terms & Conditions`}</div>
              <div className="relative leading-[1.063rem] font-light inline-block min-w-[4.188rem]">
                Contact us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
