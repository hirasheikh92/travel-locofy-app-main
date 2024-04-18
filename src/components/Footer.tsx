import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterType = {
  /** Style props */
  supportMargin?: CSSProperties["margin"];
  hostingMargin?: CSSProperties["margin"];
  localhostMargin?: CSSProperties["margin"];
};

const Footer: FunctionComponent<FooterType> = ({
  supportMargin,
  hostingMargin,
  localhostMargin,
}) => {
  const supportStyle: CSSProperties = useMemo(() => {
    return {
      margin: supportMargin,
    };
  }, [supportMargin]);

  const hostingStyle: CSSProperties = useMemo(() => {
    return {
      margin: hostingMargin,
    };
  }, [hostingMargin]);

  const localhostStyle: CSSProperties = useMemo(() => {
    return {
      margin: localhostMargin,
    };
  }, [localhostMargin]);

  return (
    <footer className="self-stretch bg-light-bg box-border flex flex-row flex-wrap items-start justify-center py-[1.25rem] px-[5rem] min-h-[18rem] max-w-full text-left text-[1rem] text-dark font-archivo border-t-[1px] border-solid border-light-grey-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start max-w-[80rem] mq1275:max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0.625rem] max-w-full mq1275:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.875rem] min-w-[19.688rem] max-w-full">
            <h3
              className="m-0 relative text-[1.25rem] font-semibold font-inherit inline-block min-w-[4.688rem] mq450:text-[1rem]"
              style={supportStyle}
            >
              Support
            </h3>
            <div className="relative inline-block min-w-[5.313rem]">
              Help Centre
            </div>
            <div className="relative inline-block min-w-[3.938rem]">
              AirCover
            </div>
            <div className="relative">Combating discrimination</div>
            <div className="relative">Supporting people with disabilities</div>
            <div className="relative">Cencellation options</div>
            <div className="relative">Report neighbourhood concern</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.875rem] min-w-[19.688rem] max-w-full">
            <h3
              className="m-0 relative text-[1.25rem] font-semibold font-inherit inline-block min-w-[4.563rem] mq450:text-[1rem]"
              style={hostingStyle}
            >
              Hosting
            </h3>
            <div className="relative inline-block min-w-[5.188rem]">
              Local home
            </div>
            <div className="relative inline-block min-w-[6.688rem]">
              Cover for hosts
            </div>
            <div className="relative">Hosting resources</div>
            <div className="relative inline-block min-w-[8rem]">
              Community forum
            </div>
            <div className="relative">Hosting responsibly</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.875rem] min-w-[19.688rem] max-w-full">
            <h3
              className="m-0 relative text-[1.25rem] font-semibold font-inherit inline-block min-w-[5.75rem] mq450:text-[1rem]"
              style={localhostStyle}
            >
              Localhost
            </h3>
            <div className="relative inline-block min-w-[4.875rem]">
              Newsroom
            </div>
            <div className="relative inline-block min-w-[6.188rem]">
              New Features
            </div>
            <div className="relative inline-block min-w-[3.563rem]">
              Careers
            </div>
            <div className="relative inline-block min-w-[4.125rem]">
              Investres
            </div>
            <div className="relative inline-block min-w-[4.313rem]">
              Gift cards
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
