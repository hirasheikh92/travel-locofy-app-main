import { FunctionComponent } from "react";
import ReviewCard from "./ReviewCard";

const ReviewSection: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-left text-[1.5rem] text-dark font-archivo">
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
        <h3 className="m-0 relative text-inherit tracking-[0.02em] font-semibold font-inherit inline-block min-w-[6.125rem] mq450:text-[1.188rem]">
          Reviews
        </h3>
        <div className="relative text-[1rem] tracking-[0.46px] leading-[1.625rem] font-semibold text-accent text-center inline-block min-w-[3.75rem]">
          View all
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] max-w-full text-[1rem]">
        <ReviewCard
          ellipse12="/ellipse-12@2x.png"
          johnnyCash="Johnny Cash"
          june2023="June 2023"
          prop="5.0"
          michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
        />
        <ReviewCard
          ellipse12="/ellipse-12-1@2x.png"
          johnnyCash="Yuta Watanabe"
          june2023="May 2023"
          prop="4.5"
          michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
          propLetterSpacing="0.29px"
          propMinWidth="7.125rem"
          propMinWidth1="4rem"
        />
        <ReviewCard
          ellipse12="/ellipse-12-2@2x.png"
          johnnyCash="Shane Willis"
          june2023="December 2022"
          prop="4.8"
          michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
          propLetterSpacing="0.29px"
          propMinWidth="5.875rem"
          propMinWidth1="6.5rem"
        />
      </div>
    </section>
  );
};

export default ReviewSection;
