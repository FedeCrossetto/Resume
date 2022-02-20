import Resume from "./components/Resume";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

function ResumeApp() {
  return (
    <ChakraProvider theme={theme}>
      <Resume />
    </ChakraProvider>
  );
}

export default ResumeApp;
