import { FunctionComponent } from "react";

export type HeaderType = {
  notifications?: string;
  avatar?: string;
  showLoginSection?: boolean;
};

const Header: FunctionComponent<HeaderType> = ({
  notifications,
  avatar,
  showLoginSection,
}) => {
  return (
    <header className="self-stretch bg-white flex flex-col items-center justify-start pt-[0.875rem] px-[5rem] pb-[0.75rem] top-[0] z-[99] sticky text-left text-[0.875rem] text-black font-archivo border-b-[1px] border-solid border-light-grey-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border">
      <div className="w-full flex flex-row items-center justify-between max-w-[80rem] gap-[1.25rem] mq1275:max-w-full">
        <img
          className="h-[2.531rem] w-[9.8rem] relative"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className="flex flex-row items-start justify-start gap-[1.875rem] mq750:hidden">
          <div className="relative inline-block min-w-[2.438rem]">Home</div>
          <div className="relative inline-block min-w-[2.25rem]">Stays</div>
          <div className="relative inline-block min-w-[5.875rem] whitespace-nowrap">
            Become a host
          </div>
        </div>
        {showLoginSection && (
          <div className="flex flex-row items-center justify-start gap-[1.25rem]">
            <img
              className="h-[1.656rem] w-[1.625rem] relative object-contain"
              loading="lazy"
              alt=""
              src={notifications}
            />
            <img
              className="h-[2.25rem] w-[2.25rem] relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src={avatar}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
