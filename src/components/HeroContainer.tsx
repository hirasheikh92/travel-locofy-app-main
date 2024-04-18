import { FunctionComponent, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const HeroContainer: FunctionComponent = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-[2.525rem] text-black font-archivo">
        <div className="self-stretch flex flex-col items-center justify-start pt-[3.125rem] px-[5rem] pb-[1.875rem] box-border bg-[url('/public/frame-38@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pl-[2.5rem] mq750:pr-[2.5rem] mq750:box-border">
          <div className="w-full flex flex-col items-start justify-start gap-[1.5rem] max-w-[80rem] mq1275:max-w-full">
            <div className="flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
              <b className="relative leading-[110%] inline-block max-w-full mq750:text-[2rem] mq750:leading-[2.25rem] mq450:text-[1.5rem] mq450:leading-[1.688rem]">
                <span>{`Find a `}</span>
                <span className="text-accent">host</span>
                <span> for every journey</span>
              </b>
              <h3 className="m-0 relative text-[1.25rem] leading-[120%] font-light font-inherit mq450:text-[1rem] mq450:leading-[1.188rem]">
                Discover the best local rental properties that fits your every
                travel needs
              </h3>
            </div>
            <div className="self-stretch rounded-3xs bg-white shadow-[0px_6px_12px_rgba(0,_0,_0,_0.02)] box-border flex flex-row items-center justify-start py-[0.562rem] px-[0.687rem] gap-[0.625rem] max-w-full border-[0.7px] border-solid border-light-grey-border mq750:flex-col mq1275:flex-wrap">
              <TextField
                className="[border:none] bg-[transparent] h-[4rem] flex-1 font-roboto text-[0.875rem] text-black min-w-[22.25rem] max-w-full mq750:min-w-full mq750:flex-[unset] mq750:self-stretch mq1275:self-stretch mq1275:w-auto"
                placeholder="Accommodation"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="25px" height="25px" src="/iconhome.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "64px",
                    backgroundColor: "#fff",
                    paddingRight: "12px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="flex-1 flex flex-row items-center justify-start gap-[0.875rem] min-w-[27.375rem] max-w-full mq750:flex-wrap mq750:min-w-full mq750:flex-[unset] mq750:self-stretch mq1275:self-stretch mq1275:w-auto">
                <div className="h-[4rem] flex-1 min-w-[8.125rem] mq750:min-w-full">
                  <DatePicker
                    value={frameDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setFrameDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "#d9d9d9",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "#d9d9d9" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d9d9d9",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                      },
                      input: {
                        color: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#fff",
                        height: 64,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "Check-in",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="30px"
                            height="30px"
                            src="/calendartodayfilled.svg"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <div className="h-[4rem] flex-1 min-w-[8.125rem] mq750:min-w-full">
                  <DatePicker
                    value={frameDateTimePicker1Value}
                    onChange={(newValue: any) => {
                      setFrameDateTimePicker1Value(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "#d9d9d9",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "#d9d9d9" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#d9d9d9",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                      },
                      input: {
                        color: "rgba(0, 0, 0, 0.85)",
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#fff",
                        height: 64,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "Check-out",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="30px"
                            height="30px"
                            src="/calendartodayfilled-1.svg"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className="[border:none] bg-[transparent] h-[4rem] flex-1 font-roboto text-[0.875rem] text-gray-300 min-w-[8.125rem] mq750:min-w-full"
                  placeholder="Guest"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="25px" height="25px" src="/iconuser.svg" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "64px",
                      backgroundColor: "#fff",
                      paddingRight: "12px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.85)" },
                  }}
                />
              </div>
              <Button
                className="h-[4rem] w-[8.875rem] mq750:text-center mq750:self-stretch mq750:w-auto mq750:min-w-[142]"
                startIcon={
                  <img width="19px" height="19px" src="/iconsearch.svg" />
                }
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#00c29f",
                  borderRadius: "4px",
                  "&:hover": { background: "#00c29f" },
                  width: 142,
                  height: 64,
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;
