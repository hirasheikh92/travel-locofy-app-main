import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import SocialMediaLogin from "../components/SocialMediaLogin";
import { useNavigate } from "react-router-dom";

const SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a]">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className="self-stretch flex flex-row items-start justify-center pt-[10.631rem] px-[1.25rem] pb-[10.637rem] box-border bg-[url('/public/login-sections@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[1.625rem] text-dark font-archivo mq750:gap-[1.75rem] mq750:pt-[4.5rem] mq750:pb-[4.5rem] mq750:box-border mq1100:pt-[6.938rem] mq1100:pb-[6.938rem] mq1100:box-border">
        <div className="w-[36.813rem] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 bg-white flex flex-col items-start justify-start py-[2.5rem] px-[3rem] box-border gap-[2.356rem] max-w-full mq750:gap-[1.188rem] mq750:py-[1.625rem] mq750:px-[1.5rem] mq750:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
              <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-bold font-inherit mq450:text-[1.313rem]">
                Create Account
              </h2>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.856rem] box-border max-w-full">
                <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[1.668rem] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.981rem]">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[3.188rem] font-archivo text-[1rem] text-light-text"
                      placeholder="Email address"
                      variant="outlined"
                      type="email"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconaccount.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[3.188rem] font-archivo text-[1rem] text-light-text"
                      placeholder="Password"
                      variant="outlined"
                      type="password"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[3.188rem] font-archivo text-[1rem] text-light-text"
                      placeholder="Confirm password"
                      variant="outlined"
                      type="password"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword-1.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                  </div>
                  <Button
                    className="w-[10rem] h-[3.25rem] hover:bg-saddlebrown"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#00c29f",
                      borderRadius: "6px",
                      "&:hover": { background: "#00c29f" },
                      width: 160,
                      height: 52,
                    }}
                  >
                    Sign up
                  </Button>
                </form>
              </div>
              <div className="self-stretch h-[0.856rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.756rem] box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1.6px] border-solid border-whitesmoke-200" />
              </div>
              <SocialMediaLogin
                orSignUpWith="Or sign up with"
                image="/image1@2x.png"
                image1="/image-15@2x.png"
                image2="/image-21@2x.png"
              />
            </div>
            <div
              className="self-stretch relative text-[1rem] tracking-[0.02em] leading-[1.625rem] text-center cursor-pointer"
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className="text-accent">Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="self-stretch box-border flex flex-col items-center justify-start pt-[0.625rem] px-[5rem] pb-[0.75rem] max-w-full text-left text-[0.875rem] text-black font-archivo border-t-[1px] border-solid border-light-grey-border mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border">
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

export default SignUpPage;
