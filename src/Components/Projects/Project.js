import React from "react";
import { Box, Text, Image } from "native-base";

function Project() {
  return (
    <Box padding={6} shadow={8} marginTop={4}>
      <Box flexDir={["col", "row"]}>
        <Box width={["100%", "50%"]}>
          <Text marginBottom={4} fontWeight={800} fontSize={"xl"}>
            Projects
          </Text>
          <Image
            borderRadius={4}
            source={{
              uri: "https://storage.googleapis.com/crio-content-container-assets/ME_ME_PROJECT_AMAZON_CLONE_REACT_MODULE_ME_PROJECT_AMAZON_CLONE_REACT_MODULE_AMAZON_CLONE_REACT_9_sample_app_screenshot.png",
              //   uri: require("../../assets/profileIMG.png"),
            }}
            alt="Alternate Text"
            size="2xl"
          />
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

export default Project;
