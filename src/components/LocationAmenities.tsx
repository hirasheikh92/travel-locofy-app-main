import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const LocationAmenities: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[1.187rem] max-w-full text-left text-[1.5rem] text-dark font-archivo mq1275:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[34.188rem] max-w-full mq750:min-w-full">
        <h3 className="m-0 w-[48.8rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit inline-block max-w-full mq450:text-[1.188rem]">
          Amenities
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.937rem] text-[1rem] mq450:gap-[0.938rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.875rem] mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[1.393rem] pl-[0rem] box-border gap-[0.875rem] min-w-[12.188rem]">
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.313rem] w-[1.25rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/mdilake.svg"
                />
                <div className="relative inline-block min-w-[4rem]">
                  Lakeside
                </div>
              </div>
              <div className="w-[6rem] flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/tablertoolskitchen2.svg"
                />
                <div className="flex-1 relative">Kitchen</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsnestcamiqoutdooroutline.svg"
                />
                <div className="relative">Security cameras on property</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/ionwifi.svg"
                />
                <div className="relative inline-block min-w-[1.688rem]">
                  Wifi
                </div>
              </div>
            </div>
            <div className="flex-[0.605] flex flex-col items-start justify-start py-[0rem] pr-[7.268rem] pl-[0rem] box-border gap-[0.875rem] min-w-[12.188rem] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/phcar.svg"
                />
                <div className="relative inline-block min-w-[5.563rem]">
                  Free parking
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/cilshower.svg"
                />
                <div className="relative inline-block min-w-[7.125rem]">
                  Outdoor shower
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolswatervocoutlinerounded.svg"
                />
                <div className="relative inline-block min-w-[4.25rem]">
                  Hot water
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/covidpersonalhygienehandliquidsoap.svg"
                />
                <div className="relative inline-block min-w-[4.375rem]">
                  Shampoo
                </div>
              </div>
            </div>
            <div className="flex-[0.6303] flex flex-col items-start justify-start py-[0rem] pr-[6.893rem] pl-[0rem] box-border gap-[0.875rem] min-w-[12.188rem] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/phfireextinguisher.svg"
                />
                <div className="relative inline-block min-w-[7.5rem]">
                  Fire Extinguisher
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  alt=""
                  src="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
                />
                <div className="relative inline-block min-w-[3.438rem]">
                  Freezer
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolscoffeemakeroutline.svg"
                />
                <div className="relative inline-block min-w-[5.938rem]">
                  Coffee Maker
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
                  loading="lazy"
                  alt=""
                  src="/mdistove.svg"
                />
                <div className="relative inline-block min-w-[5.25rem]">
                  Glass stove
                </div>
              </div>
            </div>
          </div>
          <Button
            className="w-[11.563rem] h-[3rem] hover:bg-saddlebrown"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
              width: 185,
              height: 48,
            }}
          >
            Show all amenities
          </Button>
        </div>
      </div>
      <div className="w-[30rem] flex flex-col items-start justify-start min-w-[30rem] max-w-full mq1275:flex-1 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start relative gap-[1.25rem] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-[0rem] mq750:flex-wrap">
            <div className="w-[20.375rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.312rem] max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[0.02em] font-semibold font-inherit mq450:text-[1.188rem]">
                Where you’ll be
              </h3>
              <div className="flex flex-row items-center justify-start gap-[0.375rem] text-[1rem]">
                <img
                  className="h-[0.688rem] w-[0.581rem] relative"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="relative inline-block min-w-[6.813rem]">
                  The Bridle Path
                </div>
              </div>
            </div>
            <div className="w-[9.625rem] rounded-xl flex flex-row items-start justify-start py-[0.125rem] px-[0rem] box-border gap-[1.5rem] text-center text-[0.625rem]">
              <div className="w-[6.75rem] flex flex-row items-start justify-start gap-[0.625rem] text-left text-[1rem]">
                <img
                  className="h-[2.938rem] w-[2.938rem] relative"
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-[0rem] px-[0rem] gap-[0.125rem]">
                  <div className="relative tracking-[0.02em] leading-[150%] font-semibold inline-block min-w-[2.375rem]">
                    20°C
                  </div>
                  <div className="relative text-[0.875rem] tracking-[0.02em] text-gray-200 inline-block min-w-[5.813rem] whitespace-nowrap">
                    Broken clouds
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <div className="w-[2.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/sun.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[0.688rem] relative inline-block">
                      23°C
                    </b>
                  </div>
                </div>
                <div className="w-[2.5rem] flex flex-col items-center justify-start">
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    Sun
                  </div>
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    27 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <div className="w-[2.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[0.688rem] relative inline-block">
                      22°C
                    </b>
                  </div>
                </div>
                <div className="w-[2.5rem] flex flex-col items-center justify-start">
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    Mon
                  </div>
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    28 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <div className="w-[2.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/sun.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[0.688rem] relative inline-block">
                      23°C
                    </b>
                  </div>
                </div>
                <div className="w-[2.5rem] flex flex-col items-center justify-start">
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    Tue
                  </div>
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    29 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <div className="w-[2.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[0.688rem] relative inline-block">
                      20°C
                    </b>
                  </div>
                </div>
                <div className="w-[2.5rem] flex flex-col items-center justify-start">
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    Wed
                  </div>
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    30 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <div className="w-[2.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[0.688rem] relative inline-block">
                      19°C
                    </b>
                  </div>
                </div>
                <div className="w-[2.5rem] flex flex-col items-center justify-start">
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    Thu
                  </div>
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    31 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[0.5rem]">
                <div className="w-[2.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
                  <img
                    className="w-[2.5rem] h-[2.5rem] relative"
                    alt=""
                    src="/sun.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[0.688rem] relative inline-block">
                      24°C
                    </b>
                  </div>
                </div>
                <div className="w-[2.5rem] flex flex-col items-center justify-start">
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    Fri
                  </div>
                  <div className="self-stretch h-[0.688rem] relative inline-block">
                    1 Sep
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch h-[15.5rem] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/map-placeholder@2x.png"
          />
          <img
            className="w-[2.313rem] h-[4.063rem] absolute !m-[0] right-[0.75rem] bottom-[10.063rem] rounded overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;
