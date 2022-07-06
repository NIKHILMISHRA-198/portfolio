import React from "react";
import { Box, Center, HStack, Link, Text, VStack } from "native-base";
function Footer() {
  return (
    <Box
      shadow={8}
      _dark={{
        borderColor: "coolGray.800",
        backgroundColor: "gray.900",
      }}
      _web={{
        shadow: 4,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.150",
      }}
      width={"100%"}
    >
      <Center>
        <VStack paddingTop={4} space={2} textAlign={"center"}>
          <Text bold>Would Love to Hear from you</Text>
          <Text>
            <button>
              <Link>Reach Out to me</Link>
            </button>
          </Text>
          <HStack space={4}>
            <Text>Insta</Text>
            <Text>FaceBook</Text>
            <Text>Linkedin</Text>
            <Text>Twitter</Text>
          </HStack>

          <Text paddingBottom={4}>© Developer/ Nikhil Mishra</Text>
        </VStack>
      </Center>
    </Box>
  );
}

export default Footer;
