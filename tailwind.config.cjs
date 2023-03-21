/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        hm: "10rem"
      },
      backgroundImage: {
        rad: "radial-gradient(var(--tw-gradient-stops))"
      },
      colors: {
        xx: "hsl(214, 47%, 23%)",
        xy: "hsl(237, 49%, 15%)",
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        whiteShadow: "#565468",
        darkBlue: "#2A45C2",
        darkRed: "#9D1634",
        darkYellow: "#C76C1B",
        headerOneish: "hsl(216, 21%, 86%)",
        rulesText: "#1F3757",
        playWin: "#3B4262",
        playLoss: "#DD3F3F",
        hovRules: "#3B4262"
      },
      borderColor: {
        header: "hsl(217, 16%, 45%)"
      },

      fontFamily: {
        barlow: ["Barlow Semi Condensed"]
      },
      fontSize: {
        rps: "2.5rem"
      },
      lineHeight: {
        rpsh: "0.85"
      },
      gridTemplateRows: {
        auto: "auto"
      },
      spacing: {
        26: "26.875rem",
        rippleTop: "6rem",
        headerPad: "1.5rem",
        101: "27rem",
        100: "25rem",
        102: "29rem",
        105: "37rem",
        79: "-8.3rem",
        seventy: "8.7rem",
        78: "-9rem",
        24: "-24.8rem",
        6: "6.6rem",
        leftTwo: "21rem",
        leftTo: "28rem",
        80: "0vw",
        bDrop: "100%",
        22: "20rem",
        53: "13.5rem"
      },
      backgroundColor: {
        firstRad: "#4664F4",
        secondRad: "#EB9F0E",
        thirdRad: "#DB2E4D",
        kindaWhite: "#F3F3F3"
      },
      boxShadow: {
        innerOne: "inset 0 7px 1px 0 rgba(86, 84, 104, 0.25)",
        innerTwo: "inset 0 -7px 1px 0",
        innerOneBig: "inset 0 12px 1px 0 rgba(86, 84, 104, 0.25)",
        innerTwoBig: "inset 0 -12px 1px 0"
      },
      screens: {
        mobile: { max: "481px" },
        lap: { max: "1100px" },
        tab: { max: "810px" },
        bigMob: { max: "630px" },
        mob: { max: "480px" }
      }
    }
  },
  plugins: []
};
