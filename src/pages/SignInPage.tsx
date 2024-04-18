import { FunctionComponent } from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const SignInPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.006rem] box-border leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a]">
      <Header
        notifications="/notifications1@2x.png"
        avatar="/avatar1@2x.png"
        showLoginSection={false}
      />
      <main className="self-stretch flex flex-row items-start justify-center py-[12.718rem] px-[1.25rem] box-border bg-[url('/public/login-sections1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] mt-[-0.007rem] mq750:gap-[1.75rem] mq750:pb-[5.375rem] mq750:box-border mq1100:pb-[8.25rem] mq1100:box-border">
        <div className="w-[36.813rem] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <Form />
        </div>
      </main>
      <footer className="self-stretch box-border flex flex-col items-center justify-start pt-[0.625rem] px-[5rem] pb-[0.75rem] max-w-full z-[2] mt-[-0.007rem] text-left text-[0.875rem] text-black font-archivo border-t-[1px] border-solid border-light-grey-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border">
        <div className="w-full flex flex-row items-start justify-center max-w-[80rem] mq1275:max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-[80rem] gap-[1.25rem] mq1275:max-w-full mq750:flex-wrap">
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
      </footer>
    </div>
  );
};

export default SignInPage;
