import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ReviewCardType = {
  ellipse12?: string;
  johnnyCash?: string;
  june2023?: string;
  prop?: string;
  michellesPlaceWasSoGreatA?: string;

  /** Style props */
  propLetterSpacing?: CSSProperties["letterSpacing"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  ellipse12,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
  propLetterSpacing,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
      minWidth: propMinWidth,
    };
  }, [propLetterSpacing, propMinWidth]);

  const june2023Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="flex-1 rounded-lg bg-white box-border flex flex-col items-start justify-start py-[1.375rem] px-[1.437rem] gap-[0.75rem] min-w-[21.875rem] max-w-full text-left text-[1rem] text-dark font-archivo border-[1px] border-solid border-light-grey-border mq750:min-w-full">
      <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[1rem]">
          <img
            className="h-[4rem] w-[4rem] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src={ellipse12}
          />
          <div className="flex flex-col items-start justify-start gap-[0.187rem]">
            <div
              className="relative tracking-[0.02em] leading-[150%] font-semibold inline-block min-w-[6.313rem]"
              style={johnnyCashStyle}
            >
              {johnnyCash}
            </div>
            <div
              className="relative text-[0.875rem] tracking-[0.02em] text-gray-200 inline-block min-w-[4.313rem]"
              style={june2023Style}
            >
              {june2023}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-[1.25rem] px-[0rem] gap-[0.187rem]">
          <div className="h-[0.688rem] relative tracking-[0.02em] font-semibold flex items-center min-w-[1.563rem]">
            {prop}
          </div>
          <img
            className="h-[1rem] w-[1rem] relative"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch relative tracking-[0.02em] leading-[160%]">
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
