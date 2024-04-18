/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "#7a7a7a",
          "300": "rgba(0, 0, 0, 0.85)",
        },
        "light-grey-border": "#e8ecf2",
        black: "#000",
        "light-bg": "#f4f4f4",
        dark: "#171e1d",
        white: "#fff",
        accent: "#00c29f",
        "light-text": "#787878",
        saddlebrown: "#975b00",
        lightcyan: "#defff9",
        powderblue: "#c4e6e0",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#ececec",
        },
      },
      spacing: {},
      fontFamily: {
        archivo: "Archivo",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        smi: "13px",
        "4xs": "9px",
        "6xs": "7px",
        mid: "17px",
        "9xs-5": "3.5px",
        "12xs-5": "0.5px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      lgi: "1.188rem",
      xs: "0.75rem",
      "21xl-4": "2.525rem",
      "13xl": "2rem",
      "5xl": "1.5rem",
      "3xs": "0.625rem",
      lg: "1.125rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      "4xl": "1.438rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
