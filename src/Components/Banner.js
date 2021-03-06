import { Box, VStack, Text, Image, Center } from "native-base";
import React from "react";
import Wave from "react-wavify";
import Typewriter from "typewriter-effect";
// import ProfileIMG from "../assets/profileIMG.png";

function Banner() {
  return (
    <Box shadow={8} zIndex={"-1"}>
      <Box marginTop={"-25"}>
        <Wave mask="url(#mask)" fill="#1277b0">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect
                x="0"
                y="0"
                width="2000"
                height="200"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
      </Box>
      <Box padding={6} flexDirection={["column-reverse", "row"]}>
        <VStack
          textAlign={["justify", "left"]}
          space={5}
          maxWidth={["100%", "50%"]}
        >
          <Text fontWeight={800} fontSize={"xl"}>
            I'm Pankhuri,
          </Text>
          <Text bold fontSize={"xl"}>
            {/* WEB DEVELOPER */}
            <Typewriter
              options={{
                strings: [
                  "a Web Developer",
                  "a TECH ENTHUSIAST",
                  "an AVID READER",
                  "a PUBLIC SPEAKER",
                ],
                autoStart: true,
                loop: true,
              }}
            />
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
              uri: "https://pbs.twimg.com/profile_images/1515618328496140290/mwEiFZ4t_400x400.jpg",
              // uri: require("../assets/profileIMG.png"),
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
