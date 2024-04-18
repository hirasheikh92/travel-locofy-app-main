import { FunctionComponent } from "react";

const SearchSectionHeader: FunctionComponent = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between pt-[0.875rem] px-[0rem] pb-[0rem] box-border max-w-[80rem] gap-[1.25rem] text-left text-[1.25rem] text-black font-archivo mq750:flex-wrap mq1275:max-w-full">
      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
        <h3 className="m-0 relative text-inherit tracking-[0.02em] leading-[120%] font-normal font-inherit inline-block min-w-[7.938rem] mq450:text-[1rem] mq450:leading-[1.188rem]">
          Stays nearby:
        </h3>
        <h3 className="m-0 relative text-inherit tracking-[0.02em] leading-[120%] font-semibold font-inherit mq450:text-[1rem] mq450:leading-[1.188rem]">
          Toronto Ontario
        </h3>
      </div>
      <div className="w-[5.25rem] rounded-4xs bg-white box-border flex flex-row items-center justify-start py-[0.25rem] px-[0.312rem] border-[0.7px] border-solid border-light-grey-border">
        <div className="rounded-md bg-accent flex flex-row items-start justify-start p-[0.5rem]">
          <img
            className="h-[1.25rem] w-[1.25rem] relative"
            alt=""
            src="/bento-menu1.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start p-[0.5rem]">
          <img
            className="h-[1.25rem] w-[1.25rem] relative"
            alt=""
            src="/map.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSectionHeader;
