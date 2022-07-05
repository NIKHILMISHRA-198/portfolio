import React from "react";
import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Icon,
  Button,
  Link,
} from "native-base";

function Project() {
  return (
    <Box padding={6} shadow={8} marginTop={4} maxwidth={"100vw"}>
      <Text marginBottom={4} fontWeight={800} fontSize={"xl"}>
        Projects
      </Text>
      <Box
        marginTop={4}
        marginBottom={4}
        flexDir={["col", "row"]}
        width={"100%"}
      >
        <Box width={["100%", "50%"]}>
          <Image
            width={["100%", "50%"]}
            borderRadius={4}
            source={{
              uri: "https://storage.googleapis.com/crio-content-container-assets/ME_ME_PROJECT_AMAZON_CLONE_REACT_MODULE_ME_PROJECT_AMAZON_CLONE_REACT_MODULE_AMAZON_CLONE_REACT_9_sample_app_screenshot.png",
              //   uri: require("../../assets/profileIMG.png"),
            }}
            alt="Alternate Text"
            size="2xl"
          />
        </Box>
        <Box marginTop={4} width={["100%", "200"]}>
          <VStack space={4} textAlign={["center", "justify"]}>
            <Text bold underline>
              Amazon Clone
            </Text>
            <Text>
              Built using MERN Stack with full stack implementation.Users can
              upload products, Buy and admins can even track product delivery
              status from time of shipment to time of delivery.
            </Text>
            <Text bold> Tech Stack Used:</Text>
            <Text>ReactJS, Firebase, MongoDB, NodeJS</Text>
            <Text bold>
              Collaborators
              <HStack space={2}>
                {/* <Icon as={Ionicons} name="home" /> */}

                <Text>Collaborator1</Text>
                <Text>Collaborator2</Text>
              </HStack>
            </Text>
          </VStack>
        </Box>
      </Box>

      <Box
        marginTop={4}
        marginBottom={4}
        flexDir={["col", "row"]}
        width={"100%"}
      >
        <Box width={["100%", "50%"]}>
          <Image
            width={["100%", "50%"]}
            borderRadius={4}
            source={{
              uri: "https://storage.googleapis.com/crio-content-container-assets/ME_ME_PROJECT_AMAZON_CLONE_REACT_MODULE_ME_PROJECT_AMAZON_CLONE_REACT_MODULE_AMAZON_CLONE_REACT_9_sample_app_screenshot.png",
              //   uri: require("../../assets/profileIMG.png"),
            }}
            alt="Alternate Text"
            size="2xl"
          />
        </Box>
        <Box marginTop={4} width={["100%", "200"]}>
          <VStack space={4} textAlign={["center", "justify"]}>
            <Text bold underline>
              Amazon Clone
            </Text>
            <Text>
              Built using MERN Stack with full stack implementation.Users can
              upload products, Buy and admins can even track product delivery
              status from time of shipment to time of delivery.
            </Text>
            <Text bold> Tech Stack Used:</Text>
            <Text>ReactJS, Firebase, MongoDB, NodeJS</Text>
            <Text bold>
              Collaborators
              <HStack space={2}>
                {/* <Icon as={Ionicons} name="home" /> */}

                <Text>Collaborator1</Text>
                <Text>Collaborator2</Text>
              </HStack>
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export default Project;
