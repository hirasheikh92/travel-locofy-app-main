import { FunctionComponent } from "react";

export type ListingItemType = {
  listingImage?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  showBestTime?: boolean;

  /** Action props */
  onListingItemContainerClick?: () => void;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  onListingItemContainerClick,
}) => {
  return (
    <div
      className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-col items-start justify-start relative min-w-[17.5rem] cursor-pointer text-left text-[0.75rem] text-accent font-archivo border-[1px] border-solid border-light-grey-border"
      onClick={onListingItemContainerClick}
    >
      <img
        className="self-stretch h-[18.75rem] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={listingImage}
      />
      <div className="!m-[0] absolute top-[0.625rem] left-[0.625rem] rounded-smi bg-white hidden flex-row items-center justify-start py-[0.375rem] px-[0.437rem] gap-[0.125rem] z-[1]">
        <img
          className="h-[0.625rem] w-[0.419rem] relative"
          alt=""
          src="/superhost-icon.svg"
        />
        <div className="h-[0.5rem] relative tracking-[-0.01em] font-medium flex items-center">
          Superhost
        </div>
      </div>
      <div className="w-[1.875rem] h-[1.875rem] absolute !m-[0] top-[0.625rem] right-[1.688rem] z-[1] flex items-center justify-center">
        <img
          className="w-full h-full z-[1] object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.533)]"
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start p-[1rem] gap-[0.875rem] text-[1rem] text-dark">
        <div className="self-stretch flex flex-row items-center justify-between gap-[0rem] [row-gap:20px] mq450:flex-wrap">
          <div className="w-[14.438rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.25rem]">
            <div className="relative tracking-[0.3px] leading-[1rem] font-semibold">
              {listingTitle}
            </div>
            <div className="relative text-[0.875rem] tracking-[0.02em] leading-[0.875rem] text-light-text">
              {listingSubtitle}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0.312rem] text-[0.875rem]">
            <div className="h-[0.625rem] relative tracking-[0.02em] font-semibold flex items-center min-w-[1.375rem]">
              {rating}
            </div>
            <img
              className="h-[0.813rem] w-[0.813rem] relative min-h-[0.813rem]"
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0.312rem] px-[0rem] gap-[1.25rem] text-[1.188rem] mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start py-[0rem] pr-[4.687rem] pl-[0rem] gap-[0.125rem]">
            <div className="h-[0.813rem] relative tracking-[0.02em] font-semibold inline-block min-w-[2.813rem] whitespace-nowrap">
              {price}
            </div>
            <div className="h-[0.625rem] relative text-[0.875rem] tracking-[0.02em] text-light-text inline-block min-w-[2.313rem]">
              /night
            </div>
          </div>
          {showBestTime && (
            <div className="flex flex-row items-center justify-start gap-[0.375rem] text-[0.875rem] text-accent">
              <img
                className="h-[1.125rem] w-[1.125rem] relative object-cover min-h-[1.125rem]"
                loading="lazy"
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className="relative tracking-[0.02em] inline-block min-w-[4.375rem]">
                Price chart
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
