import { Box, HStack, Image, Link, Text, VStack, Button } from "native-base";
import React from "react";

function Certificate() {
  return (
    <Box padding={6} shadow={8} marginTop={6} maxWidth={"100%"}>
      <Text marginBottom={4} fontWeight={800} fontSize={"xl"}>
        Certifications
      </Text>
      <Box
        padding={[2, 4]}
        paddingLeft={[4, 8]}
        paddingRight={8}
        justifyContent={"space-between"}
        flexDir={["column", "row"]}
        flexWrap={"wrap"}
      >
        <HStack marginBottom={2} marginTop={2}>
          <Image
            alt="Hey"
            size={["10", "20"]}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
            }}
          />
          <VStack width={"90%"}>
            <Text
              width={"container"}
              fontWeight={550}
              marginLeft={4}
              fontSize={["sm", "md"]}
            >
              MTA- HTML5 Application Development Fundamentals
            </Text>
            <HStack paddingRight={2} justifyContent={"space-between"}>
              <Text fontWeight={200} fontSize={"sm"} marginLeft={4}>
                Microsoft
              </Text>
              <Text fontWeight={200} fontSize={"sm"} marginLeft={4}>
                June 15, 2002
              </Text>
            </HStack>

            <Link href="https://nativebase.io" isExternal isUnderlined>
              <Button
                borderRadius={10}
                padding={2}
                size={"sm"}
                colorScheme={"gray"}
                marginLeft={4}
                variant={"outline"}
              >
                Show Credential
              </Button>
            </Link>
          </VStack>
        </HStack>

        <HStack marginBottom={2} marginTop={2}>
          <Image
            alt="Hey"
            size={["10", "20"]}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
            }}
          />
          <VStack width={"90%"}>
            <Text
              width={"container"}
              fontWeight={550}
              marginLeft={4}
              fontSize={["sm", "md"]}
            >
              MTA- HTML5 Application Development Fundamentals
            </Text>
            <HStack paddingRight={2} justifyContent={"space-between"}>
              <Text fontWeight={200} fontSize={"sm"} marginLeft={4}>
                Microsoft
              </Text>
              <Text fontWeight={200} fontSize={"sm"} marginLeft={4}>
                June 15, 2002
              </Text>
            </HStack>

            <Link href="https://nativebase.io" isExternal isUnderlined>
              <Button
                borderRadius={10}
                padding={2}
                size={"sm"}
                colorScheme={"gray"}
                marginLeft={4}
                variant={"outline"}
              >
                Show Credential
              </Button>
            </Link>
          </VStack>
        </HStack>

        <HStack marginBottom={2} marginTop={2}>
          <Image
            alt="Hey"
            size={["10", "20"]}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
            }}
          />
          <VStack width={"90%"}>
            <Text
              width={"container"}
              fontWeight={550}
              marginLeft={4}
              fontSize={["sm", "md"]}
            >
              MTA- HTML5 Application Development Fundamentals
            </Text>
            <HStack paddingRight={2} justifyContent={"space-between"}>
              <Text fontWeight={200} fontSize={"sm"} marginLeft={4}>
                Microsoft
              </Text>
              <Text fontWeight={200} fontSize={"sm"} marginLeft={4}>
                June 15, 2002
              </Text>
            </HStack>

            <Link href="https://nativebase.io" isExternal isUnderlined>
              <Button
                borderRadius={10}
                padding={2}
                size={"sm"}
                colorScheme={"gray"}
                marginLeft={4}
                variant={"outline"}
              >
                Show Credential
              </Button>
            </Link>
          </VStack>
        </HStack>

        <HStack marginBottom={2} marginTop={2}>
          <Image
            alt="Hey"
            size={["10", "20"]}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
            }}
          />
          <VStack width={"90%"}>
            <Text
              width={"container"}
              fontWeight={550}
              marginLeft={4}
              fontSize={["sm", "md"]}
            >
              MTA- HTML5 Application Development Fundamentals
            </Text>
            <HStack paddingRight={2} justifyContent={"space-between"}>
              <Text fontWeight={200} fontSize={"sm"} marginLeft={4}>
                Microsoft
              </Text>
              <Text fontWeight={200} fontSize={"sm"} marginLeft={4}>
                June 15, 2002
              </Text>
            </HStack>

            <Link href="https://nativebase.io" isExternal isUnderlined>
              <Button
                borderRadius={10}
                padding={2}
                size={"sm"}
                colorScheme={"gray"}
                marginLeft={4}
                variant={"outline"}
              >
                Show Credential
              </Button>
            </Link>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default Certificate;
