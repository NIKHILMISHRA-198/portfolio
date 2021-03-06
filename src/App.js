import { Box, Text, HStack, Switch, useColorMode } from "native-base";
import Banner from "./Components/Banner";
import Certificate from "./Components/Certificates/Certificate";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Project from "./Components/Projects/Project";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
      // justifyContent="flex-end"
      height={"100%"}
      width={"100%"}
      px={4}
    >
      <Navbar />

      <Banner />
      <Project />
      <Certificate />
      {/* <Skills /> */}
      <Testimonials />
      <Box justifyContent="flex-end" zIndex={"-1"} padding={4}>
        <ToggleDarkMode zIndex="-1" />
      </Box>
      <Footer />
    </Box>
  );
}

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        accessibilityLabel={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default App;
