import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import SocialMediaLogin from "./SocialMediaLogin";
import { useNavigate } from "react-router-dom";

const Form: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className="flex-1 bg-white flex flex-col items-start justify-start py-[2.5rem] px-[3rem] box-border gap-[2.325rem] max-w-full text-left text-[1.625rem] text-dark font-archivo mq750:gap-[1.188rem] mq750:pt-[12.719rem] mq750:px-[1.5rem] mq750:pb-[1.625rem] mq750:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
        <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-bold font-inherit shrink-0 [debug_commit:1de1738] mq450:text-[1.313rem]">
          Sign in
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738]">
          <form className="m-0 self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[1.668rem]">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.981rem]">
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[3.188rem] font-archivo text-[1rem] text-light-text"
                placeholder="Email address"
                variant="outlined"
                type="email"
                InputProps={{
                  endAdornment: (
                    <img width="20px" height="20px" src="/iconaccount.svg" />
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
                    <img width="20px" height="20px" src="/iconpassword.svg" />
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
              Sign in
            </Button>
          </form>
        </div>
      </div>
      <div className="self-stretch h-[0.125rem] relative box-border border-t-[1.6px] border-solid border-whitesmoke-200" />
      <SocialMediaLogin
        orSignUpWith="Or sign in with"
        image="/image11@2x.png"
        image1="/image-16@2x.png"
        image2="/image-22@2x.png"
      />
      <div
        className="self-stretch relative text-[1rem] tracking-[0.02em] leading-[1.625rem] text-center cursor-pointer"
        onClick={onDontHaveAnClick}
      >
        <span>{`Don’t have an account yet? `}</span>
        <span className="text-accent">Sign up</span>
      </div>
    </div>
  );
};

export default Form;
