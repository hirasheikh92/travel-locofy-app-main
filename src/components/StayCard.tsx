import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StayCardType = {
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propPadding?: CSSProperties["padding"];
  propLetterSpacing?: CSSProperties["letterSpacing"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
  propPadding,
  propLetterSpacing,
}) => {
  const favoriteIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const stayCardInfoStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const bridlepathOntarioCanadaStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
    };
  }, [propLetterSpacing]);

  return (
    <div className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-row items-start justify-start min-w-[20.313rem] max-w-full [row-gap:20px] text-left text-[0.75rem] text-accent font-archivo border-[1px] border-solid border-light-grey-border mq450:flex-wrap">
      <div
        className="h-[8.938rem] w-[11.313rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[6.437rem] box-border relative gap-[0.625rem] bg-[url('/public/favorite-icon@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[11.313rem] mq450:flex-1"
        style={favoriteIconStyle}
      >
        <div className="!m-[0] absolute top-[0.625rem] left-[0.625rem] rounded-smi bg-white hidden flex-row items-center justify-start py-[0.375rem] px-[0.437rem] gap-[0.125rem] z-[0]">
          <img
            className="h-[0.625rem] w-[0.419rem] relative"
            alt=""
            src="/superhost-icon.svg"
          />
          <div className="h-[0.5rem] relative tracking-[-0.01em] font-medium flex items-center">
            Superhost
          </div>
        </div>
        <div className="w-[1.875rem] h-[1.875rem] absolute !m-[0] top-[0.625rem] right-[0.594rem] flex items-center justify-center z-[1]">
          <img
            className="w-full h-full object-contain absolute left-[0rem] top-[0rem] [transform:scale(1.533)]"
            alt=""
            src="/hearticon-1.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start p-[1rem] box-border gap-[1.25rem] min-w-[10.25rem] text-[1rem] text-dark">
        <div
          className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[2.081rem] pl-[0rem] gap-[0.75rem]"
          style={stayCardInfoStyle}
        >
          <div className="flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="relative tracking-[0.02em] font-semibold">
              {brightwoodsEstate}
            </div>
            <div
              className="relative text-[0.875rem] tracking-[0.27px] text-light-text"
              style={bridlepathOntarioCanadaStyle}
            >
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.312rem] text-[0.875rem]">
            <div className="h-[0.625rem] relative tracking-[0.02em] font-semibold flex items-center min-w-[1.375rem]">
              4.8
            </div>
            <img
              className="h-[0.813rem] w-[0.813rem] relative min-h-[0.813rem]"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-accent">
          <div className="flex flex-row items-center justify-start gap-[0.125rem]">
            <div className="h-[0.688rem] relative tracking-[0.02em] font-semibold inline-block min-w-[2.375rem] whitespace-nowrap">
              $502
            </div>
            <div className="h-[0.625rem] relative text-[0.875rem] tracking-[0.02em] text-light-text inline-block min-w-[2.313rem]">
              /night
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
