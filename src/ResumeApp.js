import Resume from "./components/Resume";
import ResumeCenter from "./components/ResumeCenter";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

function ResumeApp() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Resume  /> */}
      <ResumeCenter  />
    </ChakraProvider>
  );
}

export default ResumeApp;
