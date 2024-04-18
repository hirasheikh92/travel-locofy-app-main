import { FunctionComponent } from "react";

const ListingDescription: FunctionComponent = () => {
  return (
    <div className="self-stretch box-border flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.375rem] gap-[1.25rem] max-w-full text-left text-[1.5rem] text-dark font-archivo border-b-[1px] border-solid border-light-grey-border">
      <h3 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-semibold font-inherit mq450:text-[1.188rem]">
        About this home
      </h3>
      <div className="self-stretch flex flex-row items-start justify-start gap-[2.5rem] max-w-full text-[1rem] mq1275:flex-wrap mq750:gap-[1.25rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[33.688rem] max-w-full mq750:min-w-full">
          <div className="self-stretch relative leading-[160%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
              heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
              tranquility of nature's embrace, is designed to provide the
              ultimate relaxing getaway.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">{`Living Space: `}</b>
              <span>
                This charming cabin boasts a spacious living area adorned with
                rustic decor and modern amenities. Enjoy the warmth of the
                wood-burning fireplace, relax on the plush sofas, and make
                yourself at home with our entertainment center featuring a
                flat-screen TV, WiFi, and more.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Bedrooms:</b>
              <span>
                {" "}
                With 3 beautifully appointed bedrooms, our cabin comfortably
                accommodates up to [number of guests]. Each room is furnished
                with luxurious bedding and unique woodland-inspired touches to
                ensure a restful slumber.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">{`Kitchen & Dining:`}</b>
              <span>
                {" "}
                Our fully-equipped kitchen offers everything you need to prepare
                delicious home-cooked meals. The open dining area provides a
                welcoming space to enjoy meals with friends and family.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Bathrooms:</b>
              <span>
                {" "}
                2 modern bathrooms stocked with fresh towels, toiletries, and
                all essential amenities add to your convenience.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Outdoor Space:</b>
              <span>
                {" "}
                Step outside to a serene outdoor setting. Whether it's a morning
                coffee on the porch, a BBQ in the yard, or a soothing evening by
                the fire pit, the beauty of Bridlepath is at your doorstep.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Location:</b>
              <span>
                {" "}
                Located just minutes from [local attractions, trails, dining,
                shopping], our cabin offers the perfect base to explore the best
                of the region or simply unwind in seclusion.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Hosted with Love:</b>
              <span>
                {" "}
                We take pride in hosting our guests and are committed to making
                your stay unforgettable. We're just a call or message away
                should you need anything during your stay.
              </span>
            </p>
            <p className="m-0">
              Come, be our guest at [Cabin Name], and experience a piece of
              woodland serenity right here in Bridlepath, Ontario. Book now and
              make yourself at home!
            </p>
          </div>
          <div className="relative tracking-[0.46px] leading-[1.625rem] font-semibold text-accent text-center inline-block min-w-[5.5rem]">
            Show more
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-[0rem] pr-[8.687rem] pl-[0rem] box-border gap-[1.5rem] min-w-[29.375rem] max-w-full text-[1.125rem] mq1275:flex-1 mq1275:pr-[0rem] mq1275:box-border mq750:min-w-full">
          <div className="flex flex-row items-center justify-start gap-[1.25rem] mq450:flex-wrap">
            <img
              className="h-[3.75rem] w-[3.75rem] relative rounded-lg overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame-65.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[0.125rem]">
              <div className="relative tracking-[0.02em] leading-[150%] font-semibold">
                Dedicated workspace
              </div>
              <div className="relative text-[1rem] tracking-[0.02em] text-gray-200">
                A private room equipped with WiFi
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[1.25rem] mq450:flex-wrap">
            <img
              className="h-[3.75rem] w-[3.75rem] relative rounded-lg overflow-hidden shrink-0"
              alt=""
              src="/frame-65-1.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[0.125rem]">
              <div className="relative tracking-[0.02em] leading-[150%] font-semibold inline-block min-w-[6.938rem]">
                Self check-in
              </div>
              <div className="relative text-[1rem] tracking-[0.02em] text-gray-200">
                Check in with just your phone
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[1.25rem]">
            <img
              className="h-[3.75rem] w-[3.75rem] relative rounded-lg overflow-hidden shrink-0"
              alt=""
              src="/frame-65-2.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[0.125rem]">
              <div className="relative tracking-[0.35px] leading-[150%] font-semibold">
                Free cancellation
              </div>
              <div className="relative text-[1rem] tracking-[0.02em] text-gray-200 inline-block min-w-[7.188rem]">
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDescription;
