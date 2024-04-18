import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

const Homepage: FunctionComponent = () => {
  const onShowMoreButtonClick = useCallback(() => {
    //TODO: please show more list items of onclick  this button
  }, []);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal] text-left text-[0.875rem] text-black font-archivo">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <main className="self-stretch flex flex-col items-center justify-start py-[1.5rem] px-[5rem] gap-[1.375rem] mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border mq1275:pt-[1.25rem] mq1275:pb-[1.25rem] mq1275:box-border">
        <SearchSectionHeader />
        <CardList />
        <Button
          className="w-[9.188rem] h-[3rem] cursor-pointer"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
            width: 147,
            height: 48,
          }}
          onClick={onShowMoreButtonClick}
        >
          Show more
        </Button>
      </main>
      <Footer />
      <div className="self-stretch box-border flex flex-col items-center justify-start pt-[0.625rem] px-[5rem] pb-[0.75rem] max-w-full border-t-[1px] border-solid border-light-grey-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border">
        <div className="w-full flex flex-row items-start justify-center max-w-[80rem] mq1275:max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-[80rem] gap-[1.25rem] mq750:flex-wrap mq1275:max-w-full">
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

export default Homepage;
