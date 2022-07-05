import React from "react";
import { Text, Box, HStack } from "native-base";

function Navbar() {
  return (
    <Box
      px={4}
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.800",
      }}
      _web={{
        shadow: 4,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
      width={"100%"}
    >
      <HStack space={5} flexDirection={"row-reverse"} padding={4}>
        <Text>Skills</Text>
        <Text>Certifications</Text>
        <Text>Testimonials</Text>
        <Text>Resume</Text>
      </HStack>
    </Box>
  );
}

export default Navbar;
