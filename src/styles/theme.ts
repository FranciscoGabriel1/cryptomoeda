import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F8FAFD",
        color: "#000000",
      },
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
});
