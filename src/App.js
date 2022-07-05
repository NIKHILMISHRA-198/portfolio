import {
  Box,
  Image,
  Text,
  Link,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack,
} from "native-base";
import Banner from "./Components/Banner";
import Certificate from "./Components/Certificates/Certificate";
import Navbar from "./Components/Navbar";
import Project from "./Components/Projects/Project";

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
      <Box justifyContent="flex-end" zIndex={"-1"} padding={4}>
        <ToggleDarkMode zIndex="-1" />
      </Box>
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
