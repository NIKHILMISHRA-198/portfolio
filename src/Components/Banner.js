import { Box, VStack, Text, Image, Center } from "native-base";
import React from "react";
// import ProfileIMG from "../assets/profileIMG.png";

function Banner() {
  return (
    <Box shadow={8}>
      <Box padding={6} flexDirection={["column-reverse", "row"]}>
        <VStack
          textAlign={["justify", "left"]}
          space={5}
          maxWidth={["100%", "50%"]}
        >
          <Text fontWeight={800} fontSize={"xl"}>
            I'm Nikhil, a
          </Text>
          <Text fontWeight={600} fontSize={"l"}>
            WEB DEVELOPER
          </Text>
          <Text fontWeight={500} fontSize={"m"}>
            I am passionate about technology and particularly web development.
            <br />
            By Education I'm a computer science engineering undergrad. By Hobby,
            I am a photographer and an amateur reader. <br />
            Along with Technology I have also worked in the Marketing Domain in
            an Ed-Tech Startup. In modern education, content plays a very vital
            role and so does the marketing of the content so that it reaches the
            suitable audience.
          </Text>
        </VStack>

        <Center padding={6} width={["100%", "50%"]}>
          <Image
            _dark={{
              borderColor: "coolGray.800",
              backgroundColor: "gray.50",
              shadow: 9,
              borderWidth: 0,
            }}
            _web={{
              shadow: 4,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.800",
              shadow: 9,
              borderWidth: 0,
            }}
            borderRadius={200}
            source={{
              // uri: "https://media-exp1.licdn.com/dms/image/C4E03AQHl2FZW4fe3gg/profile-displayphoto-shrink_200_200/0/1622976644460?e=1662595200&v=beta&t=qahvamXd1Q9qsIO4SVCFPd5LDAAQ7it1hUUmScM9fzY",
              uri: require("../assets/profileIMG.png"),
            }}
            alt="Alternate Text"
            size="2xl"
          />
        </Center>
      </Box>
    </Box>
  );
}

export default Banner;
