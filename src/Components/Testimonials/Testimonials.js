import { Box, Image, Text, VStack } from "native-base";
import React from "react";

function Testimonials() {
  return (
    <Box padding={6} shadow={8} marginTop={6} maxWidth={"100%"}>
      <Text marginBottom={4} fontWeight={800} fontSize={"xl"}>
        Testimonials
      </Text>
      <Box justifyContent={"space-evenly"} flexDir={["column", "row"]}>
        <Box marginRight={10} width={"25%"} shadow={6} borderColor={"gray.100"}>
          <VStack padding={10} alignItems={"center"}>
            <Image
              alt="Hey"
              size={["10", "20"]}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
              }}
            />
            <Text marginTop={1} fontWeight={500}>
              NAME
            </Text>
            <Text marginTop={1} fontWeight={500}>
              Designation
            </Text>
            <Text textAlign={"center"} marginTop={2} fontWeight={300}>
              We did few projects together and it was a really nice experience.
              Got a lot to learn about various things and explore new fields
              together.
            </Text>
          </VStack>
        </Box>
        <Box marginRight={10} width={"25%"} shadow={6} borderColor={"gray.100"}>
          <VStack padding={10} alignItems={"center"}>
            <Image
              alt="Hey"
              size={["10", "20"]}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
              }}
            />
            <Text marginTop={1} fontWeight={500}>
              NAME
            </Text>
            <Text marginTop={1} fontWeight={500}>
              Designation
            </Text>
            <Text textAlign={"center"} marginTop={2} fontWeight={300}>
              We did few projects together and it was a really nice experience.
              Got a lot to learn about various things and explore new fields
              together.
            </Text>
          </VStack>
        </Box>
        <Box marginRight={10} width={"25%"} shadow={6} borderColor={"gray.100"}>
          <VStack padding={10} alignItems={"center"}>
            <Image
              alt="Hey"
              size={["10", "20"]}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
              }}
            />
            <Text marginTop={1} fontWeight={500}>
              NAME
            </Text>
            <Text marginTop={1} fontWeight={500}>
              Designation
            </Text>
            <Text textAlign={"center"} marginTop={2} fontWeight={300}>
              We did few projects together and it was a really nice experience.
              Got a lot to learn about various things and explore new fields
              together.
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export default Testimonials;
